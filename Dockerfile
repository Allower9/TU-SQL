# Используем официальный образ Node.js
FROM node:18-alpine AS builder

# Рабочая директория
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Запускаем в production-режиме
FROM node:18-alpine AS runner
WORKDIR /app

# Копируем только нужные файлы
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Указываем порт (Next.js по умолчанию использует 3000)
EXPOSE 3000

# Запускаем сервер
CMD ["npm", "start"]
