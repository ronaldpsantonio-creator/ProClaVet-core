# Arquitectura de ProClaVet-core

## Aplicación web

- `index.html`: entrada de VetAnatomy 3D.
- `css/styles.css`: presentación adaptable a móvil y escritorio.
- `js/app.js`: interfaz, visor Three.js, filtros, fichas y autoevaluación. El cargador reúne en memoria los registros de los 12 archivos y acepta los contenedores `structures` y `estructuras` sin reescribir los JSON originales.
- `manifest.webmanifest` y `sw.js`: metadatos PWA y caché de recursos.
- `assets/laminas/` e `icons/`: recursos visuales de la aplicación.

## Datos y validación

- `data/sistemas/`: catálogo anatómico dividido en 12 archivos JSON, uno por sistema.
- `schemas/`: contratos estructurales para validar registros.
- `docs/`: decisiones de arquitectura, inventarios y protocolo de migración.

## Distribución

Los 12 catálogos JSON se corresponden con los filtros de navegación. El filtro articular se determina por el archivo de origen (`sistema_articular.json`), sin cambiar los códigos `sys` originales de sus registros. El filtro «Cardiovascular y linfático» reúne las estructuras del catálogo cardiovascular, que no tiene un archivo linfático independiente. La marca de catálogo se añade solo en memoria durante la carga.

## Publicación

El sitio se publica como GitHub Pages de proyecto en `/ProClaVet-core/`. Los recursos locales usan rutas relativas. El Service Worker precarga la interfaz y los 12 JSON. Three.js se obtiene desde CDN, por lo que la primera carga del visor requiere conexión para descargar esa dependencia.

## Convenciones

- UTF-8 y JSON válido.
- IDs estables, sin duplicados.
- No alterar el contenido anatómico aprobado durante la reorganización.
- Las estructuras pares se modelan como una ficha bilateral única.
- Los IDs históricos se mantienen en trazabilidad.
- Cada archivo se valida antes de considerarse migrado.


## Esquema de registros

El esquema de `schemas/estructura.schema.json` refleja los datos reales: `es` y `la` son los campos de nombre; `ficha` es opcional y puede estar incompleta durante el desarrollo. Los 12 apartados de la ficha están descritos como propiedades individuales, sin convertir campos pendientes en requisitos ni modificar registros existentes.
