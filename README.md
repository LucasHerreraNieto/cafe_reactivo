# Café Reactivo
## Descripción del proyecto

Este proyecto consiste en el desarrollo de un sitio web para la cafetería local llamada "Café Reactivo". El objetivo es crear una aplicación en React que permita a los empleados gestionar los pedidos de los clientes de manera eficiente. La aplicación será visualmente atractiva, funcional y proporcionará una experiencia sencilla para el registro y seguimiento de pedidos.

---

### Requisitos de la Aplicación

### Parte 1: Diseño

El sitio web debe tener: 

- **Presentación de la empresa**: Incluir una breve historia de la cafetería y su filosofía.
- **Menú de navegación**: Un menú accesible desde cualquier parte del sitio que permita navegar entre las secciones.
- **Imágenes representativas**: Imágenes del local con texto alternativo adecuado.
- **Links en imágenes**: Las imágenes deben contener enlaces que abran videos de YouTube sobre el contenido mostrado, en una pestaña nueva.
- **Video tipo iframe de YouTube**: Incluir al menos un video embebido desde YouTube.
- **Texto descriptivo**: Párrafos y títulos que describan las secciones del sitio.
- **Información de contacto**: Dirección, teléfono y horario de apertura de la cafetería.
- **Mapa interactivo**: Un mapa de Google integrado mediante iframe para mostrar la ubicación de la empresa.
- **Pie de página**: Incluir los datos del alumno que está desarrollando el proyecto.

### Parte 2: Aplicación

La aplicación debe permitir las siguientes funcionalidades:

1. **Agregar un pedido**: El usuario puede ingresar el nombre del cliente y seleccionar un producto (ejemplo: Café, Té, Medialuna). Al presionar un botón, el pedido se añadirá a la lista de pedidos pendientes.
2. **Marcar un pedido como entregado**: Cada pedido en la lista tendrá una opción para marcarlo como "Entregado", cambiando su estilo visual para diferenciarlo de los pedidos pendientes.
3. **Eliminar un pedido**: Incluir un botón para eliminar un pedido de la lista en caso de ser necesario.
4. **Diseño básico y funcional**: Se debe valorar el uso de estilos CSS para mejorar la presentación, ya sea con CSS tradicional o librerías como Bootstrap o Tailwind.

---

## Estructura de la Aplicación

La aplicación en React debe contar con al menos los siguientes componentes:

- **Header**: Componente que muestra el nombre de la cafetería y un menú de navegación.
- **Footer**: Componente que incluye los datos de los integrantes del grupo (alumno).
- **MainContent**: Contendrá el contenido principal del sitio web.
- **MenuItem**: Componente reutilizable para mostrar el nombre, la descripción y el precio de un producto del menú.

### Carpeta de Componentes

Los componentes deberán estar organizados en una carpeta llamada `components` para mantener una estructura limpia y organizada.

---

## Tecnologías y Herramientas Utilizadas

- **React**: Framework JavaScript para construir la interfaz de usuario.
- **CSS**: Estilos para la aplicación (se puede utilizar CSS tradicional o librerías como Bootstrap o Tailwind).
- **Google Maps API**: Para integrar el mapa interactivo.
- **YouTube iFrame**: Para integrar videos en la página.

---

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/usuario/cafe-reactivo.git

2. Instalar las dependencias:
    ```bash
    cd cafe_reactivo
    npm install

3. Ejecutar la aplicacion: 
    ```bash
    npm run dev



