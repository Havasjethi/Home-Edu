FROM node:alpine as builder
WORKDIR /app
ADD . .
RUN npm run build

FROM node:alpine as runtime
WORKDIR /app
COPY --from=builder /app/dist/ /app/dist/
COPY --from=builder /app/node_modules/ /app/node_modules/

CMD node dist/index.js
