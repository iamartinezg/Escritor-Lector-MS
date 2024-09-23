# Escritor-Lector-MS
# Mi Proyecto Flask con Base de Datos MySQL

Este proyecto es una aplicación basada en Flask que proporciona dos microservicios para interactuar con una base de datos MySQL. La base de datos consta de dos tablas: `escritura` y `lectura`. La aplicación incluye funcionalidades para insertar datos y recuperarlos en formato XML.

## Contenido

- [Descripción](#descripción)
- [Requisitos](#requisitos)
- [Configuración](#configuración)
- [Endpoints](#endpoints)


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

##Endpoints
### 1. Servicio de Inserción
- **URL:** `/guardar_xml`
- **Método:** `POST`
- **Content-Type:** `application/xml`
- **Descripción:** Este endpoint permite insertar un mensaje en la tabla `escritura`. El mensaje se replicará automáticamente en la tabla `lectura` mediante un trigger.

#### Ejemplo de Petición
La petición debe contener un cuerpo en formato XML como el siguiente:

```xml
<root>
    <texto>Mensaje de prueba</texto>
</root>

####Ejemplo de Respuesta
Si la inserción es exitosa, se devuelve la siguiente respuesta en formato XML:
```xml
<respuesta>
    <mensaje>Datos guardados exitosamente</mensaje>
</respuesta>
#####Códigos de Respuesta:
201 Created: La solicitud se completó y el recurso se creó exitosamente.
400 Bad Request: La solicitud no es válida. Esto puede ocurrir si el cuerpo del XML está mal formado o falta el campo texto.
500 Internal Server Error: Error en el servidor o en la base de datos.

###2. Servicio de Lectura
URL: /obtener_mensajes
Método: GET
Descripción: Este endpoint devuelve todos los mensajes almacenados en la tabla lectura en formato XML. Cada mensaje incluye su id, texto y fecha_hora de inserción.
Ejemplo de Respuesta
La respuesta contiene una lista de mensajes en formato XML:
```xml
<mensajes>
    <mensaje>
        <id>1</id>
        <texto>Mensaje de prueba</texto>
        <fecha_hora>2024-09-22 12:00:00</fecha_hora>
    </mensaje>
    <mensaje>
        <id>2</id>
        <texto>Otro mensaje de prueba</texto>
        <fecha_hora>2024-09-22 12:05:00</fecha_hora>
    </mensaje>
    <!-- Más mensajes aquí -->
</mensajes>
#####Códigos de Respuesta:
200 OK: La solicitud se completó exitosamente y se devuelve la lista de mensajes.
500 Internal Server Error: Error en el servidor o en la base de datos.

###Notas Adicionales
Ambos endpoints utilizan y devuelven datos en formato XML. Asegúrate de enviar el Content-Type: application/xml en las solicitudes POST.
Las respuestas de error también se formatean en XML para mantener la coherencia con el resto del servicio.
El trigger en la base de datos asegura que cualquier mensaje insertado en la tabla escritura se copie automáticamente en la tabla lectura. No necesitas preocuparte por sincronizar manualmente las tablas.

### Explicación de la Sección de Endpoints

- **URL:** La ruta del endpoint en la API.
- **Método:** El método HTTP que debe usarse para acceder al endpoint (`GET`, `POST`, etc.).
- **Content-Type:** El tipo de contenido que espera el endpoint (en este caso, `application/xml`).
- **Descripción:** Explicación de lo que hace el endpoint.
- **Ejemplo de Petición/Respuesta:** Ejemplos de las solicitudes y respuestas que se pueden enviar y recibir.
- **Códigos de Respuesta:** Los códigos de estado HTTP que el endpoint puede devolver, junto con una breve descripción de cada uno.


