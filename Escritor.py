from flask import Flask, request, Response
import mysql.connector
from datetime import datetime
import xml.etree.ElementTree as ET

app = Flask(__name__)

# Configuración de la base de datos
db_config = {
    'host': '127.0.0.1',
    'user': 'root',
    'password': 'root',
    'database': 'escritura-lectura'
}

# Conexión a la base de datos
def connect_db():
    return mysql.connector.connect(**db_config)

# Ruta para recibir las peticiones POST en XML
@app.route('/escribir', methods=['POST'])
def guardar_xml():
    try:
        # Verificar si el contenido de la petición es XML
        if request.content_type != 'application/xml':
            return Response('<error>El contenido debe ser de tipo XML</error>', mimetype='application/xml'), 400
        
        # Parsear el XML recibido
        xml_data = request.data
        root = ET.fromstring(xml_data)
        
        # Extraer el texto desde el XML (supongamos que hay un campo llamado 'texto')
        texto = root.find('texto').text if root.find('texto') is not None else None
        if not texto:
            return Response('<error>No se encontró el campo "texto" en el XML</error>', mimetype='application/xml'), 400
        
        # Obtener la fecha y hora actual
        fecha_hora = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # Guardar en la base de datos en la tabla "escritura"
        conn = connect_db()
        cursor = conn.cursor()
        query = "INSERT INTO escritura (texto, fecha_hora) VALUES (%s, %s)"
        cursor.execute(query, (texto, fecha_hora))
        conn.commit()
        cursor.close()
        conn.close()
        
        # Crear respuesta en XML
        respuesta = f'<respuesta><mensaje>Datos guardados exitosamente</mensaje></respuesta>'
        return Response(respuesta, mimetype='application/xml'), 201
    
    except ET.ParseError:
        return Response('<error>Error al parsear el XML</error>', mimetype='application/xml'), 400
    except mysql.connector.Error as err:
        return Response(f'<error>Error de base de datos: {err}</error>', mimetype='application/xml'), 500
    except Exception as e:
        return Response(f'<error>Error inesperado: {e}</error>', mimetype='application/xml'), 500

if __name__ == '__main__':
    app.run(debug=True)
