# Segmentación del esqueleto equino — ProClaVet-core

Estado: **Auditoría geométrica completada; preparación de una base alineada. Segmentación anatómica por hueso aún pendiente.**

Rama de trabajo: `feature/segmentacion-esqueleto-equino`  
Repositorio base: `ronaldpsantonio-creator/ProClaVet-core`  
Referencia visual de calidad: caballo anatómico multicapa aprobado por el usuario.

## Archivos fuente revisados

- `horse_skeleton.glb`: modelo original, 2,199,812 bytes.
- `horse_skeleton_components_experimental.glb`: exportación experimental por componentes conectados, 2,045,680 bytes.
- `horse_skeleton_component_inventory.csv`: inventario geométrico de 774 componentes, 153,138 bytes.
- `horse_skeleton_component_map.png`: mapa 3D de centroides de componentes, 326,637 bytes.

## Hallazgos verificados

1. El GLB original contiene una sola malla de escena, con 42,577 vértices y 69,582 caras.
2. La malla se divide topológicamente en **774 componentes conectados**. La exportación experimental contiene esos 774 componentes como objetos separados.
3. «Componente conectado» no equivale a «hueso»: la separación automática aisló fragmentos de malla; no demuestra una segmentación anatómica por hueso.
4. El inventario contiene 774 filas. 519 componentes tienen menos de 20 vértices y 492 tienen menos de 20 caras; 24 componentes aparecen como cerrados (*watertight*) y 750 no.
5. Los objetos usan identificadores genéricos `componente_NNN`, sin nombres anatómicos por hueso.
6. **Transformación de coordenadas resuelta:** la exportación experimental conserva las coordenadas locales del modelo FBX, pero no la transformación de nodos del GLB original. Se reconstruyó la matriz compuesta a partir de los nodos originales (escala 0.01, rotación de ejes y transformación del nodo del modelo). Al aplicarla a los 774 componentes, sus límites coinciden con los del GLB original dentro de la precisión numérica:
   - mínimo: [-0.2187586, 0.00912267, -1.0485684]
   - máximo: [0.21875856, 1.54508637, 1.37989886]
   - extensión: [0.43751716, 1.53596370, 2.42846726]
7. La transformación ya no debe estimarse visualmente. Debe aplicarse una sola vez al preparar el GLB alineado; evitar duplicarla en el visor.

## Decisión técnica

La exportación experimental **no se cargará todavía** en el visor público ni sustituirá las formas esquemáticas. Aun alineados, sus 774 objetos son fragmentos topológicos sin identidad anatómica confirmada. Integrarlos como huesos produciría una identificación falsa.

## Siguiente secuencia de trabajo

1. Exportar una copia de trabajo con los 774 fragmentos ya alineados al sistema de coordenadas del GLB original.
2. Generar vistas ortográficas y una tabla de componentes grandes/medianos con centroides y cajas envolventes.
3. Agrupar fragmentos por continuidad geométrica y proximidad, sin asumir que cada grupo ya es un hueso.
4. Comparar los grupos con el catálogo osteológico existente de ProClaVet-core y asignar identificadores solo cuando la correspondencia sea verificable.
5. Validar cada grupo en vistas lateral, dorsal, ventral y craneal; conservar bilateralidad según las reglas del catálogo.
6. Probar la carga de un primer hueso aislado en una rama de desarrollo y confirmar escala, orientación, articulación y selección antes de ampliar el lote.

## Protección de datos

- No modificar `data/sistemas/*.json`, fichas anatómicas, IDs ni el código del visor en esta fase.
- No marcar ninguna ficha como verificada por el mero hecho de existir una malla.
- Mantener la rama de trabajo separada de `main`; la integración requiere validación visual y anatómica.
