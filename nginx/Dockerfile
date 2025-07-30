FROM nginx:alpine

# Копируем конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Можно добавить статику, если нужно
# COPY ../public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
