FROM nginx:alpine

LABEL org.opencontainers.image.title="ToukrichteMed CV" \
      org.opencontainers.image.description="CV for Mohamed Toukrichte" \
      org.opencontainers.image.version="1.0.0"

COPY src/ /usr/share/nginx/html/
COPY nginx/app.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
