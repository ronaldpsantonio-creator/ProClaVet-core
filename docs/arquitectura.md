# Arquitectura de ProClaVet-core

## Capas

- `data/sistemas/`: catálogo anatómico dividido en 12 archivos JSON, uno por sistema.
- `schemas/`: contratos estructurales para validar registros.
- `src/`: código de aplicación; se incorporará tras auditar la aplicación existente de vista previa.
- `docs/`: decisiones de arquitectura, inventarios y protocolo de migración.

## Distribución

Los 11 códigos de sistema conservados son `car`, `ske`, `mus`, `dig`, `res`, `ner`, `uri`, `rep`, `teg`, `end` y `sen`. El archivo articular independiente organiza las articulaciones y los ligamentos musculoesqueléticos incluidos en ese sistema.

## Convenciones

- UTF-8 y JSON válido.
- IDs estables, sin duplicados.
- No alterar el contenido anatómico aprobado durante la reorganización.
- Las estructuras pares se modelan como una ficha bilateral única.
- Los IDs históricos se mantienen en trazabilidad.
- Cada archivo se valida antes de considerarse migrado.
