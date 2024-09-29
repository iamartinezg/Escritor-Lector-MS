# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración y dependencias
COPY package*.json ./

# Instalar dependencias de la aplicación
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir el proyecto de Gatsby
npm run build

# Exponer el puerto para acceder al frontend
EXPOSE 8000

# Comando para iniciar el servidor de desarrollo de Gatsby
>>>>>>> 9c1b609 (Actualización Docker)
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
