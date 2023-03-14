"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1643],{14814:(e,a,o)=>{o.r(a),o.d(a,{default:()=>t});var n=o(78e3);const r=[(0,n.uE)('<p>Es un documento que se aplica a una factura con la finalidad de disminuir el monto de la misma, ya sea por concepto de algún tipo de descuento promocional o por devolución de productos comprados.</p><p>A continuación es explicado el procedimiento para generar en ADempiere, una nota de crédito de cuentas por pagar.</p><h2 id="registro-de-nota-de-credito" tabindex="-1"><a class="header-anchor" href="#registro-de-nota-de-credito" aria-hidden="true">#</a> Registro de Nota de Crédito</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Compras</strong>, luego seleccione la ventana <strong>Documentos por Pagar</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image99.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Documentos por Pagar</strong>, con los diferentes registros de documentos por pagar cargados a ADempiere.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image100.png" alt="Campo"></p><p>Imagen 2. Ventana Documentos por Pagar</p><p>Seleccione el icono <strong>Registro Nuevo</strong>, ubicado en la barra de herramientas de ADempiere, para crear un nuevo registro en la ventana <strong>Documentos por Pagar</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image101.png" alt="Campo"></p><p>Imagen 3. Icono Registro Nuevo de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual se encuentra realizando la nota de crédito.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image102.png" alt="Campo"></p><p>Imagen 4. Campo Organización de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Orden de Compra</strong>, la orden de compra por la cual requiere realizar la nota de crédito.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image103.png" alt="Campo"></p><p>Imagen 5. Campo Orden de Compra de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Fecha de la Orden</strong>, la fecha contable de la orden seleccionada en el campo <strong>Orden de Compra</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image104.png" alt="Campo"></p><p>Imagen 6. Campo Fecha de la Orden de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>No. del Documento</strong>, el número de identificación correspondiente al documento que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image105.png" alt="Campo"></p><p>Imagen 7. Campo No del Documento de la Ventana Documentos por Pagar</p><p>Note</p><p>Si no es ingresado ningún valor en este campo, ADempiere tomará el número de secuencia establecido para el tipo de documento seleccionado al guardar el mismo.</p><p>Introduzca en el campo <strong>Referencia de Orden de Socio del Negocio</strong>, la referencia de orden de socio del negocio.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image106.png" alt="Campo"></p><p>Imagen 8. Campo Referencia de Orden de Socio del Negocio de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción con respecto al documento que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image107.png" alt="Campo"></p><p>Imagen 9. Campo Descripción de la Ventana Documentos por Pagar</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento Destino</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image108.png" alt="Campo"></p><p>Imagen 10. Campo Tipo de Documento Destino de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Fecha de Facturación</strong>, la fecha en la cual es realizado el documento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image109.png" alt="Campo"></p><p>Imagen 11. Campo Fecha de Facturación de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Fecha Contable</strong>, la fecha en la cual es realizado el documento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image110.png" alt="Campo"></p><p>Imagen 12. Campo Fecha Contable de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio al cual le esta aplicando la nota de crédito.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image111.png" alt="Campo"></p><p>Imagen 13. Campo Socio del Negocio de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Dirección de Socio del Negocio</strong>, la dirección del socio del negocio seleccionado anteriormente en el campo <strong>Socio del Negocio</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image112.png" alt="Campo"></p><p>Imagen 14. Campo Dirección de Socio del Negocio de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Usuario</strong>, el usuario del socio del negocio seleccionado anteriormente en el campo <strong>Socio del Negocio</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image113.png" alt="Campo"></p><p>Imagen 15. Campo Usuario de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios con la cual requiere generar la nota de crédito.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image114.png" alt="Campo"></p><p>Imagen 16. Campo Lista de Precios de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Moneda</strong>, la moneda definida para la lista de precios seleccionada.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image115.png" alt="Campo"></p><p>Imagen 17. Campo Moneda de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Agente Compañía</strong>, el agente de comprañía relacionado con la nota de crédito que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image116.png" alt="Campo"></p><p>Imagen 18. Campo Agente Compañía de la Ventana Documentos por Pagar</p><p>El checklist <strong>Imprimir Descuento</strong>, indica se va a imprimir el descuento en la factura y la orden.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image117.png" alt="Campo"></p><p>Imagen 19. Checklist Imprimir Descuento de la Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Cheque</strong>, para indicar como será pagado el documento.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image118.png" alt="Campo"></p><p>Imagen 20. Opción Cheque de la Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Crear Desde Factura</strong>, para crear el documento desde una orden, autorización de devolución, factura o recepción.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image119.png" alt="Campo"></p><p>Imagen 21. Opción Crear Desde Factura de la Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Generar Recibos desde Facturas</strong>, para crear y procesar el recibo de la entrega desde la factura cuando se encuentre correcta y completa.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image120.png" alt="Campo"></p><p>Imagen 22. Opción Generar Recibos desde Facturas de la Ventana Documentos por Pagar</p><p>El checklist <strong>Documento Fiscal</strong>, indica que el registro en el que se encuentra es un documento fiscal.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image121.png" alt="Campo"></p><p>Imagen 23. Checklist Documento Fiscal de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Contol No</strong>, el número de control fiscal correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image122.png" alt="Campo"></p><p>Imagen 24. Campo Control No de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Código Sunagro</strong>, el código sunagro correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image8123.png" alt="Campo"></p><p>Imagen 25. Campo Código Sunagro de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Lista</strong>, la lista correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image124.png" alt="Campo"></p><p>Imagen 26. Campo Lista de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Región de Ventas</strong>, la región de ventas correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image125.png" alt="Campo"></p><p>Imagen 27. Campo Región de Ventas de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Factura Afectada</strong>, la factura a la cual requiere aplicar la nota de crédito que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image126.png" alt="Campo"></p><p>Imagen 28. Campo Factura Afectada de la Ventana Documentos por Pagar</p><p>Al tildar el checklist <strong>No Aplica Retención de I.V.A</strong>, no es aplicada la retención al documento que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image127.png" alt="Campo"></p><p>Imagen 29. Checklist No Aplica Retención de IVA de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Centro de Costos</strong>, el centro de costos correspondiente para el registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image128.png" alt="Campo"></p><p>Imagen 30. Campo Centro de Costos de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Concepto de Retención de I.S.L.R</strong>, el concepto de retención que requiere aplicar al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image129.png" alt="Campo"></p><p>Imagen 31. Campo Concepto de Retención de ISLR de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Actividad</strong>, la actividad correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image130.png" alt="Campo"></p><p>Imagen 32. Campo Actividad de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Retención de Terceros</strong>, la retención correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image131.png" alt="Campo"></p><p>Imagen 33. Campo Retención de Terceros de la Ventana Documentos por Pagar</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña <strong>Factura</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image132.png" alt="Campo"></p><p>Imagen 34. Icono Guardar Cambios de la Ventana Documentos por Pagar</p><h2 id="linea-de-la-factura" tabindex="-1"><a class="header-anchor" href="#linea-de-la-factura" aria-hidden="true">#</a> Línea de la Factura</h2><p>Seleccione la pestaña <strong>Línea de la Factura</strong>, para cargar los detalles de la nota de crédito que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image133.png" alt="Campo"></p><p>Imagen 35. Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>No. Línea</strong>, el número de línea correspondiente al registro que se encuentra realizando en la pestaña <strong>Línea de la Factura</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image134.png" alt="Campo"></p><p>Imagen 36. Campo No Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Producto</strong>, el producto por el cual se encuentra aplicando la nota de crédito.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image135.png" alt="Campo"></p><p>Imagen 37. Campo Producto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo por el cual se encuentra aplicando la nota de crédito.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image136.png" alt="Campo"></p><p>Imagen 38. Campo Cargo de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image137.png" alt="Campo"></p><p>Imagen 39. Campo Descripción de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Cantidad</strong>, la cantidad correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image138.png" alt="Campo"></p><p>Imagen 40. Campo Cantidad de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>UM</strong>, la unidad de medida relacionada al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image139.png" alt="Campo"></p><p>Imagen 41. Campo UM de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Precio</strong>, el precio correspondiente a la nota de crédito que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image140.png" alt="Campo"></p><p>Imagen 42. Campo Precio de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Precio Actual</strong>, el precio actual ingresado en el campo <strong>Precio</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image141.png" alt="Campo"></p><p>Imagen 43. Campo Precio Actual de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Precio de Lista</strong>, el precio de lista oficial.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image142.png" alt="Campo"></p><p>Imagen 44. Campo Precio de Lista de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Impuesto</strong>, el tipo de impuesto a aplicar en el registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image143.png" alt="Campo"></p><p>Imagen 45. Campo Impuesto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Total Impuesto</strong>, el monto total del impuesto aplicado al documento que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image144.png" alt="Campo"></p><p>Imagen 46. Campo Total Impuesto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Factura Afectada</strong>, la factura afectada para asignar la nota automáticamente.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image145.png" alt="Campo"></p><p>Imagen 47. Campo Factura Afectada de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Actividad</strong>, la actividad correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image146.png" alt="Campo"></p><p>Imagen 48. Campo Actividad de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Centro de Costos</strong>, el centro de costos correspondiente al registro que se encuentra realizando.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image147.png" alt="Campo"></p><p>Imagen 49. Campo Centro de Costos de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Neto de Línea</strong>, el neto de la línea.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image148.png" alt="Campo"></p><p>Imagen 50. Campo Neto de Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Total de la Línea</strong>, el resultado de la sumatoria del valor en el campo <strong>Neto de Línea</strong> más el valor en el campo <strong>Total del Impuesto</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image149.png" alt="Campo"></p><p>Imagen 51. Campo Total de la Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña <strong>Línea de la Factura</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image150.png" alt="Campo"></p><p>Imagen 52. Icono Guardar Cambios de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione la pestaña principal <strong>Factura</strong> y ubique la opción <strong>Completar</strong>, en la parte inferior derecha de la ventana.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image151.png" alt="Campo"></p><p>Imagen 53. Pestaña Principal Factura de la Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Completar</strong>, para completar el documento <strong>Nota de Crédito de CxP</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image152.png" alt="Campo"></p><p>Imagen 54. Opción Completar de la Ventana Documentos por Pagar</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para culminar el proceso.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image153.png" alt="Campo"></p><p>Imagen 55. Acción Completar y Opción OK de la Ventana Documentos por Pagar</p><h2 id="consultar-asignacion-de-nota-de-credito-aplicada" tabindex="-1"><a class="header-anchor" href="#consultar-asignacion-de-nota-de-credito-aplicada" aria-hidden="true">#</a> Consultar Asignación de Nota de Crédito Aplicada</h2><p>Ubique el registro de la factura asociada a la nota de crédito, en este caso se ubica la factura <strong>1000108</strong> y posteriormente seleccione la pestaña <strong>Pagos Asignados</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image154.png" alt="Campo"></p><p>Imagen 56. Registro de la Factura Asociada a la Nota de Crédito de CxP</p><p>Haga clic contrario en el campo <strong>Asignación</strong> y seleccione la opción <strong>Acercar</strong> en el menú visualizado.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image155.png" alt="Campo"></p><p>Imagen 57. Acercar Asignación de Nota de Crédito de CxP</p><p>Podrá visualizar el registro de la asignación creada al completar el documento <strong>Nota de Crédito de CxP</strong>.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image156.png" alt="Campo"></p><p>Imagen 58. Registro de Asignación de Nota de Crédito de CxP</p><p>Seleccione la pestaña <strong>Asignaciones</strong>, para visualizar la información del monto de la nota de crédito aplicada a la factura.</p><p><img src="/assets/img/docs/purchase-management/gec-purchase-image157.png" alt="Campo"></p><p>Imagen 59. Pestaña Asignaciones de la Ventana Consulta de Asignación</p>',184)],c={},t=(0,o(13860).Z)(c,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,r)}]])},79426:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-5eecca98","path":"/docs/purchase%20management/credit-note.html","title":"Nota de Crédito","lang":"en-US","frontmatter":{"title":"Nota de Crédito","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Es un documento que se aplica a una factura con la finalidad de disminuir el monto de la misma, ya sea por concepto de algún tipo de descuento promocional o por devolución de produ","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/purchase%20management/credit-note.html"}],["meta",{"property":"og:title","content":"Nota de Crédito"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-14T14:19:11.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-14T14:19:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Registro de Nota de Crédito","slug":"registro-de-nota-de-credito","children":[]},{"level":2,"title":"Línea de la Factura","slug":"linea-de-la-factura","children":[]},{"level":2,"title":"Consultar Asignación de Nota de Crédito Aplicada","slug":"consultar-asignacion-de-nota-de-credito-aplicada","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1678803551000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":2}]},"readingTime":{"minutes":8.59,"words":2577},"filePathRelative":"docs/purchase management/credit-note.md","localizedDate":"March 9, 2023"}')}}]);