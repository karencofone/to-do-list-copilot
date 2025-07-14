## Lista de Tareas (To-Do List)

Este proyecto es una aplicación web de Lista de Tareas (To-Do List) diseñada para gestionar tus pendientes de manera sencilla y eficiente. Desarrollada con Node.js y Express para el backend, y un frontend intuitivo en HTML, CSS y JavaScript puro, la aplicación permite crear, ver, editar, completar y eliminar tareas.

- **Características Principales**

## Backend

- API RESTful: Construida con Express.js, ofrece una interfaz robusta para la gestión de tareas.

- Datos en Memoria: Las tareas se almacenan exclusivamente en memoria, lo que significa que los datos son efímeros y se reinician con el servidor.

- Endpoints Completos:

  - GET /tasks: Recupera todas las tareas.
  - POST /tasks: Crea una nueva tarea.
  - PUT /tasks/:id: Actualiza una tarea existente por su ID.
  - DELETE /tasks/:id: Elimina una tarea por su ID.

## Frontend

- Interfaz de Usuario (UI) Intuitiva: Diseño limpio y funcional.

- Formulario de Tareas: Permite añadir nuevas tareas con detalles como título, descripción, fecha de vencimiento y prioridad.

- Gestión Visual: Muestra listas separadas para tareas Pendientes y Completadas.

- Acciones Rápidas: Incluye botones para editar, cambiar el estado (completar/pendientes) y eliminar tareas.

- Responsividad Mínima: Adaptada para una visualización adecuada en diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **Backend:**

  - Node.js: Entorno de ejecución de JavaScript.
  - Express.js: Framework web para Node.js, utilizado para construir la API.
  - UUID: Librería para generar identificadores únicos de tareas.

- **Frontend:**

  - HTML5: Estructura del contenido web.
  - CSS3: Estilos visuales y diseño responsivo.
  - JavaScript: Lógica interactiva y consumo de la API RESTful (Fetch API).

- **Herramientas de Desarrollo:**
  - Git y GitHub: Para control de versiones y colaboración.
  - GitHub Copilot: Asistente de codificación por IA para acelerar el desarrollo.
  - Gemini: Modelo de IA utilizado para la interpretación de consignas y la formulación de prompts.

## Uso de Inteligencia Artificial en el Desarrollo

La Inteligencia Artificial (IA) jugó un papel central en todo el ciclo de desarrollo de este proyecto, desde la interpretación inicial de los requisitos hasta la generación y depuración del código.

**1) Comprensión y Preparación de Prompts con Gemini**

- Mi proceso comenzó con la asistencia de Gemini para traducir e interpretar la consigna del módulo. Esto fue crucial para desglosar los requisitos complejos en tareas manejables.
- Aprovechando esta comprensión profunda, utilicé Gemini para formular prompts detallados y precisos que luego serían pasados a GitHub Copilot. Para el backend, el prompt clave fue:

Crea un backend simple para una aplicación de "Lista de Tareas" (To-Do List) usando Node.js y Express. La aplicación debe manejar las tareas en memoria, sin una base de datos persistente.
Las tareas deben tener la siguiente estructura:

- id (string único/UUID)
- title (string, obligatorio)
- description (string, opcional)
- dueDate (string en formato de fecha, opcional)
- priority (string: "Low", "Medium", "High", obligatorio)
- status (string: "Pending", "Completed", obligatorio)

Los endpoints de la API RESTful deben ser los siguientes:

1. GET /tasks: Obtener todas las tareas.
2. POST /tasks: Crear una nueva tarea. Debe generar un 'id' único y validar los campos obligatorios (title, priority, status).
3. PUT /tasks/:id: Actualizar una tarea existente por su ID. Debe manejar la actualización parcial de campos y responder con un error 404 si la tarea no existe.
4. DELETE /tasks/:id: Eliminar una tarea por su ID. Debe responder con un error 404 si la tarea no existe.
   Configura el servidor Express para escuchar en el puerto 3000 y permite CORS para que el frontend pueda conectarse.
   Necesitas usar el módulo 'uuid' para generar IDs únicos.

**2) Desarrollo del Backend con GitHub Copilot**

- Una vez que tuve los prompts listos, pasé a utilizar GitHub Copilot directamente en Visual Studio Code (VSC). El proyecto se estructuró en dos subcarpetas: express-project para el backend y express-project-fe para el frontend.

- **Experiencia con Copilot en el Backend**
- Generación de Código Eficiente: Copilot interpretó el prompt de manera sobresaliente, generando rápidamente la estructura del servidor Express, los endpoints RESTful, la lógica para el almacenamiento de datos en memoria y la integración de UUID. Su interfaz de usuario integrada en VSC hizo que la aceptación de sugerencias fuera fluida y aceleró significativamente el proceso de codificación.

- Resolución Interactiva de Problemas: Tras la generación inicial, me encontré con múltiples errores al intentar iniciar el servidor (npm install). En lugar de depurar manualmente, Copilot fue fundamental para identificar y resolver estos problemas, guiándome con sugerencias de comandos adicionales (nodemon, cors) y ajustes de configuración. Esta depuración interactiva demostró el valor de Copilot más allá de la mera generación de código.

**3) Desarrollo del Frontend con GitHub Copilot**

- Manteniendo el contexto en el mismo chat de Copilot, solicité la creación del frontend basándome en un prompt detallado, también formulado con la ayuda de Gemini (resaltando que Gemini ayudó en la interpretación de la consigna para los prompts, no en la generación directa de código).

- **Experiencia con Copilot en el Frontend**
- Generación Estructural y Lógica: Copilot generó la estructura HTML, los estilos CSS básicos y la lógica JavaScript para interactuar con el backend de manera efectiva. Esto incluyó la implementación de las funciones para añadir, ver, editar, marcar y eliminar tareas. En un prompt posterior, le solicité que modifique el método que edita las tareas para poder editar también la descripción de las mismas.

- Refinamiento Estético Iterativo: Inicialmente, el estilo predeterminado sugerido no se alineaba completamente con la visión de una UI moderna. Sin embargo, al proporcionarle a Copilot especificaciones más detalladas (como "UI más moderna y accesible, con inputs redondeados, colores modernos y diferenciables"), pude iterar rápidamente en el diseño hasta obtener el resultado final que está integrado en el proyecto.
