const rub = new Intl.NumberFormat('ru-RU');

/**
 * 1500 -> "1 500 ₽" (неразрывные пробелы)
 * @param {number} value
 */
export const formatRub = (value) => `${rub.format(value)} ₽`;

/**
 * 4 -> "4 ч"
 * @param {number} value
 */
export const formatHours = (value) => `${value} ч`;
