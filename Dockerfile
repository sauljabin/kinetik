FROM node:lts as builder
WORKDIR /kinetik
COPY . /kinetik
RUN npm install && npm run ng build

FROM nginx:stable
COPY --from=builder /kinetik/dist/kinetik /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf.template
COPY docker-entrypoint.sh /kinetik/docker-entrypoint.sh
ENTRYPOINT ["/kinetik/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]