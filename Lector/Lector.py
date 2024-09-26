from flask import Flask, Response
from flask_cors import CORS
import mysql.connector
import xml.etree.ElementTree as ET

app = Flask(__name__)
CORS(app)

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

# Ruta para obtener todos los mensajes de la tabla 'lectura'
@app.route('/obtener_mensajes', methods=['GET'])
def obtener_mensajes():
    try:
        # Conectarse a la base de datos
        conn = connect_db()
        cursor = conn.cursor(dictionary=True)  # 'dictionary=True' para obtener los resultados como diccionarios
        
        # Consulta para obtener todos los mensajes
        query = "SELECT * FROM lectura"
        cursor.execute(query)
        
        # Obtener todos los registros
        resultados = cursor.fetchall()
        
        # Crear estructura XML
        root = ET.Element("mensajes")
        for row in resultados:
            mensaje = ET.SubElement(root, "mensaje")
            ET.SubElement(mensaje, "id").text = str(row['id'])
            ET.SubElement(mensaje, "texto").text = row['texto']
            ET.SubElement(mensaje, "fecha_hora").text = str(row['fecha_hora'])
        
        # Convertir el XML a string
        xml_response = ET.tostring(root, encoding='utf-8')
        
        # Cerrar la conexión
        cursor.close()
        conn.close()
        
        # Devolver la respuesta en formato XML
        return Response(xml_response, mimetype='application/xml'), 200
    
    except mysql.connector.Error as err:
        return Response(f'<error>Error de base de datos: {err}</error>', mimetype='application/xml'), 500
    except Exception as e:
        return Response(f'<error>Error inesperado: {e}</error>', mimetype='application/xml'), 500

if __name__ == '__main__':
    app.run(debug=True, port=5002)
