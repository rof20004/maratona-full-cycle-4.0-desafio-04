################
# STEP 1 - build
################
FROM node:12-alpine as builder
WORKDIR /app
COPY . /app
RUN yarn && yarn build

#################
# STEP 2 - deploy
#################
FROM nginx:1.19-alpine

USER nginx

COPY --from=builder /app/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html/

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]