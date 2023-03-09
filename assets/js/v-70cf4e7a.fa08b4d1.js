"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4370],{19451:(a,e,n)=>{n.r(e),n.d(e,{default:()=>p});var o=n(78e3);const r=[(0,o.uE)("<p>El documento por cobrar a generar (Fiscal o no Fiscal) será emitido por concepto de cuota vencida, con los siguientes conceptos dependiendo del préstamo inicial solicitado(Producto Financiero) y su configuración (Vea Configuración de Producto Financiero (Préstamo)):</p><p>Préstamo con Interés Gravado:</p><p>Capital</p><p>Interés + IVA</p><p>Préstamo con Interés Exento:</p><p>Capital</p><p>Interés</p><p>Préstamo sin Interés:</p><p>Capital</p><p>Sin embargo existen casos en los cuales el solicitante retarda la cancelación de cuotas vencidas en estos casos ADempiere calcula intereses moratorios sobre la cuota vencida generando así una línea más en el documento.</p><p>Interpretando la Ventana Panel de Parámetros de Consulta de Amortización: En este panel dispone de los parámetros que serán de filtro para consultar las cuotas pendientes por Facturar.</p><p>Consulta de Amortización</p><p>Imagen 1. Consulta de Amortización</p><p>Panel de resultados Para Selección de Cuotas: En este panel seleccionará las cuotas pendientes por Facturar.</p><p>Para Selección de Cuotas</p><p>Imagen 2. Para Selección de Cuotas</p><p>Panel de Datos para Generar la Factura: En este panel indicará los datos para generar la factura.</p><p>Interpretando la Ventana</p><p>Imagen 3. Interpretando la Ventana</p><p>Generar Factura desde Préstamo Se creó un Smart Browser permitiendo al usuario seleccionar múltiples cuotas de un préstamo en específico y generar de manera eficiente y segura, agrupando varias cuotas en una factura, ó discriminando por cuota si el usuario así lo desea de esta forma será generada una factura por cuota.</p><p>Vaya a la ventana Generar Factura (Desde Préstamo) (Adjunto Imagen)</p><p>Menú de Factura</p><p>Imagen 4. Menú de Factura</p><p>A continuación se desplegará la siguiente ventana (Adjunto Imagen)</p><p>Generar Factura</p><p>Imagen 5. Generar Factura</p><p>Proceda a llenar los parámetros de Consulta de Cuotas necesarios para generar la factura:</p><p>Socio de Negocio: Es un parámetro obligatorio, filtrará los préstamos pendientes por cobrar con el Socio del Negocio indicado.</p><p>Acuerdo Financiero(Préstamo): Es un parámetro obligatorio, filtrará las cuotas pendientes por cobrar del Préstamos indicado.</p><p>Fecha Inicio: filtrará las cuotas pendientes por cobrar en el Rango de fecha indicada.</p><p>Fecha Final: filtrará las cuotas pendientes por cobrar en el Rango de fecha indicada.</p><p>Fecha de Vencimiento: filtrará las cuotas pendientes por cobrar en el Rango de fecha indicada.</p><p>Vencido: Si selecciona la opción SI, filtrará las cuotas vencidas, si selecciona la opción NO, filtrará las cuotas no vencidas.</p><p>Seleccione la opción comenzar búsqueda</p><p>Búsqueda</p><p>Imagen 6. Búsqueda</p><p>A continuación verá los siguientes resultados:</p><p>Comenzar Búsqueda</p><p>Imagen 7. Comenzar Búsqueda</p><p>Seleccione la cuota que desea facturar:</p><p>Resultado de Búsqueda</p><p>Imagen 8. Resultado de Búsqueda</p><p>Proceda a llenar los Datos para Generar la Factura.</p><p>Llenando Datos</p><p>Imagen 9. Llenando Datos</p><p>Tipo de Documento Destino: Seleccione el tipo de Documento con el que desea sea generada el Documento por Cobrar.</p><p>Fecha de Facturación: Indique la fecha en la cual será facturada la cuota.</p><p>Dividir Factura: Esta opción debe ser marcada si desea dividir las facturas por cuota, de lo contrario se generará una factura consolidada con las cuotas seleccionadas.</p><p>Acción de Documento: Indique la acción de documento con la cual desea generar la selección.</p><p>Datos para Facturar</p><p>Imagen 10. Datos para Facturar</p><p>Si desea generar la selección de pago seleccione la opción ok OK, caso contrario seleccione la opción cancelar cancelar</p><p>Si seleccionó la opción OK el sistema generará la(s) factura(s) de forma exitosa generando el siguiente mensaje indicando el número(s) de la(s) factura(s) generada.</p><p>Documentos Generados</p><p>Imagen 11. Documentos Generados</p><p>Consulta de Factura de Préstamo Existen dos posibles formas de consultar las facturas generadas asociadas a un préstamo, a continuación serán explicadas.</p><p>Ventanas en Documento por Cobrar</p><p>Vaya a la ventana Documento por Cobrar (Adjunto Imagen)</p><p>Factura</p><p>Imagen 12. Menú de Factura</p><p>A continuación se desplegará la siguiente ventana (Adjunto Imagen).</p><p>Ventana de Factura</p><p>Imagen 13. Ventana de Factura</p><p>Busque el registro desde la opción “Encontrar Registro” ubicada en la barra de herramientas.</p><p>Buscar Factura</p><p>Imagen 14. Buscar Factura</p><p>A continuación se desplegará el siguiente dialogo</p><p>Diálogo de Búsqueda</p><p>Imagen 15. Diálogo de Búsqueda</p><p>Ingrese el número de la selección generada en el proceso Generar Factura (Desde Préstamo)</p><p>Ventana de Préstamo:</p><p>Una vez en la ventana de Préstamo</p><p>Vaya a la opción “Visualiza Detalle(Donde es Usado)” ubicada en la barra de herramientas.</p><p>Referencias de Factura</p><p>Imagen 16. Referencias de Factura</p><p>A continuación se desplegará el siguiente dialogo</p><p>Lista de Referencias</p><p>Imagen 17. Lista de Referencias</p><p>Seleccione la opción “Documento por Cobrar de Cuota”</p><p>Lista de Referencias Seleccionadas</p><p>Imagen 18. Lista de Referencias Seleccionadas</p><p>Esta opción lo llevará automáticamente a los pagos asociados a este préstamo.</p><p>Contabilidad del Proceso ADempiere contabilizará el documento por cobrar dependiendo de la definición del producto financiero (Vea Configuración de Producto Financiero (Préstamo)), a continuación se detalla:</p><p>Capital: Contabilidad definida en el producto asociado en producto financiero.</p><p>Interés: Contabilidad definida en el cargo asociado en la tasa financiera relacionada en el producto financiero.</p><p>IVA: Contabilidad definida en la tasa de impuesto asociada en el cargo perteneciente a la tasa financiera relacionada en el producto financiero.</p><p>Cuenta</p><p>Débito Contabilizado</p><p>Crédito Contabilizado</p><p>12410 - Prestamos por Cobrar</p><p>0,00</p><p>1.522,36</p><p>12410 - Interés por Cobrar</p><p>0,00</p><p>316,48</p><p>22000 - IVA</p><p>0,00</p><p>69,6256</p><p>12110 - Cuentas por Cobrar Comerciales</p><p>1908,4656</p><p>0,00</p><p>Total</p><p>1908,4656</p><p>1908,4656</p>",104)],t={},p=(0,n(13860).Z)(t,[["render",function(a,e){return(0,o.wg)(),(0,o.iD)("div",null,r)}]])},75336:(a,e,n)=>{n.r(e),n.d(e,{data:()=>o});const o=JSON.parse('{"key":"v-70cf4e7a","path":"/docs/loan-management/generate-invoice.html","title":"Generar Factura desde Préstamo","lang":"en-US","frontmatter":{"title":"Generar Factura desde Préstamo","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"El documento por cobrar a generar (Fiscal o no Fiscal) será emitido por concepto de cuota vencida, con los siguientes conceptos dependiendo del préstamo inicial solicitado(Producto","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/loan-management/generate-invoice.html"}],["meta",{"property":"og:title","content":"Generar Factura desde Préstamo"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-09T17:57:56.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-09T17:57:56.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1678384676000,"updatedTime":1678384676000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":1}]},"readingTime":{"minutes":2.83,"words":850},"filePathRelative":"docs/loan-management/generate-invoice.md","localizedDate":"March 9, 2023"}')}}]);