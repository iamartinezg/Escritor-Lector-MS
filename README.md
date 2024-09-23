# Escritor-Lector-MS
# Mi Proyecto Flask con Base de Datos MySQL

Este proyecto es una aplicación basada en Flask que proporciona dos microservicios para interactuar con una base de datos MySQL. La base de datos consta de dos tablas: `escritura` y `lectura`. La aplicación incluye funcionalidades para insertar datos y recuperarlos en formato XML.

## Contenido

- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Configuración](#configuración)
- [Ejecución Local](#ejecución-local)
- [Endpoints](#endpoints)
- [Base de Datos](#base-de-datos)

## Descripción

Este proyecto proporciona dos microservicios:
1. **Servicio de Inserción**: Permite insertar mensajes en la tabla `escritura` y replicarlos automáticamente en la tabla `lectura` mediante un trigger.
2. **Servicio de Lectura**: Devuelve todos los mensajes almacenados en la tabla `lectura` en formato XML.

## Requisitos

- Python 3.x
- Flask
- MySQL
- mysql-connector-python

## Configuración

### Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno para conectarte a la base de datos:

```bash
DB_HOST = <host_de_tu_base_de_datos>
DB_USER = <usuario_de_tu_base_de_datos>
DB_PASSWORD = <contraseña_de_tu_base_de_datos>
DB_NAME = <nombre_de_tu_base_de_datos>
