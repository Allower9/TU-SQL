FROM nginx:alpine

# Удаляем дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наши конфиги
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/allower.online.conf /etc/nginx/conf.d/

# SSL-сертификаты (если используем свои)
# COPY ssl/ /etc/ssl/certs/

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
