# gatsby-escritor-lector/Dockerfile
FROM node:18

# Configuración del entorno
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./

# Establecer variables de entorno para deshabilitar sharp
ENV SKIP_SASS_BINARY_DOWNLOAD_FOR_CI=true
ENV SKIP_NODE_BINARY_DOWNLOAD_FOR_CI=true
ENV SKIP_SHARP_DOWNLOAD=true

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Construir el proyecto Gatsby
RUN npm run build

# Exponer el puerto
EXPOSE 8000

# Comando para ejecutar el servidor de Gatsby
CMD ["npm", "run", "serve"]
