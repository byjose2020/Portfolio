const elemento = document.getElementById("texto-mecanografiado");
        
        // Usamos un array donde cada elemento es una línea de texto
        const lineas = [
            "Hola soy...",
            "Jose Angel",
            "Chapellin"
        ];
        
        let filaActual = 0;
        let columnaActual = 0;

        function escribir() {
            // Verificamos si aún quedan líneas por escribir
            if (filaActual < lineas.length) {
                
                // Verificamos si aún quedan letras en la línea actual
                if (columnaActual < lineas[filaActual].length) {
                    // Agregamos la letra actual
                    elemento.innerHTML += lineas[filaActual].charAt(columnaActual);
                    columnaActual++;
                    setTimeout(escribir, 80); // Velocidad de escritura
                } else {
                    // Terminó la línea actual: añadimos un salto de línea si no es la última
                    if (filaActual < lineas.length - 1) {
                        elemento.innerHTML += "<br>";
                    }
                    filaActual++;     // Pasamos a la siguiente línea
                    columnaActual = 0; // Reiniciamos el contador de letras
                    setTimeout(escribir, 500); // Pausa de medio segundo entre líneas
                }
            }
        }

        document.addEventListener("DOMContentLoaded", escribir);