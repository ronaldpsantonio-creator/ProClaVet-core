# ProClaVet-core

Repositorio principal de **ProClaVet / VETANATOMY 3D**. Contiene el catálogo anatómico equino organizado por sistemas, la aplicación web, esquemas de validación y documentación.

## Estado de la migración

**Datos:** extracción estructural completada. **Aplicación:** integración web inicial incorporada; pendiente de validación funcional en GitHub Pages.

- Fuente canónica de datos: `ronaldpsantonio-creator/ProClaVet-preview/data/equino.json`, rama `main`.
- Blob fuente: `63516b9713f2beb4ad5011441b90172b981c4d8e`.
- Inventario: **3.881 registros**, **3.881 IDs únicos**, distribuidos en **12 archivos JSON**.
- La aplicación carga los 12 archivos en memoria sin recombinarlos ni alterar su contenido.
- `ProClaVet` y `ProClaVet-preview` permanecen intactos.
- La integridad de extracción no certifica la exactitud anatómica de todas las fichas ni la auditoría de todos los sistemas.

## Aplicación web

- `index.html`: entrada de VetAnatomy 3D.
- `css/styles.css`: estilos adaptables a móvil y escritorio.
- `js/app.js`: visor Three.js, filtros, fichas, capas y autoevaluación; adaptado a los 12 catálogos.
- `manifest.webmanifest` y `sw.js`: metadatos PWA y caché de recursos.
- `assets/laminas/`: láminas SVG del atlas equino C1 y axis C2.
- `icons/`: icono PWA.

GitHub Pages publica contenido estático. Los modelos GLB solo se mostrarán cuando existan archivos válidos en las rutas declaradas por cada registro; el visor conserva representaciones esquemáticas provisionales donde corresponda.

## Distribución de los 12 archivos

| Archivo | Registros |
|---|---:|
| `sistema_esqueletico.json` | 221 |
| `sistema_articular.json` | 158 |
| `sistema_muscular.json` | 570 |
| `sistema_digestivo.json` | 141 |
| `sistema_respiratorio.json` | 157 |
| `sistema_cardiovascular.json` | 594 |
| `sistema_nervioso.json` | 1.305 |
| `sistema_urinario.json` | 68 |
| `sistema_reproductor.json` | 238 |
| `sistema_tegumentario.json` | 179 |
| `sistema_endocrino.json` | 40 |
| `sistema_sensorial.json` | 210 |
| **Total** | **3.881** |

Las seis estructuras `res/art` se alojan en el archivo articular. Los dos cartílagos timpanohioideos se conservan en el archivo esquelético sin incorporarlos al conteo osteológico verificado.

## Estado de las fichas

En la fuente hay 395 registros con ficha, 69 con estado individual `verificada` y 61 con estado `aprobada_y_verificada`. La extracción no rellena campos ausentes ni convierte registros pendientes en fichas verificadas.

## Reglas de integridad anatómica

1. Los identificadores anatómicos son estables y únicos.
2. Las estructuras pares se representan mediante ficha bilateral cuando están consolidadas, con lateralidad explícita y trazabilidad de los IDs históricos.
3. Las diferencias anatómicas izquierda/derecha se conservan; no se fusionan descripciones que no sean equivalentes.
4. No se eliminan ni sobrescriben registros históricos sin conciliación.
5. Las fichas mantienen los 12 apartados oficiales; los campos sin evidencia no se completan con texto genérico.
6. Al terminar la auditoría anatómica de cada sistema se añade el registro explícito **SISTEMA VERIFICADO**, con alcance y total comprobables.

## Próximas etapas

1. Validar la carga de los 12 archivos y el visor en Pages.
2. Probar navegación, fichas, filtros, caché offline y diseño móvil.
3. Incorporar y verificar los modelos GLB disponibles.
4. Auditar anatómicamente cada sistema y sus fichas.
5. Declarar este repositorio como versión oficial solo después de la validación funcional y autorización correspondiente.

Consulta `docs/migracion.md` para el inventario y los controles de extracción.


## Correspondencia entre navegación y catálogos

La navegación de la aplicación presenta los 12 catálogos JSON: esquelético, articular, muscular, digestivo, respiratorio, cardiovascular y linfático, nervioso, urinario, reproductor, tegumentario, endocrino y sensorial. El grupo cardiovascular y linfático comparte el catálogo cardiovascular, ya que no existe un archivo linfático independiente.

El grupo articular se identifica por el archivo de procedencia `sistema_articular.json`. Sus registros conservan sus códigos `sys` originales (`ske` o `res`), sus IDs, lateralidad, fichas y trazabilidad. La aplicación añade únicamente una marca de catálogo en memoria durante la carga; no escribe ni modifica los JSON.

El esquema `schemas/estructura.schema.json` describe el formato real de los registros: nombres `es` y `la`, campos anatómicos originales y ficha opcional/parcial con sus 12 apartados. No exige que una ficha pendiente contenga información que todavía no ha sido revisada.
