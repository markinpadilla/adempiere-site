"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[993],{86602:(e,a,o)=>{o.r(a),o.d(a,{default:()=>c});var n=o(78e3);const p=[(0,n.uE)("<p>Una orden de venta es un documento elaborado para autorizar la venta de los productos y servicios que contiene, el mismo puede ser utilizado como pedido, pre factura o cotización. Desde una orden de venta se pueden generar entregas, guias y facturas.</p><p>El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en ADempiere una orden de venta, en su versión 3.9.2 para la localización Venezuela.</p><p>Registro de Orden de Venta Validación de Inventario en Orden de Venta Funcionalidad de la Validación</p><p>Registro de Orden de Venta Ubique y seleccione en el menú de ADempiere la carpeta “Gestión de Ventas”, luego seleccione la carpeta “Órdenes de Venta”, por último seleccione la ventana “Órdenes de Venta”.</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Seleccione el icono “Registro Nuevo” en la barra de herramientas de ADempiere, para realizar un nuevo documento.</p><p>Icono Registro Nuevo</p><p>Imagen 2. Icono Registro Nuevo</p><p>Seleccione en el campo “Organización”, la organización para la cual esta realizando el documento “Orden de Venta”.</p><p>Campo Organización</p><p>Imagen 3. Campo Organización</p><p>Seleccione el tipo de documento a generar en el campo “Tipo de Documento Destino”, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p>Campo Tipo de Documento</p><p>Imagen 4. Campo Tipo de Documento Destino</p><p>Seleccione en el campo “Fecha de la Orden”, la fecha en la que es ordenado por el cliente el producto o servicio.</p><p>Campo Fecha de la Orden</p><p>Imagen 5. Campo Fecha de la Orden</p><p>Seleccione en el campo “Fecha Prometida”, la fecha en la que es prometido el producto o servicio al cliente.</p><p>Campo Fecha Prometida</p><p>Imagen 6. Campo Fecha Prometida</p><p>Seleccione en el campo “Socio del Negocio”, el socio del negocio cliente al cual se le realizará la venta.</p><p>Campo Socio del Negocio</p><p>Imagen 7. Campo Socio del Negocio</p><p>Seleccione en el campo “Socio del Negocio a Facturar”, el socio del negocio a ser impreso en la factura.</p><p>Campo Socio del Negocio a Facturar</p><p>Imagen 8. Campo Socio del Negocio a Facturar</p><p>Seleccione en el campo “Dirección del Socio del Negocio”, la dirección de localización del socio del negocio.</p><p>Campo Dirección del Socio del Negocio</p><p>Imagen 9. Campo Dirección del Socio del Negocio</p><p>Seleccione en el campo “Dirección Factura”, la dirección a ser impresa en la factura para la entrega del producto o servicio.</p><p>Campo Dirección Factura</p><p>Imagen 10. Campo Dirección Factura</p><p>Seleccione en el campo “Usuario”, el usuario de contacto con el socio del negocio cliente al cual se le realizará la venta.</p><p>Campo Usuario</p><p>Imagen 11. Campo Usuario</p><p>Seleccione en el campo “Contacto Entrega Directa”, el usuario de contacto con el socio del negocio cliente al cual se le realizará la venta.</p><p>Campo Contacto Entrega Directa</p><p>Imagen 12. Campo Contacto Entrega Directa</p><p>Seleccione en el campo “Regla de Entrega”, la opción de cómo serán entregados los productos y servicios al socio del negocio cliente.</p><p>Campo Regla de Entrega</p><p>Imagen 13. Campo Regla de Entrega</p><p>Seleccione en el campo “Prioridad”, la prioridad que tiene la orden de venta que se esta realizando.</p><p>Campo Prioridad</p><p>Imagen 14. Campo Prioridad</p><p>Seleccione en el campo “Almacén”, el almacén donde se encuentra el producto o servicio que se va a vender.</p><p>Campo Almacén</p><p>Imagen 15. Campo Almacén</p><p>Seleccione el checklist “Entrega Directa”, para indicar que el documento será enviado del vendedor directamente al socio del negocio cliente.</p><p>Campo Entrega Directa</p><p>Imagen 16. Campo Entrega Directa</p><p>Seleccione en el campo “Vía de Entrega”, la opción de cómo serán entregados los productos y servicios al socio del negocio cliente.</p><p>Campo Vía de Entrega</p><p>Imagen 17. Campo Vía de Entrega</p><p>Seleccione en el campo “Regla de Costo de Flete”, la regla para cargar los costos del flete de los productos y servicios al socio del negocio cliente.</p><p>Campo Regla de Costo de Flete</p><p>Imagen 18. Campo Regla de Costo de Flete</p><p>Seleccione en el campo “Regla de Facturación”, la opción de cómo serán facturados los productos y servicios al socio del negocio cliente.</p><p>Campo Regla de Facturación</p><p>Imagen 19. Campo Regla de Facturación</p><p>Seleccione en el campo “Lista de Precios”, la lista de precios que será utilizada para la venta de los productos y servicios al socio del negocio cliente.</p><p>Campo Lista de Precios</p><p>Imagen 20. Campo Lista de Precios</p><p>Seleccione en el campo “Moneda”, la moneda que será utilizada para la venta de los productos y servicios al socio del negocio cliente.</p><p>Campo Moneda</p><p>Imagen 21. Campo Moneda</p><p>Seleccione en el campo “Agente Comercial”, el agente comercial o vendedor asignado a la región de ventas del socio del negocio cliente.</p><p>Campo Agente Comercial</p><p>Imagen 22. Campo Agente Comercial</p><p>Seleccione el checklist “Imprimir Descuento”, para imprimir el descuento en los documentos de orden de venta y factura.</p><p>Campo Imprimir Descuento</p><p>Imagen 23. Campo Imprimir Descuento</p><p>Seleccione en el campo “Término de Pago”, la opción de cómo serán pagados los productos y servicios por el socio del negocio cliente.</p><p>Campo Término de Pago</p><p>Imagen 24. Campo Término de Pago</p><p>Introduzca en el campo “Código de Promoción”, el código de promoción existente al momento de la venta.</p><p>Campo Código de Promoción</p><p>Imagen 25. Campo Código de Promoción</p><p>Seleccione en el campo “Tipo de Pago”, el tipo del pago de los documentos de orden de venta y factura.</p><p>Campo Tipo de Pago</p><p>Imagen 26. Campo Tipo de Pago</p><p>Seleccione en el campo “Centro de Costos”, el elemento definido para la combinación de cuentas.</p><p>Campo Centro de Costos</p><p>Imagen 27. Campo Cantro de Costos</p><p>Seleccione en el campo “Actividad”, la actividad del negocio utilizada para el costeo.</p><p>Campo Actividad</p><p>Imagen 28. Campo Actividad</p><p>Seleccione el icono “Guardar Cambios” en la barra de herramientas de ADempiere, para guardar el registro de la pestaña “Orden”.</p><p>Icono Guardar Cambios</p><p>Imagen 29. Icono Guardar</p><p>Seleccione la pestaña “Línea de la Orden” y proceda al llenado de los campos correspondientes.</p><p>Pestaña Línea de la Orden</p><p>Imagen 30. Pestaña Línea de la Orden</p><p>Seleccione en el campo “Producto”, el producto o servicio a vender al socio del negocio cliente.</p><p>Campo Producto</p><p>Imagen 31. Campo Producto</p><p>Introduzca en el campo “Descripción”, una breve descripción sobre el producto o servicio seleccionado para la venta.</p><p>Campo Descripción</p><p>Imagen 32. Campo Descripción</p><p>Seleccione en el campo “Cantidad”, la cantidad a vender del producto o servicio seleccionado.</p><p>Campo Cantidad</p><p>Imagen 33. Campo Cantidad</p><p>Seleccione en el campo “UM”, la unidad de medida a vender del producto o servicio seleccionado.</p><p>Campo UM</p><p>Imagen 34. Campo UM</p><p>Introduzca en el campo “Precio”, el precio por unidad de medida del producto o servicio seleccionado para la venta.</p><p>Campo Precio</p><p>Imagen 35. Campo Precio</p><p>Seleccione en el campo “Impuesto”, el impuesto a ser aplicado al producto o servicio seleccionado.</p><p>Campo Impuesto</p><p>Imagen 36. Campo Impuesto</p><p>Podrá apreciar en el campo “Neto de Línea”, el monto neto del producto por la cantidad ingresada.</p><p>Campo Neto de Línea</p><p>Imagen 37. Campo Neto de Línea</p><p>Regrese a la ventana principal “Orden” y seleccione la opción “Completar”.</p><p>Pestaña Principal Orden y Opción OK</p><p>Imagen 38. Opción Completar</p><p>Seleccione la acción “Completar” y la opción “OK”, para completar el documento.</p><p>Acción Completar y Opción OK</p><p>Imagen 39. Opción Completar</p><p>Validación de Inventario en Orden de Venta Para validar la disponibilidad de los productos en las ventas por medio de las órdenes de venta, ya sea desde la ventana “Órdenes de Venta” o desde el formulario “Punto de Venta”, ERPyA realizó una actualización en los tipos de documentos de órdenes de venta. Dicha actualización consta de un check que establece como regla principal la disponibilidad en almacén de los productos cargados a la orden.</p><p>check validar disponibilidad</p><p>Imagen 1. Check Validar Disponibilidad</p><p>Note</p><p>El check “Validar Disponibilidad”, en los tipos de documentos se encuentra deshabilitado por defecto, permitiendo que se complete el registro de la orden de venta desde la ventana “Órdenes de Venta” o desde el formulario “Punto de Venta”, sin validar que tengan disponibilidad en almacén los productos cargados a la orden de venta.</p><p>La validación se realiza en las órdenes de ventas por medio del check “Validar Disponibilidad”, que se encuentra en el tipo de documento utilizado para generar dicha orden. Para que la validación funcione se debe considerar lo siguiente:</p><p>El tipo de documento debe estar marcado como “Validar Disponibilidad”.</p><p>La línea de la orden de venta debe tener cantidades mayores a cero.</p><p>Sólo aplica para lineas de órdenes con productos asociados.</p><p>El registro del producto debe tener habilitado el check “Almacenado”.</p><p>El almacén utilizado para la validación es el que se encuentra en la linea de la orden de venta.</p><p>Note</p><p>Esta configuración no aplica para las Órdenes de Devolución</p><p>Funcionalidad de la Validación Cuando el check se encuentra habilitado, ADempiere sólo permitirá completar el registro de la orden de venta desde la ventana “Órdenes de Venta”, si todos los productos tienen disponibilidad en el almacén con el que se este trabajando. De no tener disponibilidad, será mostrado el siguiente mensaje:</p><p>registro desde ventana órdenes de venta</p><p>Imagen 2. Registro desde Ventana Órdenes de Venta</p><p>Note</p><p>Para crear una orden de venta desde la ventana “Órdenes de Venta”, puede consultar el material Registro de Orden de Venta.</p><p>De igual manera, al estar habilitado el check sólo será agregado el producto a la línea de la orden de venta desde el formulario “Punto de Venta”, si el producto seleccionado tiene disponibilidad en el almacén con el que se este trabajando. De no tener disponibilidad, será mostrado el siguiente mensaje:</p><p>registro desde formulario punto de venta</p><p>Imagen 3. Registro desde Formulario Punto de Venta</p><p>Note</p><p>Para crear una orden de venta desde el formulario “Punto de Venta”, puede consultar el material Toma de Pedido.</p>",143)],i={},c=(0,o(13860).Z)(i,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,p)}]])},70743:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-17fd36bb","path":"/docs/sales-management/order.html","title":"Orden de Venta","lang":"en-US","frontmatter":{"title":"Orden de Venta","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Una orden de venta es un documento elaborado para autorizar la venta de los productos y servicios que contiene, el mismo puede ser utilizado como pedido, pre factura o cotización. ","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/sales-management/order.html"}],["meta",{"property":"og:title","content":"Orden de Venta"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-08T22:34:47.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-08T22:34:47.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1678314887000,"updatedTime":1678314887000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":1}]},"readingTime":{"minutes":5.57,"words":1670},"filePathRelative":"docs/sales-management/order.md","localizedDate":"March 8, 2023"}')}}]);