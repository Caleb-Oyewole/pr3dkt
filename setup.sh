#!/bin/bash
# Setup script to install dependencies and configure the project

cd "$(dirname "$0")/front_end"

echo "Installing dependencies in front_end directory..."
npm install

echo "Setup complete! You can now:"
echo "  - Run: npm run dev (to start development server)"
echo "  - Run: npm run build (to build for production)"
