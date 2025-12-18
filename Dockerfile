# Этап 1: Сборка приложения с Bun
FROM oven/bun:latest AS builder
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json bun.lock ./

# Устанавливаем зависимости (STL требует все dev-зависимости для сборки)
RUN bun install --frozen-lockfile

# Копируем всё содержимое проекта (кроме того что в .dockerignore)
COPY . .

# Собираем статическое приложение
RUN bun run build

# Этап 2: Production образ с nginx
FROM nginx:alpine AS production

# Копируем собранное статическое приложение из билдера
COPY --from=builder /app/build /usr/share/nginx/html

# Создаём простую конфигурацию nginx для SPA
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
    try_files $uri $uri/ /index.html; \
    } \
    location /spectech-surgut { \
    try_files $uri $uri/ /index.html; \
    } \
    gzip on; \
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml; \
    }' > /etc/nginx/conf.d/default.conf

# Открываем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
