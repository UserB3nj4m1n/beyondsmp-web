#!/usr/bin/env bash

# Autorestart script for Beyond SMP Minecraft Server

echo "Starting Beyond SMP Server with Auto-Restart..."

while true
do
    echo "Starting the server..."
    java @user_jvm_args.txt @libraries/net/neoforged/neoforge/21.1.231/unix_args.txt nogui
    
    echo "Server stopped or crashed! Restarting in 10 seconds..."
    echo "Press Ctrl+C to abort the restart!"
    
    sleep 10
done
