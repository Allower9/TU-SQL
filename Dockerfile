# Этап сборки (builder)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Этап запуска
FROM nginx:alpine
COPY nginx/frontend.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Копируем билд Next.js
COPY --from=builder --chown=nginx:nginx /app/.next/standalone /usr/share/nginx/html
COPY --from=builder --chown=nginx:nginx /app/.next/static /usr/share/nginx/html/.next/static

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
