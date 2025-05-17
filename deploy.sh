#!/bin/bash

# Exit on error
set -e

echo "Starting deployment..."

# Update system
echo "Updating system packages..."
sudo apt update
sudo apt upgrade -y

# Install Docker if not installed
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    sudo apt install docker.io -y
    sudo systemctl enable docker
    sudo systemctl start docker
fi

# Add user to docker group if not already added
if ! groups | grep -q docker; then
    echo "Adding user to docker group..."
    sudo usermod -aG docker $USER
    echo "Please log out and log back in for group changes to take effect"
    exit 1
fi

# Install Docker Compose if not installed
if ! command -v docker-compose &> /dev/null; then
    echo "Installing Docker Compose..."
    sudo apt install docker-compose -y
fi

# Install Nginx if not installed
if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    sudo apt install nginx -y
fi

# Install Certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "Installing Certbot..."
    sudo apt install certbot python3-certbot-nginx -y
fi

# Copy Nginx configuration
echo "Configuring Nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/biancagabriela-dev.com
sudo ln -sf /etc/nginx/sites-available/biancagabriela-dev.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

# Build and start Docker containers
echo "Building and starting Docker containers..."
docker-compose up -d --build

echo "Deployment completed! Your services should be accessible at:"
echo "- Portfolio: https://biancagabriela-dev.com"
echo "- Artist App: https://biancagabriela-dev.com/demo/artist"
echo "- Stackoverflow: https://biancagabriela-dev.com/demo/stackoverflow"
echo "- Presentation: https://biancagabriela-dev.com/demo/presentation"

# Check if services are running
echo "Checking service status..."
docker-compose ps
