FROM nginx:alpine

# Удаляем дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Копируем базовые конфиги
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/ /etc/nginx/conf.d/

# Создаем директории для сертификатов
RUN mkdir -p /etc/letsencrypt/live/allower.ru

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
