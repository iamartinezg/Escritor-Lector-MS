# Construir desde una imagen base de node
FROM node:18

# Crear y configurar el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el contenido del proyecto
COPY . .

# Exponer el puerto en el que gatsby develop se ejecuta (generalmente 8000)
EXPOSE 8000

# Ejecutar el servidor de desarrollo de Gatsby
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
