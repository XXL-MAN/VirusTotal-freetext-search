# VirusTotal-freetext-search by Andrés Naranjo @TheXXLMAN
## Descripción del Script

Este script es una extensión de Tampermonkey que permite a los usuarios buscar rápidamente cualquier texto seleccionado en VirusTotal. Al instalar y habilitar este script, los usuarios pueden seleccionar cualquier fragmento de texto en una página web y, a través de una opción en el menú contextual (clic derecho), realizar una búsqueda directa en VirusTotal. El script simplifica el proceso de verificación de seguridad, proporcionando una herramienta rápida y eficiente para investigar URLs, dominios, IPs, y archivos directamente desde el navegador. Este script no tiene relación directa ni autorización oficial de Virustotal.

### Características Principales

1. **Integración Sencilla**: Se instala fácilmente a través de Tampermonkey, una extensión popular para la gestión de scripts de usuario en navegadores.
2. **Búsqueda Rápida**: Permite a los usuarios buscar el texto seleccionado en VirusTotal con un solo clic.
3. **Menú Contextual**: Añade una opción "Search in VirusTotal" al menú contextual del navegador cuando hay texto seleccionado.
4. **Apertura en Nueva Pestaña**: Realiza la búsqueda en una nueva pestaña, manteniendo la página original intacta.
5. **Código Limpio y Eficiente**: Utiliza funciones de Tampermonkey como `GM_registerMenuCommand` y `GM_addStyle` para registrar comandos de menú y aplicar estilos CSS personalizados.

### Cómo Funciona

- **Función `searchInVirusTotal`**: Captura el texto seleccionado por el usuario y abre una nueva pestaña con una búsqueda en VirusTotal.
- **Comando de Menú**: Registra un comando de menú que aparece en el menú contextual del navegador.
- **Evento `contextmenu`**: Detecta si hay texto seleccionado al hacer clic derecho y muestra la opción de búsqueda en VirusTotal.

Este script es ideal para investigadores de seguridad, administradores de sistemas, y cualquier persona que necesite verificar rápidamente la reputación de URLs, dominios, y otros elementos sospechosos en VirusTotal.


# Pasos para instalar y usar el script:

## Instalar Tampermonkey:

Si no tienes Tampermonkey instalado, instálalo desde la tienda de extensiones de tu navegador (disponible para Chrome, Firefox, Safari, etc.).

## Crear el Script:

1. Abre Tampermonkey en tu navegador.
2. Haz clic en el ícono de Tampermonkey y selecciona "Create a new script...".
3. Borra cualquier contenido en el editor y pega el script anterior.

## Guardar el Script:

1. Haz clic en "File" y luego en "Save" o presiona `Ctrl+S`.

## Cómo Funciona el Script:

### Función `searchInVirusTotal`:

- Obtiene el texto seleccionado y abre una nueva pestaña con una búsqueda en VirusTotal.

### Comando de Menú Registrado:

- `GM_registerMenuCommand` agrega un comando en el menú de Tampermonkey para buscar en VirusTotal.

### Estilo CSS Personalizado:

- `GM_addStyle` añade estilo al elemento del menú contextual para asegurar que se vea apropiadamente.

### Evento `contextmenu`:

- Agrega un elemento de menú contextual solo si hay texto seleccionado, llamando a la función `searchInVirusTotal` cuando se hace clic.

## Instrucciones de Uso:

1. Selecciona cualquier texto en una página web.
2. Haz clic derecho para abrir el menú contextual.
3. Si el texto está seleccionado, aparecerá la opción "Search in VirusTotal".
4. Haz clic en "Search in VirusTotal" para abrir una nueva pestaña con los resultados de búsqueda en VirusTotal.

## MyPublicInbox

- Si me contactas a través de mypublicinbox.com, aparte de recibir siempre una respuesta, los créditos se donan a causas nobles. -> mypublicinbox.com/thexxlman
