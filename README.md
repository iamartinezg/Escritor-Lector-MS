# Escritor-Lector-MS
Este proyecto es una aplicación completa que incluye un frontend desarrollado en Gatsby y dos microservicios en Flask que interactúan con una base de datos MySQL. El proyecto está completamente Dockerizado para facilitar su despliegue y gestión.

## Contenido
- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejecución del Proyecto con Docker](#ejecución-del-proyecto-con-docker)

## Descripción
El proyecto consta de los siguientes componentes:

1. **Frontend (Gatsby):** Permite a los usuarios enviar mensajes y ver los mensajes almacenados.
2. **Microservicio de Escritura (Flask):** Recibe mensajes en formato XML y los almacena en la base de datos.
3. **Microservicio de Lectura (Flask):** Proporciona una lista de mensajes almacenados en la base de datos en formato XML.
4. **Base de Datos (MySQL):** Almacena los mensajes en dos tablas: `escritura` y `lectura`.

## Requisitos
### Requisitos Generales
- Docker
- Docker Compose

### Estructura del Proyecto
```
Escritor-Lector-MS/
├── escritor/
│   ├── escritor.py
│   ├── requirements.txt
│   ├── Dockerfile
├── lector/
│   ├── lector.py
│   ├── requirements.txt
│   ├── Dockerfile
├── gatsby-escritor-lector/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   ├── gatsby-config.js
│   ├── Dockerfile
├── docker-compose.yml
└── README.md
```

### Ejecución del Proyecto con Docker
Construir los Contenedores:
En la raíz del proyecto, ejecuta el siguiente comando para construir todos los contenedores:
```
docker-compose build
```

Iniciar los Contenedores:
Una vez construidos, inicia todos los servicios:
```
docker-compose up
```

Verificar el Estado de los Contenedores:
Para verificar que todos los contenedores estén ejecutándose correctamente:
```
docker-compose ps
```

Acceder a la Aplicación:
- Frontend Gatsby: http://localhost:8000
- Microservicio de Escritura: http://localhost:5001/escribir
- Microservicio de Lectura: http://localhost:5002/obtener_mensajes

Detener y Limpiar los Contenedores:
Para detener y eliminar todos los contenedores, volúmenes y redes creadas:
```
docker-compose down -v
```
