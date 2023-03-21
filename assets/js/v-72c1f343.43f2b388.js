"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6844],{4818:(e,a,o)=>{o.r(a),o.d(a,{default:()=>s});var n=o(78e3);const r=[(0,n.uE)('<p>Un retiro de fondos es realizado cuando por algún motivo se saca dinero de alguna de las cajas donde es realizado el proceso de venta de productos, la mayoria de las veces suele suceder por un alivio de caja, cancelación de un gasto, entre otros. A continuación es explicado el procedimiento regular para reflejar en ADempiere, un retiro de fondos.</p><p>A continuación, se específica el procedimiento que se debe realizar para retirar correctamente los fondos de caja POS.</p><h2 id="ejecucion-del-proceso" tabindex="-1"><a class="header-anchor" href="#ejecucion-del-proceso" aria-hidden="true">#</a> Ejecución del Proceso</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Órdenes de Venta</strong>, por último seleccione la carpeta <strong>Punto de Venta</strong>. Para finalizar, seleccione la ventana <strong>Punto de Venta</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image97.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Si en el transcurso del día, se presenta un retiro de fondos en alguna de las cajas en la cual se encuentran realizando transacciones desde el punto de venta, seleccione la opción <strong>Retiro de Caja (Detallado)</strong>, ubicada en el menú desplegado por el icono <strong>Proceso</strong> de la barra de herramientas de la ventana <strong>Punto de Venta</strong>, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por ERPyA.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image98.png" alt="Campo"></p><p>Imagen 2. Opción Crear Retiro Detallado de POS</p><p>Podrá visualizar la ventana <strong>Retiro de Caja (Detallado)</strong>, con diferentes campos que permiten filtrar la información en base a lo requerido por el usuario para reflejar el retiro de fondos de la caja donde se encuentra realizando sus operaciones de venta.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image99.png" alt="Campo"></p><p>Imagen 3. Ventana Retiro de Caja (Detallado)</p><p>Como ejemplo del proceso de retiro de fondos desde el punto de venta se tienen las siguientes transacciones en <strong>Caja 01</strong>:</p><ul><li><p>Transacciones del punto de venta del día <strong>10/02/2021</strong>.</p><ul><li><p>Apertura de Caja</p><ul><li>100,00 en Moneda <strong>USD</strong></li></ul></li><li><p>Formas de Pago Recibidas por Ventas</p><ul><li><p>Efectivo en Moneda <strong>USD</strong></p><ul><li>10,00</li></ul></li><li><p>Transferencia en Moneda <strong>VES</strong></p><ul><li>5.917.563,54</li></ul></li><li><p>Pago Móvil en Moneda <strong>VES</strong></p><ul><li>70.000.000,00</li></ul></li><li><p>Débito Directo en Moneda <strong>VES</strong></p><ul><li>40.577.378,71</li></ul></li></ul></li></ul></li></ul><p>El retiro detallado de la caja, se debe realizar por moneda. Para el caso de la moneda <strong>VES</strong>, se debe tildar de manera Obligatoria, el check <strong>Dividir Depósitos</strong>, para que ADempiere genere un egreso de caja POS por el total de los movimientos con dicha moneda y un ingreso a caja administrativa por cada uno de los movimientos de cobro de dicha moneda.</p><p>En el campo <strong>Terminal PDV</strong>, podrá visualizar el terminal asociado al punto de venta desde el que accedió al proceso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image100.png" alt="Campo"></p><p>Imagen 4. Campo Terminal PDV</p><p>En el campo <strong>Cuenta Bancaria</strong>, podrá visualizar la cuenta bancaria de la caja POS asociada al punto de venta desde el que accedió al proceso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image101.png" alt="Campo"></p><p>Imagen 5. Campo Cuenta Bancaria</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio vendedor por el cual requiere filtrar la información.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image102.png" alt="Campo"></p><p>Imagen 6. Campo Socio del Negocio</p><p>Seleccione en el campo <strong>Tipo de Pago</strong>, el tipo de pago por el cual requiere filtrar la información.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image103.png" alt="Campo"></p><p>Imagen 7. Campo Tipo de Pago</p><p>Seleccione en el campo <strong>Fecha de la Transacción</strong>, el rango de fecha por la cual requiere filtrar la información.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image104.png" alt="Campo"></p><p>Imagen 8. Campo Fecha de la Transacción</p><p>Seleccione en el campo <strong>Moneda</strong>, la moneda por la cual requiere filtrar la información.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image105.png" alt="Campo"></p><p>Imagen 9. Campo Moneda</p><p>Seleccione la opción <strong>Comenzar Búsqueda</strong>, para filtrar la información en base a lo seleccionado anteriormente.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image106.png" alt="Campo"></p><p>Imagen 10. Opción Comenzar Búsqueda</p><p>Podrá visualizar los diferentes movimientos de la caja en base a lo seleccionado.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image107.png" alt="Campo"></p><p>Imagen 11. Resultado de Búsqueda</p><p>Seleccione los movimientos correspondientes al retiro que requiere realizar.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image108.png" alt="Campo"></p><p>Imagen 12. Selección de Movimientos</p><p>Seleccione en el campo <strong>Fecha de la Transacción</strong>, la fecha con la que serán generados los documento.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image109.png" alt="Campo"></p><p>Imagen 13. Campo Fecha de la Transacción</p><p>Seleccione en el campo <strong>Cuenta Bancaria</strong>, la cuenta bancaria en la cual ingresarán los movimientos seleccionados.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image110.png" alt="Campo"></p><p>Imagen 14. Campo Cuenta Bancaria</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio correspondiente para el ingreso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image111.png" alt="Campo"></p><p>Imagen 15. Campo Socio del Negocio</p><p>Introduzca en el campo <strong>No. del Documento</strong>, el número de documento para los documentos de egreso e ingreso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image112.png" alt="Campo"></p><p>Imagen 16. Campo No. del Documento</p><p>En el caso de los retiros en moneda <strong>VES</strong>, tilde el check <strong>Dividir Depósitos</strong>, para generar un documento de egreso de la caja POS con la suma de todos los cobros y tantos documentos de ingreso a la caja administrativos como movimientos seleccionados en el proceso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image113.png" alt="Campo"></p><p>Imagen 17. Check Dividir Depósitos</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo que justifica el retiro de fondos del dinero de la caja. Para este caso, es utilizado como ejemplo el cargo <strong>Efectivo en Tránsito Administración</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image114.png" alt="Campo"></p><p>Imagen 18. Campo Cargo</p><p>Seleccione en el campo <strong>Tipo de Documento para Retiros</strong>, el tipo de documento con el cual será generado el egreso. Para este caso, se utiliza el tipo de documento <strong>Egreso Caja</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image115.png" alt="Campo"></p><p>Imagen 19. Campo Tipo de Documento para Retiros</p><p>Seleccione en el campo <strong>Tipo de Documento para Depósito</strong>, el tipo de documento con el cual será generado el ingreso. Para este caso, se utiliza el tipo de documento <strong>Ingreso Caja</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image116.png" alt="Campo"></p><p>Imagen 20. Campo Tipo de Documento para Depósito</p><p>El check <strong>Conciliar Automáticamente</strong>, permite la conciliación automática de los movimientos seleccionados.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image117.png" alt="Campo"></p><p>Imagen 21. Check Conciliar Automáticamente</p><p>Seleccione la opción <strong>OK</strong>, para ejecutar el proceso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image118.png" alt="Campo"></p><p>Imagen 22. Opción OK</p><p>Note</p><p>Por cada retiro de fondo realizado desde el punto de venta, ADempiere crea en la ventana <strong>Caja</strong> los siguientes documentos:</p><p>Un documento de pago asociando en el campo <strong>Cuenta</strong>, la caja POS desde la cual se ejecuta el proceso. Dicho documento se puede visualizar en la ventana <strong>Caja</strong>.</p><p>De igual manera crea un documento de cobro asociando en el campo <strong>Cuenta</strong>, la caja adiministrativa seleccionada en el campo <strong>Cuenta Bancaria</strong> del proceso <strong>Retiro de Caja (Detallado)</strong>. Dicho documento se puede visualizar en la ventana <strong>Caja</strong>.</p><h2 id="consulta-de-pago-y-cobro-generados-en-caja" tabindex="-1"><a class="header-anchor" href="#consulta-de-pago-y-cobro-generados-en-caja" aria-hidden="true">#</a> Consulta de Pago y Cobro Generados en Caja</h2><p>Ubique los registros creados por el retiro de fondos en la ventana <strong>Caja</strong>, con ayuda del número de documento ingresado en el campo <strong>No. del Documento</strong>, de la ventana <strong>Retiro de Caja (Detallado)</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image119.png" alt="Campo"></p><p>Imagen 23. Número de Documento del Retiro de Fondos</p><p>Podrá visualizar en la parte inferior derecha de la ventana <strong>Caja</strong>, el número de registros creados con el valor ingresado en el campo <strong>No. del Documento</strong>, de la ventana <strong>Retiro de Caja (Detallado)</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image120.png" alt="Campo"></p><p>Imagen 24. Documento de Pago Generado en Caja</p><p>Podrá visualizar el registro de <strong>Pago</strong> creado desde la ventana <strong>Retiro de Caja (Detallado)</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image121.png" alt="Campo"></p><p>Imagen 25. Pago Creado desde la Ventana Retiros de Puntos de Venta</p><p>Seleccione el icono <strong>Próximo Registro</strong>, ubicado en la barra de herramientas para visualizar el registro de <strong>Cobro</strong> creado desde la ventana <strong>Retiro de Caja (Detallado)</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image122.png" alt="Campo"></p><p>Imagen 26. Cobro Creado desde la Ventana Retiros de Puntos de Venta</p><h2 id="consultar-registro-en-cierre-de-caja" tabindex="-1"><a class="header-anchor" href="#consultar-registro-en-cierre-de-caja" aria-hidden="true">#</a> Consultar Registro en Cierre de Caja</h2><p>Cada forma de pago y moneda por la que se realiza un retiro de fondos, se genera un documento de egreso y uno de ingreso en la ventana <strong>Caja</strong>. Por cada documento generado se crea una línea con el mismo asociado, en la pestaña <strong>Línea de Cierre de Caja</strong>, de la ventana <strong>Cierre de Caja</strong> correspondiente a los registros creados en estado **Borrador al realizar la apertura de caja.</p><p>Registro de <strong>Caja Administrativa</strong> en la ventana <strong>Cierre de Caja</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image123.png" alt="Campo"></p><p>Imagen 27. Registro de Retiro Generado en Caja Administrativa</p><p>Registro de <strong>Caja 01</strong> en la ventana <strong>Cierre de Caja</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image124.png" alt="Campo"></p><p>Imagen 28. Registro de Retiro Generado en Caja 01</p>',97)],t={},s=(0,o(13860).Z)(t,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,r)}]])},84416:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-72c1f343","path":"/docs/pdv-management/detailed.html","title":"Retiro Detallado de Punto de Venta","lang":"en-US","frontmatter":{"title":"Retiro Detallado de Punto de Venta","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Un retiro de fondos es realizado cuando por algún motivo se saca dinero de alguna de las cajas donde es realizado el proceso de venta de productos, la mayoria de las veces suele su","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/pdv-management/detailed.html"}],["meta",{"property":"og:title","content":"Retiro Detallado de Punto de Venta"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-21T11:28:35.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-21T11:28:35.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Ejecución del Proceso","slug":"ejecucion-del-proceso","children":[]},{"level":2,"title":"Consulta de Pago y Cobro Generados en Caja","slug":"consulta-de-pago-y-cobro-generados-en-caja","children":[]},{"level":2,"title":"Consultar Registro en Cierre de Caja","slug":"consultar-registro-en-cierre-de-caja","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1679398115000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":4}]},"readingTime":{"minutes":5.05,"words":1514},"filePathRelative":"docs/pdv-management/detailed.md","localizedDate":"March 9, 2023"}')}}]);