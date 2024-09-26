# escritor/Dockerfile
FROM python:3.9-slim

# Configuración del entorno
WORKDIR /app

# Copiar archivos necesarios
COPY . .

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Exponer el puerto
EXPOSE 5001

# Comando para ejecutar el microservicio
CMD ["python", "escritor.py"]
