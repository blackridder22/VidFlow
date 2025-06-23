# Docker Setup for VidFlow

This guide explains how to run VidFlow using Docker on port 2300.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## Quick Start

### Option 1: Using Docker Run

1. Build the Docker image:
```bash
docker build -t vidflow .
```

2. Run the container on port 2300:
```bash
docker run -p 2300:2300 --name vidflow-app vidflow
```

### Option 2: Using Docker Compose

1. Run with docker-compose:
```bash
docker-compose up -d
```

2. Stop the application:
```bash
docker-compose down
```

## Accessing the Application

Once running, access VidFlow at: http://localhost:2300

## Docker Commands

### Build the image
```bash
docker build -t vidflow .
```

### Run the container
```bash
docker run -p 2300:2300 --name vidflow-app vidflow
```

### Run in detached mode
```bash
docker run -d -p 2300:2300 --name vidflow-app vidflow
```

### Stop the container
```bash
docker stop vidflow-app
```

### Remove the container
```bash
docker rm vidflow-app
```

### View logs
```bash
docker logs vidflow-app
```

### View running containers
```bash
docker ps
```

## Environment Variables

The following environment variables are set in the Docker container:
- `NODE_ENV=production`
- `PORT=2300`

You can override these when running the container:
```bash
docker run -p 2300:2300 -e NODE_ENV=development --name vidflow-app vidflow
```

## Troubleshooting

### Port already in use
If port 2300 is already in use, you can map to a different port:
```bash
docker run -p 3000:2300 --name vidflow-app vidflow
```
Then access at http://localhost:3000

### Container won't start
Check the logs:
```bash
docker logs vidflow-app
```

### Rebuild after changes
```bash
docker build --no-cache -t vidflow .
```