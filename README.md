# ProClaVet-core

Repositorio principal de **ProClaVet / VETANATOMY 3D**. Esta versión organiza el catálogo anatómico por sistemas y separa los datos de la aplicación, los esquemas de validación y la documentación.

## Estado del proyecto

- Fase: construcción de la estructura base.
- Fuente de datos para la migración: `ProClaVet-preview/data/equino.json`.
- La fuente anterior se conserva intacta durante toda la migración.
- No se consideran migrados los registros hasta completar importación, conciliación y validación.
- Los repositorios anteriores no se retirarán hasta que esta versión esté completa, validada y funcional.

## Organización prevista

```text
ProClaVet-core/
├── README.md
├── data/
│   └── sistemas/
│       ├── sistema_cardiovascular.json
│       ├── sistema_esqueletico.json
│       ├── sistema_articular.json
│       ├── sistema_muscular.json
│       ├── sistema_digestivo.json
│       ├── sistema_respiratorio.json
│       ├── sistema_nervioso.json
│       ├── sistema_urinario.json
│       ├── sistema_reproductor.json
│       ├── sistema_tegumentario.json
│       ├── sistema_endocrino.json
│       └── sistema_sensorial.json
├── schemas/
│   └── estructura.schema.json
├── docs/
│   ├── arquitectura.md
│   └── migracion.md
└── src/
    └── README.md
```

## Códigos de sistema

Se conservan los códigos existentes: `car`, `ske`, `mus`, `dig`, `res`, `ner`, `uri`, `rep`, `teg`, `end` y `sen`. El sistema articular se mantiene en un archivo propio y agrupa las articulaciones y los ligamentos musculoesqueléticos correspondientes.

## Reglas de integridad anatómica

1. Los identificadores anatómicos son únicos y estables.
2. Toda estructura anatómica par se representa mediante una ficha bilateral única, con lateralidad izquierda/derecha y diferencias anatómicas reales documentadas.
3. La trazabilidad conserva los identificadores laterales históricos cuando se consoliden fichas bilaterales.
4. No se eliminan ni sobrescriben registros sin conciliación y validación.
5. Las fichas mantienen los 12 apartados anatómicos establecidos por el proyecto.
6. Al finalizar la auditoría de cada sistema se añadirá al final de su archivo el registro explícito **SISTEMA VERIFICADO**, con total de estructuras, estado, fecha y responsable de aprobación.

## Plan de migración

1. Crear y revisar la estructura del repositorio.
2. Leer la fuente vigente completa y congelar un inventario de referencia.
3. Distribuir los registros en los 12 archivos de sistema sin pérdida ni duplicación.
4. Validar IDs, cantidades, referencias, trazabilidad bilateral y estructura de fichas.
5. Integrar la aplicación y comprobar su funcionamiento con los datos organizados.
6. Solo después de la validación funcional, establecer este repositorio como oficial y retirar los anteriores con autorización.

**Importante:** los archivos de datos iniciales son plantillas estructurales; no representan todavía la migración del catálogo.
