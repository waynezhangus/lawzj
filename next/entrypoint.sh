#!/bin/sh
set -e

echo "Running database migrations with drizzle-kit..."
npx drizzle-kit push

echo "Starting application..."
exec "$@"
