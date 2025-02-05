const certificaciones = [
    {
        "img": "img/constancias/constancia-1.jpg",
        "title": "Diplomado en Seguridad Nacional",
        "zone": "Academia Nacional de Seguridad"
    },
    {
        "img": "img/constancias/constancia-2.jpg",
        "title": "Certificación en Ciberseguridad",
        "zone": "Instituto de Ciberdefensa"
    },
    {
        "img": "img/constancias/constancia-3.jpg",
        "title": "Curso de Inteligencia Artificial",
        "zone": "Universidad Tecnológica"
    },
    {
        "img": "img/constancias/constancia-4.jpg",
        "title": "Diplomado en Redes",
        "zone": "Academia de Tecnología"
    },
    {
        "img": "img/constancias/constancia-5.jpg",
        "title": "Curso de Programación Avanzada",
        "zone": "Centro de Estudios Informáticos"
    },
    {
        "img": "img/constancias/constancia-6.jpg",
        "title": "Curso de Análisis de Datos",
        "zone": "Escuela de Estadística Aplicada"
    },
    {
        "img": "img/constancias/constancia-7.jpg",
        "title": "Certificación en Desarrollo Web",
        "zone": "Academia de Software Moderno"
    },
    {
        "img": "img/constancias/constancia-8.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-9.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-10.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-11.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-12.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-13.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-14.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-15.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-16.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-17.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-18.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-19.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-20.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-21.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-22.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-23.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-24.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-25.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-26.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-27.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-28.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-29.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-30.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-31.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
    {
        "img": "img/constancias/constancia-32.jpg",
        "title": "Diplomado en Criptografía",
        "zone": "Centro Nacional de Seguridad Informática"
    },
]



/* VARIABLES */

let indiceActual = 0;

const cantidadPorCarga = 6;

const $contenedor = document.querySelector('#contenedorCertificaciones');

const $buttonCargar = document.querySelector('#buttonCargar');

/* FUNCIONES */ 

function mostrarCertificaciones() {
    const fragmento = document.createDocumentFragment();

    for (let i = indiceActual; i < indiceActual + cantidadPorCarga && i < certificaciones.length; i++) {
        const cert = certificaciones[i];

        const articulo = document.createElement('article');
        articulo.classList.add('certificacion');

        articulo.innerHTML = `
            <img class="certificacion_img" src="${cert.img}" loading="lazy" alt="${cert.title}">
            <h3 class="certificacion_title">${cert.title}</h3>
            <p class="certificacion_zone">${cert.zone}</p>
        `;

        fragmento.appendChild(articulo);
    }

    $contenedor.appendChild(fragmento);
    indiceActual += cantidadPorCarga;

    // Ocultar el botón si no hay más certificaciones
    if (indiceActual >= certificaciones.length) {
        botonCargarMas.style.display = 'none';
    }
}

/* EVENTOS */

document.addEventListener('DOMContentLoaded', mostrarCertificaciones);

$buttonCargar.addEventListener('click', mostrarCertificaciones);

