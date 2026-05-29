FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN corepack enable \
  && if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
     elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
     else npm ci; fi

FROM node:20-alpine AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app ./

EXPOSE 3000

CMD ["sh", "-c", "npm run start"]
