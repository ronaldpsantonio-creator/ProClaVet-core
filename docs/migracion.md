# Informe de migración — ProClaVet-core

**Fecha de extracción:** 2026-11-22  
**Repositorio destino:** `ronaldpsantonio-creator/ProClaVet-core`, rama `main`  
**Fuente:** `ronaldpsantonio-creator/ProClaVet-preview/data/equino.json`, rama `main`  
**Blob fuente:** `63516b9713f2beb4ad5011441b90172b981c4d8e`

## Resultado

La extracción estructural queda distribuida en 12 archivos. La fuente contiene **3.881 registros activos** con **3.881 identificadores únicos**. La suma de los registros asignados a los 12 archivos también es **3.881**.

| Archivo | Criterio | Registros |
|---|---|---:|
| `sistema_esqueletico.json` | `ske/oss` + `ske/org` | 221 |
| `sistema_articular.json` | `ske/art` + `res/art` | 158 |
| `sistema_muscular.json` | `sys=mus` | 570 |
| `sistema_digestivo.json` | `sys=dig` | 141 |
| `sistema_respiratorio.json` | `sys=res`, excluida la capa `art` | 157 |
| `sistema_cardiovascular.json` | `sys=car` | 594 |
| `sistema_nervioso.json` | `sys=ner` | 1.305 |
| `sistema_urinario.json` | `sys=uri` | 68 |
| `sistema_reproductor.json` | `sys=rep` | 238 |
| `sistema_tegumentario.json` | `sys=teg` | 179 |
| `sistema_endocrino.json` | `sys=end` | 40 |
| `sistema_sensorial.json` | `sys=sen` | 210 |
| **Total** | | **3.881** |

## Conciliaciones de la última extracción

- Se incorporaron al archivo articular las seis estructuras `res/art`: articulaciones cricoaritenoideas izquierda/derecha, cricotiroideas izquierda/derecha y tirohioideas izquierda/derecha.
- El archivo respiratorio conserva 157 estructuras `res` de las capas `org` y `cav`; las seis `res/art` no se duplican.
- Se incorporaron al inventario esquelético los dos cartílagos timpanohioideos `equ.ske.hyo.006-i` y `equ.ske.hyo.006-d`. La verificación osteológica existente sigue limitada a las 219 estructuras de la capa `oss`.
- Se completó el archivo urinario con sus 68 estructuras.

## Integridad y estado de las fichas

- Registros fuente: 3.881.
- IDs únicos en la fuente: 3.881.
- Registros distribuidos en los archivos: 3.881.
- Registros con ficha: 395.
- Registros con revisión individual `verificada`: 69.
- Registros con revisión individual `aprobada_y_verificada`: 61.
- Registros sin estado de revisión individual: 3.751.

La verificación de extracción comprueba recuentos, unicidad y correspondencia con la fuente. No certifica por sí misma la exactitud anatómica de cada ficha.

## Verificación por sistema

- **Sistema óseo:** conserva el registro **SISTEMA VERIFICADO** para las 219 estructuras de la capa `oss`. Los dos cartílagos timpanohioideos añadidos pertenecen al sistema `ske`, pero están clasificados en la capa `org` y no forman parte del alcance de esa auditoría osteológica.
- **Sistema articular:** migrado; auditoría anatómica aún en curso.
- **Sistemas muscular, digestivo, respiratorio, cardiovascular, nervioso, urinario, reproductor, tegumentario, endocrino y sensorial:** extracción completada; auditoría anatómica pendiente según el estado individual de cada ficha.

## Preservación

No se modificaron los repositorios `ProClaVet` ni `ProClaVet-preview`. No se eliminaron registros de la fuente. Los IDs laterales históricos se mantienen en las fichas bilaterales ya consolidadas y las diferencias laterales existentes se conservan.
