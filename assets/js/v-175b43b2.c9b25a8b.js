"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8049],{44158:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});var r=n(78e3);const o=[(0,r.uE)('<p>El proceso de apertura de caja consta en realizar una transferencia bancaria desde un proceso específico del punto de venta. Permitiendo con ello, realizar un egreso de la caja administrativa del punto de venta y posteriormente, un ingreso a la caja en la cual serán realizadas las operaciones de venta. Dichos movimientos son reflejados en la ventana <strong>Caja</strong>, por medio de los documentos <strong>Pago Nacional</strong> y <strong>Cobro Nacional</strong>.</p><p>Este procedimiento crea un registro en la ventana <strong>Cierre de Caja</strong>, con la cuenta <strong>Caja Administrativa</strong>, desde la cual egresa el dinero. En la línea del mismo, se asocia el registro de <strong>Pago Nacional</strong>, generado en la ventana <strong>Caja</strong> por la apertura.</p><p>Adicional a ello, crea un registro en dicha ventana <strong>Cierre de Caja</strong>, con la cuenta <strong>Caja POS</strong>, a la cual ingresa el dinero. De igual manera, se asocia en la línea del registro, el <strong>Cobro Nacional</strong>, generado en <strong>Caja</strong> por la apertura.</p><p>Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso <strong>Apertura de Caja POS</strong>, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso.</p><p>Note</p><p>Recuerde que este proceso se debe realizar antes de iniciar las ventas del día. Adicional a ello, es un proceso necesario al momento del cierre de caja.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image125.png" alt="Campo"></p><p>Imagen 1. Diagrama de Apertura de Caja POS</p><p>Warning</p><p>No debe realizar el proceso de apertura de caja si no es entregado fisicamente el dinero en la respectiva caja. De lo contrario, los saldos de la caja en ADempiere no tendrán ninguna coincidencia con los saldos que existen fisicamente en la caja.</p><h2 id="ejecucion-del-proceso" tabindex="-1"><a class="header-anchor" href="#ejecucion-del-proceso" aria-hidden="true">#</a> Ejecución del Proceso</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Ventas</strong>, luego seleccione la carpeta <strong>Órdenes de Venta</strong>, por último seleccione la carpeta <strong>Punto de Venta</strong>. Para finalizar, seleccione el proceso <strong>Apertura de Punto de Venta</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image126.png" alt="Campo"></p><p>Imagen 2. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Apertura de Punto de Venta</strong>, con diferentes campos que permiten simular las transferencias monetarias entre las cuentas bancarias y cajas registradas en ADempiere.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image127.png" alt="Campo"></p><p>Imagen 3. Ventana Apertura de Punto de Venta</p><p>Realice en la ventana <strong>Apertura de Punto de Venta</strong>, el proceso regular para generar una transferencia bancaria, dicho procedimiento se encuentra explicado en el documento Registro de Transferencia Bancaria, elaborado por ERPyA.</p><p>Para la apertura de una caja, es necesario que sean cumplidas las siguientes restricciones en la ventana <strong>Apertura de Punto de Venta</strong>.</p><p>En el campo Terminal PDV, se encuentran los diferentes terminales configurados para los socios del negocio que cumplen con el rol de empleados de la organización. En este campo se debe seleccionar el terminal al cual se le realizará la apertura de la caja. Un ejemplo sería <strong>PDV Caja 01</strong>.</p><p>En el campo Caja**, se debe seleccionar la cuenta caja origen desde la cual se realizará la transferencia.</p><p>Si la transferencia a realizar es en bolivares, se debe seleccionar la cuenta caja <strong>Administración VES</strong>.</p><p>Si la transferencia a realizar es en dolares, se debe seleccionar la cuenta caja <strong>Administración USD</strong>.</p><p>Si la transferencia a realizar es en euros, se debe seleccionar la cuenta caja <strong>Administración EUR</strong>.</p><p>En el campo <strong>Caja a Transferir</strong>, se encuentra la cuenta caja destino seleccionada en el terminal PDV como cuenta bancaria a la cual se realizará la transferencia. El valor de este campo se carga de manera automática, al seleccionar el terminal de la caja en el campo <strong>Terminal PDV</strong>. En este caso, un ejemplo sería: <strong>Caja 01</strong>.</p><p>Note</p><p>Recuerde que el terminal a seleccionar en el campo <strong>Terminal PDV</strong>, debe ser el terminal correspondiente a la caja donde realizará las operaciones de ventas el socio del negocio empleado.</p><p>En el campo <strong>Socio del Negocio</strong>, se carga de manera automática el socio del negocio empleado que realizará las operaciones en la caja indicada en el campo <strong>Caja a Transferir</strong>, previamente configurado en el terminal seleccionado en el campo <strong>Terminal PDV</strong>. En este caso, un ejemplo sería: <strong>Vendedor</strong>.</p><p>En el campo <strong>Tipo de Conversión</strong>, se carga de manera automática el tipo de conversión establecido en el terminal de la caja.</p><p>En el campo <strong>Moneda</strong>, se debe seleccionar la moneda a ser utilizada en la transferencia del dinero. En este caso, un ejemplo sería: <strong>USD</strong></p><p>Note</p><p>Se debe realizar una transferencia por moneda, cuando se necesite aperturar la caja con más de una moneda.</p><p>En el campo <strong>Cargo</strong>, se debe seleccionar el cargo <strong>Efectivo en Tránsito Administración</strong>.</p><p>En el campo <strong>No. del Documento</strong>, se debe ingresar el número de documento con el cual será generado el egreso monetario por el proceso que esta registrando. En este caso, un ejemplo sería: <strong>Egreso-Apertura10/02/2021</strong>.</p><p>En el campo <strong>Documento Destino</strong>, se debe ingresar el número de documento con el cual será generado el ingreso monetario por el proceso que esta registrando. En este caso, un ejemplo sería: <strong>Ingreso-Apertura10/02/2021</strong>.</p><p>En el campo <strong>Monto</strong>, se debe ingresar el monto total de la transferencia en la moneda seleccionada. En este caso, un ejemplo sería: **100,00.</p><p>En el campo <strong>Descripción</strong>, se debe ingresar una descripción breve que explique de forma puntual la transferencia. En este caso, un ejemplo sería: <strong>Apertura de Caja 1 del 10/02/2021 por 100 USD</strong>.</p><p>En el campo <strong>Fecha de Estado de Cuenta</strong>, ADempiere establece la fecha en la que se esta realizando la transacción. Esta indica la fecha en la cual será generado el estado de cuenta que se encuentra procesando.</p><p>En el campo <strong>Fecha Contable</strong>, ADempiere establece la fecha en la que se esta realizando la transacción. Esta indica la fecha a ser usada en las cuentas de contabilidad general generadas desde este proceso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image128.png" alt="Campo"></p><p>Imagen 4. Transferencia Bancaria de Apertura de Caja</p><p>Note</p><p>Recuerde seleccionar la opción <strong>OK</strong>, ubicada en la parte inferior de la ventana <strong>Transferencia Bancaria</strong>, para completar el proceso y simular en ADempiere el movimiento monetario realizado.</p><h2 id="consultar-egreso-e-ingreso-generado-de-la-apertura-de-punto-de-venta" tabindex="-1"><a class="header-anchor" href="#consultar-egreso-e-ingreso-generado-de-la-apertura-de-punto-de-venta" aria-hidden="true">#</a> Consultar Egreso e Ingreso Generado de la Apertura de Punto de Venta</h2><p>Al buscar entre los registros de la ventana <strong>Caja</strong>, los valores ingresados en los campos <strong>No. del Documento</strong> y <strong>Documento Destino</strong>, de la ventana <strong>Apertura de Punto de Venta</strong>, se pueden visualizar dos (2) registros resultantes de la transferencia bancaria, entre ellos se encuentran.</p><p>El egreso generado en la cuenta <strong>Caja Administrativa</strong> como pago nacional, con toda la información suministrada en el proceso ejecutado en la ventana <strong>Apertura de Punto de Venta</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image129.png" alt="Campo"></p><p>Imagen 5. Egreso Generado de la Transferencia Bancaria de Apertura de Caja</p><p>El ingreso generado en la cuenta <strong>Caja 04</strong> como cobro nacional, con toda la información suministrada en el proceso ejecutado en la ventana <strong>Apertura de Punto de Venta</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image130.png" alt="Campo"></p><p>Imagen 6. Ingreso Generado de la Transferencia Bancaria de Apertura de Caja</p><h2 id="consultar-registros-creados-en-la-ventana-cierre-de-caja" tabindex="-1"><a class="header-anchor" href="#consultar-registros-creados-en-la-ventana-cierre-de-caja" aria-hidden="true">#</a> Consultar Registros Creados en la Ventana Cierre de Caja</h2><p>Al realizar una apertura de caja se crean dos registros en estado <strong>Borrador</strong>, en la ventana <strong>Cierre de Caja</strong>, uno para cada caja involucrada en el proceso ejecutado en la ventana <strong>Apertura de Punto de Venta</strong>.</p><h2 id="caja-administracion-pos" tabindex="-1"><a class="header-anchor" href="#caja-administracion-pos" aria-hidden="true">#</a> Caja Administración POS</h2><p>El registro con la cuenta <strong>Caja Administración POS</strong>, se crea automáticamente con las siguientes restricciones:</p><p>Cuenta: La cuenta <strong>Caja Administración Ventas - –_Administración POS</strong>, previamente seleccionada en el campo <strong>Caja</strong> de la ventana <strong>Apertura de Punto de Venta</strong>.</p><p>Nombre: La descripción <strong>Apertura de Caja 1 del 10/02/2021 por 100 USD</strong>, previamente ingresada en el campo <strong>Descripción</strong> de la ventana <strong>Apertura de Punto de Venta</strong>.</p><p>Fecha del Registro: La fecha <strong>10/02/2021</strong>, en la cual fue ejecutado el proceso de apertura desde la ventana <strong>Apertura de Punto de Venta</strong>.</p><p>Saldo Inicial: El saldo <strong>0,00</strong>, con el que inicia la caja.</p><p>Diferencia Edo. De Cuenta: El monto de <strong>-193.349.343,00</strong>, de diferencia entre el saldo final del estado de cuentas y el saldo final actual.</p><p>Saldo Final: El monto de <strong>-193.349.343,00</strong>, correspondiente al saldo final o al cierre. El saldo final es el resultado de ajustar el saldo inicial por cualquier pago o desembolso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image131.png" alt="Campo"></p><p>Imagen 7. Registro del Cierre de Caja Administración POS</p><p>El mismo contiene en la pestaña <strong>Línea de Cierre de Caja</strong>, el registro del egreso por la apertura de caja realizada y contiene asociado el documento de egreso generado en la ventana <strong>Caja</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image132.png" alt="Campo"></p><p>Imagen 8. Pestaña Línea de Cierre de Caja Administración POS</p><h2 id="caja-01" tabindex="-1"><a class="header-anchor" href="#caja-01" aria-hidden="true">#</a> Caja 01</h2><p>El registro con la cuenta <strong>Caja 01</strong>, se crea automáticamente con las siguientes restricciones:</p><p>Cuenta: La cuenta <strong>Caja POS - –_Caja PDV 01</strong>, previamente seleccionada en el campo <strong>Caja a Transferir</strong> de la ventana <strong>Apertura de Punto de Venta</strong>.</p><p>Nombre: La descripción <strong>Apertura de Caja 1 del 10/02/2021 por 100 USD</strong>, previamente ingresada en el campo <strong>Descripción</strong> de la ventana <strong>Apertura de Punto de Venta</strong>.</p><p>Fecha del Registro: La fecha <strong>01/09/2020</strong>, en la cual fue ejecutado el proceso de apertura desde la ventana <strong>Apertura de Punto de Venta</strong>.</p><p>Saldo Inicial: El saldo <strong>0,00</strong>, con el que inicia la caja.</p><p>Diferencia Edo. De Cuenta: El monto de <strong>193.349.343,00</strong>, de diferencia entre el saldo final del estado de cuentas y el saldo final actual.</p><p>Saldo Final: El monto de <strong>193.349.343,00</strong>, correspondiente al saldo final o al cierre. El saldo final es el resultado de ajustar el saldo inicial por cualquier pago o desembolso.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image133.png" alt="Campo"></p><p>Imagen 9. Registro del Cierre de Caja 01</p><p>El mismo contiene en la pestaña <strong>Línea de Cierre de Caja</strong>, el registro del ingreso por la apertura de caja realizada y contiene asociado el documento de ingreso generado en la ventana <strong>Caja</strong>.</p><p><img src="/assets/img/docs/pdv-management/gep-pdv-image134.png" alt="Campo"></p><p>Imagen 10. Pestaña Línea de Cierre de Caja 01</p>',79)],t={},s=(0,n(13860).Z)(t,[["render",function(e,a){return(0,r.wg)(),(0,r.iD)("div",null,o)}]])},12554:(e,a,n)=>{n.r(a),n.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-175b43b2","path":"/docs/pdv-management/opening.html","title":"Apertura de Caja","lang":"en-US","frontmatter":{"title":"Apertura de Caja","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"El proceso de apertura de caja consta en realizar una transferencia bancaria desde un proceso específico del punto de venta. Permitiendo con ello, realizar un egreso de la caja adm","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/pdv-management/opening.html"}],["meta",{"property":"og:title","content":"Apertura de Caja"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-14T15:20:38.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-14T15:20:38.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Ejecución del Proceso","slug":"ejecucion-del-proceso","children":[]},{"level":2,"title":"Consultar Egreso e Ingreso Generado de la Apertura de Punto de Venta","slug":"consultar-egreso-e-ingreso-generado-de-la-apertura-de-punto-de-venta","children":[]},{"level":2,"title":"Consultar Registros Creados en la Ventana Cierre de Caja","slug":"consultar-registros-creados-en-la-ventana-cierre-de-caja","children":[]},{"level":2,"title":"Caja Administración POS","slug":"caja-administracion-pos","children":[]},{"level":2,"title":"Caja 01","slug":"caja-01","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1678807238000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":3}]},"readingTime":{"minutes":5.76,"words":1728},"filePathRelative":"docs/pdv-management/opening.md","localizedDate":"March 9, 2023"}')}}]);