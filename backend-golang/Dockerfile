# Imagem base para Go
FROM golang:1.23-bullseye
 

# Instalação de pacotes essenciais
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zsh \
    procps \
    iputils-ping \
    fontconfig \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN go mod tidy

RUN go build -o main ./cmd/main.go


# CMD ["/bin/zsh", "-c", ".docker/start-dev.sh"]
CMD ["tail", "-f", "/dev/null"]