# Stage 1: Build the frontend
FROM oven/bun AS frontend-builder
WORKDIR /app
COPY package.json ./
COPY bun.lock ./
COPY . .
RUN bun ci
RUN bun run build

# Stage 2: Production environment for frontend
FROM oven/bun AS frontend
WORKDIR /app
COPY --from=frontend-builder /app/build ./build
# COPY --from=frontend-builder /app/node_modules ./node_modules
COPY --from=frontend-builder /app/package.json ./package.json
COPY package*.json ./
RUN bun ci:prod
# COPY ./.env ./.env
ENTRYPOINT ["bun", "run", "prod"]
