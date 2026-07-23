#!/usr/bin/env bash

# Backup script for Beyond SMP world data

BACKUP_DIR="backups"
DATE=$(date +%Y-%m-%d_%H-%M-%S)
WORLD_DIR="world"

mkdir -p "$BACKUP_DIR"

echo "Starting backup of '$WORLD_DIR' to '$BACKUP_DIR/world_backup_$DATE.tar.gz'..."
if [ -d "$WORLD_DIR" ]; then
    tar -czvf "$BACKUP_DIR/world_backup_$DATE.tar.gz" "$WORLD_DIR"
    echo "Backup completed successfully!"
else
    echo "Error: World directory '$WORLD_DIR' not found!"
fi
