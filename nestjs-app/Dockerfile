# ---- Base Node image ----
FROM node:20-alpine AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
COPY package*.json ./
RUN npm ci --only=production

# ---- Build ----
FROM base AS build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Release ----
FROM base AS release
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package*.json ./

EXPOSE 3000
CMD ["node", "dist/main.js"]
