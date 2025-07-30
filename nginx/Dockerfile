FROM nginx:alpine

# Удаляем дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наши конфиги
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/allower.ru.conf /etc/nginx/conf.d/allower.ru.conf

# Создаем директории для сертификатов
RUN mkdir -p /etc/letsencrypt/live/allower.ru

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
