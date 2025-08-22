### Что поменять при смене IP адресов
``` 1) в гитхабе 
upstream flask_api {
    server НОВЫЙ_IP_БЭКЕНДА:5000;  
}
```
##### на сервере бэкэнда 
2) ``` app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:pass@НОВЫЙ_IP_БД:5432/dbname'   ``` (ip db меняем)
##### 3) И в файле .env:
env
``` DATABASE_URL=postgresql://user:pass@НОВЫЙ_IP_БД:5432/dbname ```
##### 4) на сервере у  бд
 ``` sudo vim /etc/postgresql/*/main/pg_hba.conf

# Ищем строку с текущим IP бэкенда и меняем его
# Было: host    allower_db     allower_user     ip/32     md5
# Стало: host    allower_db     allower_user     НОВЫЙ_IP_БЭКЕНДА/32     md5
```
##### # Перезагружаем PostgreSQL
``` sudo systemctl reload postgresql ```
