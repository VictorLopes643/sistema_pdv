#!/bin/bash

# Preparar algum env
if [ ! -f "./.env" ]; then
    cp ./.env.example ./.env
fi

# Instalar dependências
chmod -R 777 .docker/*
pnpm install

tail -f /dev/null
