# VirusTotal-freetext-search by Andrés Naranjo @TheXXLMAN
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
