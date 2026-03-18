# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application using your specific Next.js build command
RUN npm run next-build


# Stage 2: Production environment
FROM node:18-alpine AS production

# Set the working directory in the container
WORKDIR /usr/src/app

# Set node environment to production for better performance
ENV NODE_ENV=production

# Copy package files so npm scripts can be executed
COPY --from=build /usr/src/app/package*.json ./

# Copy the built .next output folder
COPY --from=build /usr/src/app/.next ./.next

# Copy node_modules to run the SSR server
COPY --from=build /usr/src/app/node_modules ./node_modules

# Copy the public folder to serve static assets
COPY --from=build /usr/src/app/public ./public

# [OPTIONAL] Copy Next.js config if you have one (uncomment the correct one for your app)
# COPY --from=build /usr/src/app/next.config.js ./
# COPY --from=build /usr/src/app/next.config.mjs ./

# Expose the port Next.js normally runs on (3000)
EXPOSE 3000

# Start the SSR server using your specific Next.js start command
CMD ["npm", "run", "next-start"]