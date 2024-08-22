FROM node:20-slim

# Instalação de pacotes essenciais
RUN apt-get update && apt-get install -y \
    zsh \
    curl \
    git \
    procps \
    iputils-ping \
    fonts-powerline \
    && rm -rf /var/lib/apt/lists/*

# Instalação do Oh My Zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Configuração do Oh My Zsh
RUN sed -i '/^plugins=(/ s/)$/ pnpm)/' /root/.zshrc

# Instalação do pnpm
RUN curl -fsSL https://get.pnpm.io/install.sh | SHELL=zsh sh -

# Ativação da integração do pnpm com o corepack
RUN corepack enable pnpm
# Diretório de trabalho
WORKDIR /home/node/app

# Copiar arquivos relacionados ao projeto e ajustar permissões
COPY . /home/node/app/
RUN chown -R node:node /home/node/app

# Trocar para o usuário node
USER node

# Comando padrão para iniciar o contêiner
CMD ["/bin/zsh", "-c", ".docker/start-dev.sh"]
