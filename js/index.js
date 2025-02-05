/* VARIABLES */

let certificados = [];

let indiceActual = 0;

const cantidadPorCarga = 6;

const $contenedor = document.querySelector('#contenedorCertificaciones');

const $buttonCargar = document.querySelector('#buttonCargar');

/* FUNCIONES */

const cargarDatos = async () => {
    try {
        const response = await fetch('../certificados.json');

        const data = await response.json();

        certificados = data;

        mostrarCertificaciones();
        
    } catch (error) {
        console.error('Hubo un problema al cargar los certificados:', error);
        $contenedor.innerHTML = '<p>Error al cargar las certificaciones. Inténtalo más tarde.</p>';
    }
}

function mostrarCertificaciones() {
    const fragmento = document.createDocumentFragment();

    for (let i = indiceActual; i < indiceActual + cantidadPorCarga && i < certificados.length; i++) {
        const cert = certificados[i];

        const articulo = document.createElement('article');
        articulo.classList.add('certificacion');

        articulo.innerHTML = `
            <img class="certificacion_img" src="../img/constancias/constancia-${i+1}.jpg" loading="lazy" alt="${cert.nombre}">
            <h3 class="certificacion_title">${cert.nombre}</h3>
            <p class="certificacion_zone">${cert.egresado}</p>
        `;

        fragmento.appendChild(articulo);
    }

    $contenedor.appendChild(fragmento);
    indiceActual += cantidadPorCarga;

    // Ocultar el botón si no hay más certificaciones
    if (indiceActual >= certificados.length) {
        $buttonCargar.style.display = 'none';
    }
}

/* EVENTOS */

document.addEventListener('DOMContentLoaded', cargarDatos);

$buttonCargar.addEventListener('click', mostrarCertificaciones);
