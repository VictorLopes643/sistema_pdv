#!/bin/bash

# Preparar algum env
if [ ! -f "./.env" ]; then
    cp ./.env.example ./.env
fi

# Instalar dependências
pnpm install

tail -f /dev/null