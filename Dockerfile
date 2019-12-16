#
# NASA Astronomy Picture of the Day slack bot
#

FROM node:alpine
WORKDIR /app
COPY . .
CMD ["npm", "start"]
