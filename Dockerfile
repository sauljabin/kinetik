FROM node:lts as builder
WORKDIR /kinetik
COPY . /kinetik
RUN npm install && npm run ng build

FROM nginx:stable
COPY nginx/*.conf.template /etc/nginx/
COPY kinetik-entrypoint.sh /kinetik-entrypoint.sh
COPY --from=builder /kinetik/dist/kinetik /usr/share/nginx/html
ENTRYPOINT ["/kinetik-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]