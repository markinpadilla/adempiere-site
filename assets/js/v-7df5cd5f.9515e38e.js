"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2284],{31053:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var o=n(78e3);const r=[(0,o.uE)("<p>El proceso de <strong>Copiar Orden Desde Otra</strong>, pemite realizar una copia exacta de una orden determinada, repestando los precios que tienen los productos en la misma, así como la tasa de cambio con la que fue generada.</p><p>Para explicar de manera detallada el procedimiento y la funcionalidad del proceso se presenta el siguiente escenario:</p><p>En una determinada tienda se realiza una venta el día <strong>04/08/2021</strong>. Fecha en la cual se encuentra la tasa de cambio del <strong>BCV-ABC Estándar C.A</strong> en <strong>1.933.493,43</strong>.</p><p>tasa de cambio del bcv del día 04</p><p>Imagen 1. Tasa de Cambio del BCV-ABC Estándar C.A del día 04/08/2021</p><p>Transacción de la cual se obtiene como resultado la siguiente factura impresa:</p><p>SENIAT</p><p>RIF/C.I.: V00000000</p><p>RAZON SOCIAL: Cliente Unico</p><p>Araure - Portuguesa</p><p>Orden OPOS-857</p><p>Empleado Vendedor</p><p>FACTURA</p><p>FACTURA:</p><p>00000654</p><p>FECHA: 21-12-2020</p><p>HORA: 11:59</p><p>1908</p><p>PICO PARA AIRE LARGO TRUPER</p><p>(G)</p><p>Bs 8.068.152.07</p><p>SUBTTL</p><p>Bs 8.068.152.07</p><p>BI G16.00% Bs 8.068.152.07</p><p>IVA G16.00%</p><p>Bs 1.290.904.33</p><p>TOTAL</p><p>Bs 9.359.056.40</p><p>EFECTIVO 1</p><p>Bs 9.359.056.40</p><p>Cant. Articulos: 1</p><p>Empleado Vendedor</p><p>Terminal PDV Caja 01 Vendedor</p><p>MH</p><p>Z7C0001234</p><p>Un registro de orden de compra puede ser copiado cuando el mismo se encuentre en estado <strong>Completo</strong>. La unica condición que tiene el proceso para su ejecución, es que el registro de la orden que requiere copiar, no se encuentre en estado <strong>Cerrado</strong>. Si la orden a copiar se encuentra en estado <strong>Cerrado</strong>, el proceso no se ejecuta.</p><p>Para continuar con el ejemplo planteado anteriormente en el presente documento, se tiene lo siguiente:</p><p>El día <strong>06/08/2021</strong>, se presenta el cliente de la factura <strong>00000654</strong>, asociada a la orden <strong>OPOS-857</strong>, realizando la devolución del producto <strong>PICO PARA AIRE LARGO TRUPER</strong>. Dicho cliente indica que requiere que el mismo sea cambiado porque se encuentra dañado.</p><p>tasa de cambio del bcv del día 06</p><p>Imagen 2. Tasa de Cambio del BCV-ABC Estándar C.A del día 06/08/2021</p><p>Antes de ejecutar el proceso Anular Transacción de Venta, se requiere copiar el registro de la orden <strong>OPOS-857</strong>, generada el día <strong>04/08/2021</strong>, con la tasa de cambio <strong>1.933.493,43</strong> del <strong>BCV-ABC Estándar C.A</strong>, para mantener los valores de la misma.</p><p>Note</p><p>Mayormente las órdenes son copiadas desde el punto de venta para mantener la tasa de cambio de la misma y generar una orden con fecha actual, en la cual se mantengan los mismos precios. Este proceso se debe utilizar cuando se va a generar una nota de crédito desde el punto de venta, ya que permite crear una orden bajo la misma tasa de cambio.</p><p>Para copiar una orden de venta desde el punto de venta, se debe realizar el siguiente procedimiento:</p><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Órdenes de Venta</strong>, por último seleccione la carpeta <strong>Punto de Venta</strong>. Para finalizar, seleccione la ventana <strong>Punto de Venta</strong>.</p><p>Menú de ADempiere</p><p>Imagen 3. Menú de ADempiere</p><p>La interfaz de la ventana <strong>Punto de Venta</strong>, se encuentra definida de forma específica en el documento Interfaz de Punto de Venta, elaborado por ERPyA.</p><p>Realice la búsqueda de registros de órdenes de venta generadas desde el punto de venta, seleccionando el icono <strong>Registros Históricos</strong> de la barra de herramientas de la ventana <strong>Punto de Venta</strong>, dicho proceso se encuentra explicado en el documento Barra de Herramientas del Punto de Venta, elaborado por ERPyA.</p><p>Seleccione en la ventana <strong>Orden de Venta</strong>, generada del icono <strong>Registros Históricos</strong>, la orden de venta que requiere copiar.</p><p>selección de orden de venta a copiar</p><p>Imagen 4. Selección de Orden de Venta a Copiar</p><p>Por último, seleccione la opción <strong>OK</strong> para ubicar en la ventana <strong>Punto de Venta</strong>, el registro de la orden de venta realizada desde el punto de venta.</p><p>selección de la opción ok de la orden de venta a copiar</p><p>Imagen 5. Selección de la Opción OK de la Orden de Venta a Copiar</p><p>Podrá visualizar que el registro de la orden de venta ubicada se encuentra en estado <strong>Completo</strong>.</p><p>orden ubicada en estado completo</p><p>Imagen 6. Orden de Venta en Estado Completo</p><p>Warning</p><p>Es importante resaltar que cuando se presenta una devolución, la orden debe ser copiada antes de ejecutar el proceso de devolución ya que al generarse la nota de crédito, la orden pasa de estado <strong>Completo</strong> a estado <strong>Cerrado</strong>.</p><p>Seleccione la opción <strong>Copiar Orden Desde Otra</strong>, ubicada en el menú desplegado por el icono <strong>Proceso</strong> de la barra de herramientas de la ventana <strong>Punto de Venta</strong>, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por ERPyA.</p><p>opción copiar orden desde otra</p><p>Imagen 7. Opción Copiar Orden Desde Otra</p><p>Note</p><p>En el caso de que el terminal del punto de venta con el cual se encuentra trabajando, este configurado para que requiera PIN al momento de ejecutar ciertas transacciones, se mostrará la ventana <strong>PIN de Usuario</strong> luego de seleccionar la opción <strong>Copiar Orden Desde Otra</strong>. En dicha ventana se debe ingresar el PIN del usuario establecido como supervisor en el terminal y finalmente seleccionar la opción <strong>OK</strong> para ejecutar el proceso.</p><p>Para el presente ejemplo, el terminal con el cual se esta realizando la transacción, no se encuentra configurado para que solicite el PIN.</p><p>Al seleccionar la opción <strong>Copiar Orden Desde Otra</strong>, se ejecuta el proceso de manera automática y podrá visualizar en la ventana <strong>Punto de Venta</strong>, el nuevo registro de la orden de venta en estado <strong>Borrador</strong> y con fecha actual <strong>06/08/2021</strong>.</p><p>nueva orden de venta del proceso copiar orden desde otra</p><p>Image 8. Nueva Orden Creada con el Proceso Copiar Orden Desde Otra</p><p>Adicionalmente, puede visualizar que la orden contiene todos los productos y precios de la orden copiada.</p><p>productos y precios de la nueva orden</p><p>Imagen 9. Productos y Precios de la Nueva Orden</p>",72)],t={},d=(0,n(13860).Z)(t,[["render",function(e,a){return(0,o.wg)(),(0,o.iD)("div",null,r)}]])},39674:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-7df5cd5f","path":"/docs/pdv-management/order-copy.html","title":"Copiar Orden Desde Otra","lang":"en-US","frontmatter":{"title":"Copiar Orden Desde Otra","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"El proceso de Copiar Orden Desde Otra, pemite realizar una copia exacta de una orden determinada, repestando los precios que tienen los productos en la misma, así como la tasa de c","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/pdv-management/order-copy.html"}],["meta",{"property":"og:title","content":"Copiar Orden Desde Otra"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-14T14:19:11.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-14T14:19:11.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1678384676000,"updatedTime":1678803551000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":2}]},"readingTime":{"minutes":3.32,"words":996},"filePathRelative":"docs/pdv-management/order-copy.md","localizedDate":"March 9, 2023"}')}}]);