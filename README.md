# ProClaVet-core

Repositorio principal de **ProClaVet / VETANATOMY 3D**. Organiza el catálogo anatómico equino por sistemas, con datos, esquemas de validación y documentación separados.

## Estado de la migración

**Estado:** extracción estructural completada.

- Fuente canónica: `ronaldpsantonio-creator/ProClaVet-preview/data/equino.json`, rama `main`.
- Blob de la fuente: `63516b9713f2beb4ad5011441b90172b981c4d8e`.
- Inventario extraído: **3.881 registros**, **3.881 IDs únicos**, distribuidos en **12 archivos**.
- Los repositorios `ProClaVet` y `ProClaVet-preview` se mantienen intactos.
- La extracción y su integridad están verificadas; esto **no** significa que todas las fichas anatómicas estén completas ni que todos los sistemas hayan superado su auditoría anatómica.

## Distribución de los 12 archivos

| Archivo | Registros |
|---|---:|
| `sistema_esqueletico.json` | 221 (219 óseos + 2 cartílagos del aparato hioideo) |
| `sistema_articular.json` | 158 (152 musculoesqueléticos + 6 respiratorios) |
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

Las seis estructuras `res/art` se alojan en el archivo articular; por eso el respiratorio contiene 157 registros. Las dos entradas `ske/org` del cartílago timpanohioideo se conservan en el archivo esquelético sin incorporarlas al conteo osteológico verificado.

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

1. Auditar anatómicamente cada sistema y sus fichas.
2. Completar y revisar las relaciones bilaterales pendientes.
3. Validar referencias, nomenclatura, jerarquía y clasificación.
4. Integrar la aplicación y comprobar su funcionamiento con los datos organizados.
5. Declarar este repositorio como versión oficial solo después de la validación funcional y autorización correspondiente.

Consulta `docs/migracion.md` para el inventario, las reglas de extracción y los controles ejecutados.
