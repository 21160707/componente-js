# Portafolio de Interfaces Web: Acordeón Interactivo Dinámico
### Instituto Tecnológico de Oaxaca
**Materia:** Programación Web  
**Alumno:** Gerardo Jared Martinez Espina
**Maestra:** Adelina Martinez Nieto

---

## 📋 1. Portada y Solución del Componente
Este repositorio contiene un **Componente Visual Interactivo Reutilizable** desarrollado con JavaScript Puro (Vanilla JS). El componente bajo diseño es un **Acordeón Desplegable Dinámico**.

### Problema que resuelve:
Optimiza la distribución de la información en interfaces de usuario saturadas de texto (como apartados de Preguntas Frecuentes, manuales o menús). Permite colapsar el contenido secundario, reduciendo la carga cognitiva del usuario y logrando pantallas limpias, ordenadas y enfocadas que reaccionan de manera fluida mediante animaciones de transición CSS gatilladas por eventos del DOM.

---

## ⚙️ 2. Instalación y Configuración
Para integrar este componente visual en cualquier sitio web, importa la hoja de estilos en la cabecera `<head>` y el archivo de lógica al final de la etiqueta `<body>`:

```html
<link rel="stylesheet" href="css/componente.css">

<div id="mi-acordeon-personalizado"></div>

<script src="js/componente.js"></script>