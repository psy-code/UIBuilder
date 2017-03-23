UIBuilder

Arquitectura de carpetas
-actions: Conjunto de constantes que representan acciones junto a sus objetos correspondientes

-components: Son bloques construidos a partir de elementos y contenedores nativos combinados en un orden especifico, representar una seccion o elemento de alto nivel con una responsabilidad unica. Estan acompañados de una porcion del arbol de datos.

-containers: Son elementos complejos, que acceden al arbol de datos a travez del estado, pueden envian acciones al reducer.

-elements: Son la minima unidad de construccion, estan formados por elementos basicos de html, no poseen logica, ni acceden al estado, solo renderizan sus propiedades.

-reducers: Apliccan la logica que corresponda, para actualizar el estado, dependiendo de la accion recibida.

TODO

refactor ResizeBorder from '../elements/resize-border'

Al crear una nueva pagina, se ingresan las propiedades de las paginas,
estas corresponden al node 0, definidas en el initialState

crear accion "drop" para generalizar el hoc droppable que actualmente utiliza createNode, addChild

cuando tenga la bandera layer, renderiza desde el objeto styles en props, en develop, todas las props son heredadas, probar draggable y droppeable box en layer desde el arbol de datos, probar arbol de datos inicial con mas carga

