

/**
 * Función global para inicializar un acordeón en la página web
  @param {string} idContenedor 
  @param {Array} listaDatos 
 */
function crearAcordeon(idContenedor, listaDatos) {
    const contenedor = document.getElementById(idContenedor);
    
    if (!contenedor) {
        console.error(`No se encontró el contenedor con el ID: ${idContenedor}`);
        return;
    }

    contenedor.classList.add('acordeon-contenedor');

    listaDatos.forEach(item => {
        const itemElemento = document.createElement('div');
        itemElemento.classList.add('acordeon-item');

        itemElemento.innerHTML = `
            <button class="acordeon-header">
                <span>${item.pregunta}</span>
                <span class="acordeon-icono">▼</span>
            </button>
            <div class="acordeon-content">
                <div class="acordeon-texto">${item.respuesta}</div>
            </div>
        `;

        const botonPregunta = itemElemento.querySelector('.acordeon-header');
        
        botonPregunta.addEventListener('click', () => {
            const yaEstaActivo = itemElemento.classList.contains('activo');

            const itemsHermanos = contenedor.querySelectorAll('.acordeon-item');
            itemsHermanos.forEach(hermano => hermano.classList.remove('activo'));

            if (!yaEstaActivo) {
                itemElemento.classList.add('activo');
            }
        });

        contenedor.appendChild(itemElemento);
    });
}