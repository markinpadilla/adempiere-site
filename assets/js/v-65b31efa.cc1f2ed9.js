"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5121],{76158:(e,a,o)=>{o.r(a),o.d(a,{default:()=>s});var n=o(78e3);const r=[(0,n.uE)('<p>Una factura en cuentas por pagar, es el documento legal que representa una deuda contraída por la compañía u organización con un proveedor determinado, por la compra de productos y servicios que la misma necesita de forma directa o indirecta para realizar sus actividades, afectando económicamente a la misma.</p><p>En ADempiere es posible generar una factura de cuentas por pagar de forma directa. El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar una factura de cuentas por pagar en ADempiere, en su versión 3.9.2 para la localización Venezuela.</p><ul><li>Registro de Documento por Pagar <ul><li>Línea de la Factura</li></ul></li><li>Crear Factura desde Orden de Compra</li><li>Conversión de Factura Automática</li></ul><h2 id="registro-de-documento-por-pagar" tabindex="-1"><a class="header-anchor" href="#registro-de-documento-por-pagar" aria-hidden="true">#</a> Registro de Documento por Pagar</h2><p>Ubique en el menú de ADempiere, la carpeta <strong>Gestión de Compras</strong>, luego seleccione la ventana <strong>Documentos por Pagar</strong>, adjunto imagen para referencia.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image217.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Documentos por Pagar</strong>, con todos los registros que contiene ADempiere referente a documentos por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image218.png" alt="Campo"></p><p>Imagen 2. Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Registro Nuevo</strong> en la barra de herramientas de ADempiere, para crear un documento nuevo en la ventana <strong>Documentos por Pagar</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image219.png" alt="Campo"></p><p>Imagen 2. Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual se esta realizando el documento por pagar de productos o servicios, el valor en el mismo debe ser diferente del símbolo (*).</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image220.png" alt="Campo"></p><p>Imagen 3. Campo Organización</p><p>En el campo <strong>Orden de Compra</strong>, se muestra el número de documento de la orden de compra asociada al documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image221.png" alt="Campo"></p><p>Imagen 4. Campo Orden de Compra</p><p>En el campo <strong>Fecha de la Orden</strong>, se muestra la fecha contable de la orden de compra asociada al documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image222.png" alt="Campo"></p><p>Imagen 5. Campo Fecha de la Orden</p><p>En el campo <strong>Referencia de Orden de Socio del Negocio</strong>, se puede ingresar la referencia de orden del socio del negocio para esta transacción específica. Frecuentemente los números de orden de compras se dan para ser impresas en las facturas como una referencia más fácil. Un número estándar puede ser definido en la ventana <strong>Socio del Negocio (Cliente)</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image997.png" alt="Campo"></p><p>Imagen 6. Campo Referencia de Orden de Socio del Negocio</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento Destino</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image223.png" alt="Campo"></p><p>Imagen 7. Campo Tipo de Documento</p><p>Introduzca el número del documento en el campo <strong>No. de Documento</strong>, el mismo no es obligatorio ya que ADempiere genera un número de secuencia automáticamente al ser guardado el registro del documento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image224.png" alt="Campo"></p><p>Imagen 8. Campo Número de Documento</p><p>Seleccione en el campo <strong>Fecha Facturación</strong>, la fecha que posee el documento por pagar en físico.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image225.png" alt="Campo"></p><p>Imagen 9. Campo Fecha Facturación</p><p>Seleccione en el campo <strong>Fecha Contable</strong>, la fecha en la cual se esta realizando el documento por pagar en ADempiere.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image226.png" alt="Campo"></p><p>Imagen 10. Campo Fecha Contable</p><p>Seleccione el socio del negocio proveedor en el campo <strong>Socio del Negocio</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image227.png" alt="Campo"></p><p>Imagen 11. Campo Socio del Negocio</p><p>Podrá visualizar en el campo <strong>Dirección del Socio del Negocio</strong>, la dirección de localización del socio del negocio proveedor.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image228.png" alt="Campo"></p><p>Imagen 12. Campo Dirección del Socio del Negocio</p><p>De igual manera, puede visualizar en el campo <strong>Usuario</strong>, el usuario en ADempiere del socio del negocio seleccionado anteriormente.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image229.png" alt="Campo"></p><p>Imagen 13. Campo Usuario</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios con la cual requiere generar el documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image230.png" alt="Campo"></p><p>Imagen 14. Campo Lists de Precios</p><p>Podrá visualizar en el campo <strong>Moneda</strong>, la moneda definida para la lista de precios seleccionada.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image231.png" alt="Campo"></p><p>Imagen 15. Campo Moneda</p><p>Seleccione en el campo <strong>Agente Compañía</strong>, el agente comercial relacionado con el documento por pagar que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image232.png" alt="Campo"></p><p>Imagen 16. Campo Agente comercial</p><p>Seleccione el checklist <strong>Imprimir Descuento</strong>, para indicar que el descuento será impreso en la factura y la orden.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image233.png" alt="Campo"></p><p>Imagen 17. Checklist Imprimir Descuento</p><p>Seleccione la opción <strong>Cheque</strong>, para indicar la forma de pago que será aplicada al documento que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image234.png" alt="Campo"></p><p>Imagen 18. Opción Cheque</p><p>Seleccione la opción <strong>Crear Desde Factura</strong>, para crear el documento por pagar desde una una orden, autorización de devolución de material (ADM), factura o recepción en una factura.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image235.png" alt="Campo"></p><p>Imagen 19. Opción Crear Desde Factura</p><p>Seleccione la opción <strong>Generar Recibos desde Facturas</strong>, para crear y procesar el recibo de la entrega desde la factura.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image236.png" alt="Campo"></p><p>Imagen 20. Opción Generar Recibos desde Facturas</p><p>El checklist <strong>Documento Fiscal</strong>, indica que el registro de documento por pagar es considerado un documento fiscal y se utiliza para las facturas declaradas.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image237.png" alt="Campo"></p><p>Imagen 21. Checklist Documento Fiscal</p><p>Introduzca en el campo <strong>Control No</strong>, el número de control fiscal establecido para el documento que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image238.png" alt="Campo"></p><p>Imagen 22. Campo Control No.</p><p>Introduzca en el campo <strong>Código Sunagro</strong>, el Codigo de Superintendencia Nacional de Gestión Agroalimentaria establecido para el documento que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image239.png" alt="Campo"></p><p>Imagen 23. Campo Código Sunagro</p><p>Seleccione en el campo <strong>Lista</strong>, la lista correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image240.png" alt="Campo"></p><p>Imagen 24. Campo Lista</p><p>Seleccione en el campo <strong>Región de Ventas</strong>, la región de ventas correspondiente al área de cobertura de ventas específica.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image241.png" alt="Campo"></p><p>Imagen 25. Campo Región de Ventas</p><p>Seleccione en el campo <strong>Factura Afectada</strong>, la factura afectada para ser asignada automáticamente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image242.png" alt="Campo"></p><p>Imagen 26. Campo Factura Afectada</p><p>Seleccione el checklist <strong>No Aplica Retención de I.V.A</strong>, para indicar que los documentos o socios de negocio marcados con este checklist no serán procesados al momento de realizar la retención de I.V.A.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image243.png" alt="Campo"></p><p>Imagen 27. Checklist No Aplica Retención de IVA</p><p>Seleccione en el campo <strong>Centro de Costos</strong>, el centro de costos definido para el registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image244.png" alt="Campo"></p><p>Imagen 28. Campo Centro de Costos</p><p>Seleccione en el campo <strong>Concepto de Retención de ISLR</strong>, la retención de I.S.L.R. aplicada al socio de negocio proveedor.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image245.png" alt="Campo"></p><p>Imagen 29. Campo Concepto de Retención de ISLR</p><p>Seleccione en el campo <strong>Actividad</strong>, la actividad o tarea que es ejecutada en el curso de un negocio para ser usada en el costeo de la misma.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image246.png" alt="Campo"></p><p>Imagen 30. Campo Actividad</p><p>Seleccione en el campo <strong>Retención de Terceros</strong>, la retención correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image247.png" alt="Campo"></p><p>Imagen 31. Campo Retención de Terceros</p><p>Seleccione el icono <strong>Guardar</strong> de la barra de herramientas de ADempiere, para guardar los cambios realizados.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image248.png" alt="Campo"></p><p>Imagen 32. Guardar Cambios</p><h3 id="linea-de-la-factura" tabindex="-1"><a class="header-anchor" href="#linea-de-la-factura" aria-hidden="true">#</a> Línea de la Factura</h3><p>Seleccione la pestaña <strong>Línea de Factura</strong> y proceda al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image249.png" alt="Campo"></p><p>Imagen 33. Línea de Factura</p><p>Podrá visualizar en el campo <strong>Factura</strong>, el número de registro del documento por pagar al que pertenece la línea que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image250.png" alt="Campo"></p><p>Imagen 34. Campo Factura</p><p>Si el registro de documento por pagar es realizado desde una orden de compra, podrá visualizar en el campo <strong>Línea Orden de Compra</strong>, la línea de la orden de compra asociada al mismo.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image251.png" alt="Campo"></p><p>Imagen 35. Campo Línea Orden de Compra</p><p>De igual manera, podrá visualizar en el campo <strong>No. Línea</strong>, el número de línea correspondiente al registro en el cual se encuentra ubicado.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image252.png" alt="Campo"></p><p>Imagen 36. Campo No. Línea</p><p>Si el registro de documento por pagar es realizado desde un recibo de entrega, podrá visualizar en el campo <strong>Línea Entrega Recibo</strong>, la línea de la entrega asociada al mismo.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image253.png" alt="Campo"></p><p>Imagen 37. Campo Línea Entrega Recibo</p><p>Seleccione en el campo <strong>Producto</strong>, el producto o servicio comprado por el cual se encuentra realizando el documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image254.png" alt="Campo"></p><p>Imagen 38. Campo Producto</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo por el cual se encuentra realizando el documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image255.png" alt="Campo"></p><p>Imagen 39. Campo Cargo</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción referente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image256.png" alt="Campo"></p><p>Imagen 40. Campo Descripción</p><p>Seleccione el checklist <strong>Relacionado Activo</strong>, para indicar que el registro se encuentra relacionado con un activo fijo.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image257.png" alt="Campo"></p><p>Imagen 41. Checklist Relacionado Activo</p><p>Note</p><p>Al tildar el checklist <strong>Relacionado Activo</strong>, se habilitan los campos <strong>Capital vs Gastos</strong> y <strong>Activo Fijo</strong>.</p><p>Seleccione en el campo <strong>Capital vs Gasto</strong>, si el registro que se encuentra realizando es por capital o gasto.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image258.png" alt="Campo"></p><p>Imagen 42. Campo Capital o Gasto</p><p>Seleccione en el campo <strong>Activo Fijo</strong>, el activo fijo involucrado en el registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image259.png" alt="Campo"></p><p>Imagen 43. Campo Activo Fijo</p><p>Seleccione en el campo <strong>Cantidad</strong>, la cantidad comprada del producto seleccionado.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image260.png" alt="Campo"></p><p>Imagen 44. Campo Cantidad</p><p>Seleccione en el campo <strong>UM</strong>, la unidad de medida del producto seleccionado.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image261.png" alt="Campo"></p><p>Imagen 45. Campo UM</p><p>Podrá visualizar en el campo <strong>Cantidad Facturada</strong>, la cantidad factura del producto seleccionado.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image262.png" alt="Campo"></p><p>Imagen 46. Campo Cantidad Facturada</p><p>Introduzca en el campo <strong>Precio</strong>, el precio real del producto.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image263.png" alt="Campo"></p><p>Imagen 47. Campo Precio</p><p>Note</p><p>El precio ingreso es convertido al precio real basado en la conversión de la unidad de medida seleccionada en el campo <strong>UM</strong>.</p><p>Podrá visualizar en el campo <strong>Precio Actual</strong>, el precio unitario del producto.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image264.png" alt="Campo"></p><p>Imagen 48. Campo Precio</p><p>Note</p><p>El precio actual indica el precio para un producto en la moneda fuente.</p><p>Introduzca en el campo <strong>Precio de Lista</strong>, el precio oficial del producto.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image265.png" alt="Campo"></p><p>Imagen 49. Campo Precio de Lista</p><p>Note</p><p>El precio actual indica el precio oficial para un producto en la moneda fuente.</p><p>Seleccione en el campo <strong>Impuesto</strong>, el impuesto a aplicar al registro o línea de registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image266.png" alt="Campo"></p><p>Imagen 50. Campo Impuesto</p><p>Podrá visualizar en el campo <strong>Total del Impuesto</strong>, el total del impuesto a aplicar al registro o línea de registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image267.png" alt="Campo"></p><p>Imagen 51. Campo Total del Impuesto</p><p>Seleccione en el campo <strong>Factura Afectada</strong>, la factura afectada para ser asignada automáticamente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image268.png" alt="Campo"></p><p>Imagen 52. Campo Factura Afectada</p><p>Seleccione en el campo <strong>Actividad</strong>, la actividad o tarea que es ejecutada en el curso de un negocio para ser usada en el costeo de la misma.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image269.png" alt="Campo"></p><p>Imagen 53. Campo Actividad</p><p>Seleccione en el campo <strong>Centro de Costo</strong>, el centro de costos definido para el registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image270.png" alt="Campo"></p><p>Imagen 54. Campo Centro de Costo</p><p>Seleccione la opción <strong>Crear Costo de Entrega a partir de Recibos</strong>, para crear el costo de la entrega a partir de los recibos.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image271.png" alt="Campo"></p><p>Imagen 55. Opción Crear Costo de Entrega a partir de Recibos</p><p>Podra visualizar en el campo <strong>Neto de Línea</strong>, el total neto de la línea basado en la cantidad y el precio actual.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image272.png" alt="Campo"></p><p>Imagen 56. Campo Neto de Línea</p><p>Note</p><p>El total neto de la línea se obtiene de la operación (Cantidad * Precio Actual) sin fletes ni cargos. Cualquier cargo adicional o flete no es incluido.</p><p>De igual manera, podrá visualizar en el campo <strong>Total de la Línea</strong>, la cantidad total de la línea con los impuestos incluidos</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image273.png" alt="Campo"></p><p>Imagen 57. Campo Total de la Línea</p><p>Note</p><p>El total de la línea se obtiene de la operación (Neto de Línea + Total del Impuesto).</p><p>Guarde el registro de los campos seleccionando el icono <strong>Guardar Cambios</strong> ubicado en la barra de herramientas de ADempiere.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image274.png" alt="Campo"></p><p>Imagen 58. Guardar Cambios</p><p>Regrese a la ventana principal <strong>Factura</strong>, ubicando la parte inferior del documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image275.png" alt="Campo"></p><p>Imagen 59. Opción Completar</p><p>Podrá visualizar en el campo <strong>Total de Líneas</strong>, la sumatoria total de todos los netos de línea sin impuestos ni cargos, que contiene el documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image276.png" alt="Campo"></p><p>Imagen 60. Campo Total de Líneas</p><p>De igual manera, podrá visualizar en el campo <strong>Gran Total</strong>, la sumatoria de todos los montos reflejados en el campo <strong>Total de la Línea</strong>, de todas las líneas que contiene el documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image277.png" alt="Campo"></p><p>Imagen 61. Campo Gran Total</p><p>Note</p><p>El gran total identifica el total incluyendo impuestos y totales de fletes en la moneda del documento.</p><p>Seleccione la opción <strong>Completar</strong>, ubicada en la parte inferior derecha del documento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image278.png" alt="Campo"></p><p>Imagen 62. Opción Completar</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong> para completar el documento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image279.png" alt="Campo"></p><p>Imagen 63. Acción Completar Documento</p><h2 id="crear-factura-desde-orden-de-compra" tabindex="-1"><a class="header-anchor" href="#crear-factura-desde-orden-de-compra" aria-hidden="true">#</a> Crear Factura desde Orden de Compra</h2><p>Ubique en el menú de ADempiere la carpeta <strong>Gestión de Compras</strong>, luego seleccione la ventana <strong>Documentos por Pagar</strong>, adjunto imagen para referencia.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image280.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Documentos por Pagar</strong>, con todos los registros de documentos por pagar que se encuentran en ADempiere.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image281.png" alt="Campo"></p><p>Imagen 2. Ventana Documentos por Pagar</p><p>Seleccione el icono <strong>Registro Nuevo</strong>, ubicado en la barra de herramientas de ADempiere para crear un nuevo registro.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image282.png" alt="Campo"></p><p>Imagen 3. Icono Registro Nuevo de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual se encuentra realizando el documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image283.png" alt="Campo"></p><p>Imagen 4. Campo Organización de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Introduzca en el campo <strong>No. del Documento</strong>, el número de documento correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image284.png" alt="Campo"></p><p>Imagen 5. Campo No del Documento de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Note</p><p>Si no es ingresado ningún valor en este campo, ADempiere tomará el número de secuencia establecido para para el tipo de documento seleccionado.</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción con respecto al documento que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image285.png" alt="Campo"></p><p>Imagen 6. Campo Descripción de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento Destino</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image286.png" alt="Campo"></p><p>Imagen 7. Campo Tipo de Documento Destino de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione en el campo <strong>Fecha de Facturación</strong>, la fecha que posee el documento por pagar en físico.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image287.png" alt="Campo"></p><p>Imagen 8. Campo Fecha de Facturación de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione en el campo <strong>Fecha Contable</strong>, la fecha en la cual se encuentra realizando el registro del documento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image288.png" alt="Campo"></p><p>Imagen 9. Campo Fecha Contable de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio proveedor por el cual es realizado el documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image289.png" alt="Campo"></p><p>Imagen 10. Campo Socio del Negocio de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Podrá visualizar en el campo <strong>Dirección del Socio del Negocio</strong>, la dirección de localización del socio del negocio seleccionado anteriormente.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image290.png" alt="Campo"></p><p>Imagen 11. Campo Dirección del Socio del Negocio de la Ventana Documentos por Pagar desde Orden de Compra</p><p>De igual manera, podrá visualizar en el campo <strong>Usuario</strong>, el usuario dentro de ADempiere del socio del negocio seleccionado.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image291.png" alt="Campo"></p><p>Imagen 12. Campo Usuario de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios utilizada para el documento por pagar que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image292.png" alt="Campo"></p><p>Imagen 13. Campo Lista de Precios de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Podrá visualizar en el campo <strong>Moneda</strong>, la moneda definida para la lista de precios seleccionada anteriormente.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image293.png" alt="Campo"></p><p>Imagen 14. Campo Moneda de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione en el campo <strong>Agente Compañía</strong>, el agente comercial relacionado con el documento por pagar que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image294.png" alt="Campo"></p><p>Imagen 15. Campo Agente Compañía de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione el checklist <strong>Imprimir Descuento</strong>, para imprimir el descuento en la factura y la orden asociada al documento por pagar que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image295.png" alt="Campo"></p><p>Imagen 16. Checklist Imprimir Descuento de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la ventana <strong>Documentos por Pagar</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image296.png" alt="Campo"></p><p>Imagen 17. Icono Guardar Cambios de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione la opción <strong>Crear Desde Factura</strong>, para crear el documento por pagar desde una orden de compra.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image297.png" alt="Campo"></p><p>Imagen 18. Opción Crear Desde Factura de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Podrá visualizar la ventana <strong>Crear Desde una Orden/ADM/Factura/Recepción en una Factura</strong>, con el campo <strong>Crear Desde Tipo</strong> y la opción <strong>Conenzar Búsqueda</strong>, para filtrar de búsqueda según lo que sea seleccionado en dicho campo.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image298.png" alt="Campo"></p><p>Imagen 19. Ventana Crear Desde una Orden ADM Factura Recepción en una Factura</p><p>Seleccione en el campo <strong>Crear Desde Tipo</strong>, la opción <strong>Orden</strong>, para crear el documento por pagar desde una orden de compra.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image299.png" alt="Campo"></p><p>Imagen 20. Campo Crear Desde Tipo de la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura</p><p>Al seleccionar la opción <strong>Orden</strong>, se habilita el campo <strong>Orden de Venta</strong>, para seleccionar la orden de compra desde la cual se requiere crear el documento por pagar.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image300.png" alt="Campo"></p><p>Imagen 21. Campo Orden de Venta de la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura</p><p>Seleccione la opción <strong>Comenzar Búsqueda</strong>, para realizar la búsqueda de los registros en ADempiere según lo seleccionado anteriormente.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image301.png" alt="Campo"></p><p>Imagen 22. Opción Comenzar Búsqueda de la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura</p><p>Seleccione el registro de la orden de compra desde la cual requiere crear el documento por pagar que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image302.png" alt="Campo"></p><p>Imagen 23. Selección de Orden de Compra en la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura</p><p>Seleccione la opción <strong>OK</strong>, para cargar a la ventana <strong>Documento por Pagar</strong>, la información de la orden de compra seleccionada.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image303.png" alt="Campo"></p><p>Imagen 24. Opción OK de la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura</p><p>El proceso regresa a la ventana <strong>Documentos por Pagar</strong>, donde se debe seleccionar el icono <strong>Refrescar</strong>, ubicado en la barra de herramientas de ADempiere, para actualizar los campos en dicha ventana y sean visualizados los datos cargados desde el proceso anteriormente explicado.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image304.png" alt="Campo"></p><p>Imagen 25. Icono Refrecar de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Podrá visualizar los datos de la orden de compra cargados a la ventana <strong>Documentos por Pagar</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image305.png" alt="Campo"></p><p>Imagen 26. Datos de la Orden de Compra en la Ventana Documentos por Pagar desde Orden de Compra</p><p>Sin embargo, puede seleccionar la pestaña <strong>Línea de Factura</strong>, para visualizar los productos que contiene la orden de compra seleccionada.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image306.png" alt="Campo"></p><p>Imagen 27. Pestaña Línea de Factura de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione la pestaña principal <strong>Factura</strong>, para ubicar la opción <strong>Completar</strong>, en la parte inferior derecha del documento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image307.png" alt="Campo"></p><p>Imagen 28. Pestaña Principal Factura de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione la opción <strong>Completar</strong>, para completar el registro realizado en la ventana <strong>Documentos por Pagar</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image308.png" alt="Campo"></p><p>Imagen 29. Opción Completar de la Ventana Documentos por Pagar desde Orden de Compra</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para culminar el procedimiento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image309.png" alt="Campo"></p><p>Imagen 30. Acción Completar y Opción OK de la Ventana Documentos por Pagar desde Orden de Compra</p><h2 id="conversion-de-factura-automatica" tabindex="-1"><a class="header-anchor" href="#conversion-de-factura-automatica" aria-hidden="true">#</a> Conversión de Factura Automática</h2><p>Cree una orden de compra de forma habitual con divisas, de no conocer el procedimiento puede consultar el material Registro de Orden de Compra Directa, para este ejemplo hemos realizado una orden con moneda USD.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image310.png" alt="Campo"></p><p>Imagen 1. Orden de Compra</p><p>Cree un documento por pagar de manera habitual, de no conocer el procedimiento puede consultar el material Crear Factura desde Orden de Compra, para este ejemplo realizaremos una factura en BS para convertirla.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image311.png" alt="Campo"></p><p>Imagen 2. Factura</p><p>Tome como salvedad los siguientes campos importantes para el proceso:</p><p>Seleccione la opción <strong>Crear Desde Orden/Recibo</strong>, para crear el documento por pagar desde una orden de compra.</p><p>Seleccione la orden creada inicialmente, al ejecutar el proceso verá que son cambiados automáticamente los campos <strong>Lista de Precio</strong>, <strong>Moneda</strong> y <strong>Tipo de Conversión</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image312.png" alt="Campo"></p><p>Imagen 3. Lista de Precio</p><p>Proceda a cambiar de manera manual la <strong>Lista de Precio</strong> y el <strong>Tipo de Conversión</strong> de ser necesario, recuerde, que el <strong>Tipo de Conversión</strong> determina la tasa de cambio con la que se realizará la conversión del documento.</p><p>Ejecute el proceso <strong>Recalcular Tasa Para Lineas de la Factura</strong> que realiza la conversión del documento por pagar, ubicado en la barra de herramientas.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image313.png" alt="Campo"></p><p>Imagen 4. Proceso Convertir Documento</p><p>La ejecución del proceso dejará como resultado las lineas del documento convertidas, los impuestos y el gran total, evitando así tener que realizar la conversión de forma manual.</p><p>Sabiendo que el ejemplo es de una Orden de Compra de 500 USD con un 16% de IVA quedando un total de 580 USD, al crear la factura y convertir con una tasa de 5,771 el resultado convertido debe ser 3.347,18.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image314.png" alt="Campo"></p><p>Imagen 5. Factura Convertida</p>',324)],p={},s=(0,o(13860).Z)(p,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,r)}]])},83909:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-65b31efa","path":"/docs/purchase-management/document.html","title":"Documento por Pagar","lang":"en-US","frontmatter":{"title":"Documento por Pagar","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Una factura en cuentas por pagar, es el documento legal que representa una deuda contraída por la compañía u organización con un proveedor determinado, por la compra de productos y","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/purchase-management/document.html"}],["meta",{"property":"og:title","content":"Documento por Pagar"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-21T11:28:15.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-21T11:28:15.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Registro de Documento por Pagar","slug":"registro-de-documento-por-pagar","children":[{"level":3,"title":"Línea de la Factura","slug":"linea-de-la-factura","children":[]}]},{"level":2,"title":"Crear Factura desde Orden de Compra","slug":"crear-factura-desde-orden-de-compra","children":[]},{"level":2,"title":"Conversión de Factura Automática","slug":"conversion-de-factura-automatica","children":[]}],"git":{"createdTime":1679398095000,"updatedTime":1679398095000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":1}]},"readingTime":{"minutes":14.44,"words":4331},"filePathRelative":"docs/purchase-management/document.md","localizedDate":"March 21, 2023"}')}}]);