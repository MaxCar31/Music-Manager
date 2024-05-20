/**
 * Función para ejecutar pruebas unitarias en la aplicación de gestión de música.
 */
function ejecutarPruebas() {
    const manager = new MusicaManager();

    // Prueba HU1: Agregar un nuevo álbum
    try {
        /**
         * Crear un nuevo álbum y agregarlo al gestor de música.
         * Verificar que el álbum se ha agregado correctamente.
         */
        const album1 = new Album('Thriller', 1982, 'Epic', 'Michael Jackson');
        manager.agregarAlbum(album1);
        if (manager.albumes.length === 1 && manager.albumes[0].nombre === 'Thriller') {
            console.log('Prueba HU1: Agregar un nuevo álbum - Aprobado');
        } else {
            console.log('Prueba HU1: Agregar un nuevo álbum - No Aprobado');
        }
    } catch (e) {
        console.log('Prueba HU1: Agregar un nuevo álbum - No Aprobado');
    }

    // Prueba HU2: Agregar canciones a un álbum existente
    try {
        /**
         * Crear una nueva canción y agregarla a un álbum existente.
         * Verificar que la canción se ha agregado correctamente.
         */
        const cancion1 = new Cancion('Beat It', '4:18');
        manager.albumes[0].agregarCancion(cancion1);
        if (manager.albumes[0].canciones.length === 1 && manager.albumes[0].canciones[0].titulo === 'Beat It') {
            console.log('Prueba HU2: Agregar canciones a un álbum existente - Aprobado');
        } else {
            console.log('Prueba HU2: Agregar canciones a un álbum existente - No Aprobado');
        }
    } catch (e) {
        console.log('Prueba HU2: Agregar canciones a un álbum existente - No Aprobado');
    }

    // Prueba HU3: Evitar canciones con títulos repetidos
    try {
        /**
         * Intentar agregar una canción con un título que ya existe en el álbum.
         * Verificar que se lanza una excepción.
         */
        const cancionRepetida = new Cancion('Beat It', '4:18');
        manager.albumes[0].agregarCancion(cancionRepetida);
        console.log('Prueba HU3: Evitar canciones con títulos repetidos - No Aprobado');
    } catch (e) {
        console.log('Prueba HU3: Evitar canciones con títulos repetidos - Aprobado');
    }

    // Prueba HU4: Ver la lista de canciones de un álbum específico
    try {
        /**
         * Obtener la lista de canciones de un álbum específico.
         * Verificar que la lista de canciones es correcta.
         */
        const cancionesAlbum1 = manager.albumes[0].listarCanciones();
        if (cancionesAlbum1.length === 1 && cancionesAlbum1[0].titulo === 'Beat It') {
            console.log('Prueba HU4: Ver la lista de canciones de un álbum específico - Aprobado');
        } else {
            console.log('Prueba HU4: Ver la lista de canciones de un álbum específico - No Aprobado');
        }
    } catch (e) {
        console.log('Prueba HU4: Ver la lista de canciones de un álbum específico - No Aprobado');
    }

    // Prueba HU5: Buscar álbumes por el año
    try {
        /**
         * Agregar un segundo álbum y buscar álbumes por el año de lanzamiento.
         * Verificar que la búsqueda devuelve los álbumes correctos.
         */
        const album2 = new Album('Bad', 1987, 'Epic', 'Michael Jackson');
        manager.agregarAlbum(album2);
        const albumes1982 = manager.buscarAlbumesPorAnio(1982);
        if (albumes1982.length === 1 && albumes1982[0].nombre === 'Thriller') {
            console.log('Prueba HU5: Buscar álbumes por el año - Aprobado');
        } else {
            console.log('Prueba HU5: Buscar álbumes por el año - No Aprobado');
        }
    } catch (e) {
        console.log('Prueba HU5: Buscar álbumes por el año - No Aprobado');
    }
}

/**
 * Evento de carga de la ventana.
 * Ejecuta las pruebas unitarias cuando el archivo se carga.
 */
window.addEventListener('load', ejecutarPruebas);