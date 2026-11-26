# Segmentación del esqueleto equino — ProClaVet-core

Estado: **Fase de auditoría geométrica iniciada; no integrar aún como huesos anatómicos individuales.**

Rama de trabajo: `feature/segmentacion-esqueleto-equino`  
Repositorio base: `ronaldpsantonio-creator/ProClaVet-core`  
Referencia visual de calidad: caballo anatómico multicapa aprobado por el usuario.

## Archivos fuente revisados

- `horse_skeleton.glb`: modelo original, 2,199,812 bytes.
- `horse_skeleton_components_experimental.glb`: exportación experimental por componentes conectados, 2,045,680 bytes.
- `horse_skeleton_component_inventory.csv`: inventario geométrico de 774 componentes, 153,138 bytes.
- `horse_skeleton_component_map.png`: mapa 3D de centroides de componentes, 326,637 bytes.

## Hallazgos verificados

1. El GLB original contiene una sola malla/objeto de escena, con 42,577 vértices y 69,582 caras.
2. La malla original se divide topológicamente en **774 componentes conectados**. La exportación experimental contiene esos 774 componentes como objetos separados.
3. Por tanto, «componente conectado» no equivale a «hueso»: la separación automática ha aislado fragmentos de la malla, no ha demostrado una segmentación anatómica de cada hueso.
4. El inventario contiene 774 filas. 519 componentes tienen menos de 20 vértices y 492 tienen menos de 20 caras; solo 24 componentes aparecen como cerrados (*watertight*) y 750 no.
5. No se encontraron nombres anatómicos por hueso en el inventario: los objetos usan identificadores genéricos `componente_NNN`.
6. Las dimensiones espaciales del GLB original y de la exportación experimental no coinciden en escala/orientación aparente. Original: extensión aproximada [0.438, 1.536, 2.428]. Experimental: [43.752, 241.376, 162.636]. No aplicar una transformación de escala u orientación a ojo ni colocar estos objetos en el visor hasta resolver la correspondencia de coordenadas.

## Decisión técnica

La exportación experimental **no se cargará todavía** en el visor público ni sustituirá las formas esquemáticas. Hacerlo podría mostrar cientos de fragmentos, con identificación falsa de huesos, mala escala o desalineación.

## Siguiente secuencia de trabajo

1. Confirmar la transformación de coordenadas entre el GLB original y el GLB experimental (ejes, unidades, origen y transformaciones de nodos).
2. Generar vistas ortográficas y una tabla de componentes grandes/medianos con centroides y cajas envolventes.
3. Agrupar fragmentos por continuidad geométrica y proximidad, sin asumir que cada grupo ya es un hueso.
4. Comparar los grupos con el catálogo osteológico existente de ProClaVet-core y asignar identificadores solo cuando la correspondencia sea verificable.
5. Validar cada grupo en vistas lateral, dorsal, ventral y craneal; conservar bilateralidad según las reglas del catálogo.
6. Probar la carga de un primer hueso aislado en una rama de desarrollo y confirmar escala, orientación, articulación y selección antes de ampliar el lote.

## Protección de datos

- No modificar `data/sistemas/*.json`, fichas anatómicas, IDs ni el código del visor en esta fase.
- No marcar ninguna ficha como verificada por el mero hecho de existir una malla.
- Mantener la rama de trabajo separada de `main`; la integración requiere validación visual y anatómica.
