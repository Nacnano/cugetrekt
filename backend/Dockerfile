FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --force
RUN npx prisma generate

COPY . .

RUN npm run build

FROM node:16

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist


EXPOSE 3000
CMD [ "node", "dist/src/main.js" ]
