FROM hub.docker.vodjk.com:5000/node:6.10-alpine
MAINTAINER coldstar yanghf@vodjk.com

ENV NODE_ENV production
ENV PORT 80

RUN mkdir -p /usr/local/server/yst/provider-ui

WORKDIR /usr/local/server/yst/provider-ui

ADD provider-ui/bin ./bin/
ADD provider-ui/node_modules ./node_modules/
ADD provider-ui/public ./public/
ADD provider-ui/routes ./routes/
ADD provider-ui/views ./views/
ADD provider-ui/app.js .
ADD provider-ui/package.json .

ADD entrypoint.sh /

EXPOSE 80

CMD ["/entrypoint.sh"]