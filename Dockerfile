FROM node:24.13.0
ENV HOME=/app \
    HOST=0.0.0.0

WORKDIR ${HOME}
COPY . ${HOME}
EXPOSE 3000
CMD ["yarn", "dev"]
