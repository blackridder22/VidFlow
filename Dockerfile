# Use the official Node.js 18 image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Expose port 2300
EXPOSE 2300

# Set environment variables
ENV NODE_ENV=production
ENV PORT=2300

# Start the application
CMD ["yarn", "start"]