## 构建基于云技术的文件存储与分享平台

体验地址：[[webpan.nightsky.one](https://webpan.nightsky.one)](https://webpan.nightsky.one)

#### docker-compose 一键部署
```bash
 docker compose up -d
 ```

#### nginx配置（有域名）
```bash
server {
    listen 80;
    server_name <域名>;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name <域名>;

    ssl_certificate 证书.cer;
    ssl_certificate_key 私钥.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;


   location / {
    proxy_redirect off;
    proxy_pass http://127.0.0.1:18080;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
   }
}

```
