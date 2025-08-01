FROM nginx:alpine

# Удаляем все дефолтные конфиги
RUN rm -f /etc/nginx/conf.d/*

# Копируем наш основной конфиг

COPY ./nginx/nginx.conf  /etc/nginx/nginx.conf

# Создаем директории для сертификатов
RUN mkdir -p /etc/letsencrypt/live/allower.ru

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
