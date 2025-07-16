FROM node:18-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --silent

COPY . .
RUN npm run build

# Stage 2: Production image
FROM nginx:alpine

# Копируем конфиг nginx
COPY nginx/frontend.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
# Копируем собранный frontend прямо в html-папку nginx
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
