# backend-entrega-4

Realizar un proyecto basado en node.js y express que ofrezca una API RESTfull de productos. En detalle, que incorpore las sgtes rutas:

- GET '/api/productos' > devuelve todos los productos
- GET '/api/productos/:id' > devuelve un producto según su id
- POST '/api/productos' > recibe y agrega un producto y lo devuelve con su id asignado
- PUT '/api/produtos/:id' > Recibe y actualiza según su id
- DELETE '/api/productos/:id' > Elimina un producto según su id

SUGERENCIAS:

Para el caso de que un producto no exista, se devolvera el objeto:
{ error : "producto no encontrado’ }

Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.

Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.

Crear un espacio publico de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.

El servidor debe estar basado en express y debe implementar los mensajes de conexion al puerto 8080 y en caso de error, representar la descripcion del mismo.

Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.
