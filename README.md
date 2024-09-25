# Escritor-Lector-MS

Este proyecto es una aplicación que consta de un frontend desarrollado en Gatsby y dos microservicios en Flask que interactúan con una base de datos MySQL. La base de datos incluye dos tablas: `escritura` y `lectura`. La aplicación permite insertar mensajes en la base de datos y visualizar los mensajes almacenados.

## Contenido

- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Configuración del Frontend](#configuración-del-frontend)
- [Ejecución del Frontend](#ejecución-del-frontend)
- [Endpoints del Backend](#endpoints-del-backend)
- [Despliegue](#despliegue)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Descripción

El proyecto consta de las siguientes partes:

1. **Frontend (Gatsby)**: Un sitio estático que se comunica con los microservicios para enviar y mostrar mensajes.
2. **Microservicio de Escritura (Flask)**: Recibe mensajes en formato XML y los almacena en la base de datos.
3. **Microservicio de Lectura (Flask)**: Proporciona una lista de mensajes almacenados en la base de datos en formato XML.

## Requisitos

### Frontend

- Node.js (versión LTS recomendada)
- Gatsby CLI (`npm install -g gatsby-cli`)

### Backend

- Python 3.x
- Flask
- MySQL
- mysql-connector-python
- flask-cors (para permitir CORS entre frontend y backend)

## Configuración del Frontend

### 1. Clonar el Repositorio

Clona el repositorio del proyecto en tu máquina local:

```
git clone https://github.com/iamartinezg/Escritor-Lector-MS.git
cd Escritor-Lector-MS
```
### 2. Configurar el Frontend
Instalar Dependencias:

Navega a la carpeta del frontend y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```
Configurar las Variables de Entorno:

Si utilizas variables de entorno para el frontend, crea un archivo .env en la raíz de la carpeta gatsby-escritor-lector y agrega las variables necesarias, como las URLs de los microservicios Flask:

```bash
GATSBY_API_ESCRITURA=http://localhost:5001/guardar_xml
GATSBY_API_LECTURA=http://localhost:5002/obtener_mensajes
```
### 3. Estructura de Carpetas del Frontend
```
gatsby-escritor-lector/
├── src/
│   ├── components/
│   │   ├── header.js
│   │   ├── layout.js
│   │   ├── seo.js
│   │   └── ...
│   ├── pages/
│   │   ├── enviar-mensaje.js
│   │   ├── mensajes.js
│   │   └── index.js
│   ├── images/
│   └── styles/
│       └── layout.css
├── gatsby-config.js
├── gatsby-browser.js
├── package.json
├── .gitignore
└── .env
```
src/pages/: Contiene las páginas principales (enviar-mensaje.js, mensajes.js y index.js).
src/components/: Contiene los componentes reutilizables del frontend como header.js, layout.js y seo.js.
gatsby-config.js: Configuración de Gatsby y plugins utilizados.
gatsby-browser.js: Configuración global, como el envoltorio del componente de navegación.
.env: Variables de entorno para la configuración del frontend.
### Ejecución del Frontend
Iniciar el Servidor de Desarrollo:

#### Para iniciar el frontend en modo desarrollo, ejecuta el siguiente comando en la raíz del proyecto Gatsby:

```
gatsby develop
El sitio estará disponible en http://localhost:8000.
```
#### Redirección Automática:

Al iniciar el servidor, el frontend redirige automáticamente a la página de envío de mensajes en http://localhost:8000/enviar-mensaje.

Verificar las Páginas:

Página de Enviar Mensaje: Navega a http://localhost:8000/enviar-mensaje para enviar mensajes a la base de datos.
Página de Ver Mensajes: Navega a http://localhost:8000/mensajes para ver los mensajes almacenados.
## Endpoints del Backend
### 1. Servicio de Inserción
URL: /guardar_xml
Método: POST
Content-Type: application/xml
Descripción: Inserta un mensaje en la tabla escritura y lo replica en la tabla lectura.
### 2. Servicio de Lectura
URL: /obtener_mensajes
Método: GET
Descripción: Devuelve todos los mensajes almacenados en la tabla lectura en formato XML.
Despliegue
Despliegue en Render
Subir el Repositorio a GitHub: Asegúrate de que el repositorio contenga tanto el frontend como los microservicios.

#### Configurar el Backend en Render:

Crea servicios web para cada microservicio Flask y una base de datos MySQL.
Configura las variables de entorno para la conexión a la base de datos.
Configurar el Frontend en Render:

Crea un servicio web para el frontend Gatsby.
Configura las variables de entorno necesarias (GATSBY_API_ESCRITURA y GATSBY_API_LECTURA) con las URLs de los microservicios.
Desplegar el Frontend y el Backend:

Una vez configurados los servicios, despliega el frontend y verifica que todas las integraciones funcionen correctamente.
Estructura del Proyecto
El proyecto completo incluye:

Frontend (Gatsby): Directorio gatsby-escritor-lector.
Microservicios (Flask): Directorios escritor y lector con sus respectivos archivos escritor.py y lector.py.
Base de Datos (MySQL): Contiene las tablas escritura y lectura para almacenar y leer mensajes.
