"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1191],{87716:(e,a,o)=>{o.r(a),o.d(a,{default:()=>t});var n=o(78e3);const l=[(0,n.uE)("<p>El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de gestionar los costos en la versión 3.9.2 de ADempiere en la localización Venezuela.</p><p>Costos de Material Costos Adicionales Documentos por Pagar Consultar Costos Adicionales Reportes de Costos Consulta de Costo del Producto Informe de Costos del Producto Reporte de Costo del Producto Valoración de Inventario a Fecha Efectiva Valoración de Inventario Detalle de Costos del Producto Detalle de la Transacción del Costo</p><p>Costos de Material Para explicar el proceso de registro automático de costo de un producto y que el usuario pueda entender el mismo, es ubicado un producto sin relación con alguna transacción en ADempiere. Para este caso, es ubicado el producto “Estandar”, con código “DOIS-000001”.</p><p>Ventana Producto</p><p>Imagen 1. Ventana Producto</p><p>Seleccione la pestaña “Costo” para verificar si el mismo posee algún registro, es decir, si ha sido utilizado en alguna transacción en ADempiere.</p><p>Pestaña Costo</p><p>Imagen 2. Pestaña Costo</p><p>Luego se procede a realizar y completar una “Orden de Compra”, utilizando el producto anteriormente mostrado.</p><p>Ventana Orden de Compra</p><p>Imagen 3. Ventana Orden de Compra</p><p>Podrá visualizar en la pestaña “Línea Orden de Compra”, el producto, la cantidad y el precio ingresado.</p><p>Pestaña Línea de la Orden de Compra</p><p>Imagen 4. Pestaña Línea de la Orden de Compra</p><p>Para finalizar el proceso es realizada una “Recepción”, la misma es creada desde la orden de compra realizada anteriormente.</p><p>Recepción de Producto</p><p>Imagen 5. Recepción de Producto</p><p>En la pestaña “Línea del Recibo”, puede visualizar el producto y la cantidad recepcionada.</p><p>Pestaña Línea del Recibo</p><p>Imagen 6. Pestaña Línea del Recibo</p><p>Puede consultar el resultado del proceso realizado anteriormente, ubicando el producto “Estandar”, con código “DOIS-000001” utilizado en el ejemplo expuesto.</p><p>Ventana Producto</p><p>Imagen 7. Ventana Producto</p><p>Como resultado del proceso realizado, se tienen dos (2) registros de tipos de costo en la pestaña “Costos” de la ventana “Producto”:</p><p>Tipo de Costo Estándar</p><p>Tipo de Costo Estándar</p><p>Imagen 8. Tipo de Costo Estándar</p><p>Tipo de Costo Facturación Promedio</p><p>Tipo de Costo Facturación Promedio</p><p>Imagen 9. Tipo de Costo Facturación Promedio</p><p>Costos Adicionales El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar costos adicionales a los productos en la versión 3.9.2 de ADempiere en la localización Venezuela.</p><p>Las empresas realizan un estudio sobre el costo de producción de un producto determinado con la finalidad de establecer el precio de venta en base a los resultados obtenidos. Con esto se quiere decir que según el método empleado por la empresa, se toma en cuenta el costo de la materia prima, el costo de la producción, impresión, empaque, flete y cualquier otro servicio o producto necesario para lograr un producto final, para obtener el precio de venta del producto acorde a los costos que implica la producción del mismo.</p><p>El proceso de costos adicionales de un producto, es realizado desde la ventana “Documentos por Pagar”. Al generar una factura por un servicio o producto aplicada a otro producto, se incrementa el costo del mismo para la venta según las tipologías empleadas por la empresa.</p><p>Un producto puede tener costos adicionales por flete, servicios de impresión, entre otros casos que son calculados según la tipología empleada por la empresa. Para ejemplificar la definición anterior, se explica el costo adicional que puede tener un producto por flete.</p><p>Documentos por Pagar Ubique y seleccione en el menú de ADempiere, la carpeta “Gestión de Compras”, luego seleccione la ventana “Documentos por Pagar”.</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Realice el procedimiento regular para generar una factura de cuentas por pagar, definido en el material Registro de Documento por Pagar de la versión 3.9.2 de ADempiere en la localización Venezuela.</p><p>Factura por Pagar</p><p>Imagen 2. Factura por Pagar</p><p>Note</p><p>Es necesario que el documento por pagar no se encuentre en estado completo, de esta manera se pueden aplicar los costos adicionales a los productos.</p><p>Seleccione la pestaña “Costos Adicionales” y proceda al llenado de los campos correspondientes.</p><p>Pestaña Costos Adicionales</p><p>Imagen 3. Pestaña Costos Adicionales</p><p>Podrá apreciar en el campo “Distribución de Costo”, que por defecto se encuentra seleccionada la opción “Cantidad”.</p><p>Campo Distribución de Costo</p><p>Imagen 4. Campo Distribución de Costo</p><p>Note</p><p>Este campo permite establecer con que tipología sera realizada la distribución de costos. ADempiere utiliza cinco (5) tipologías para aplicar la distribución de costo a un producto.</p><p>Cantidad.</p><p>Costos.</p><p>Línea.</p><p>Peso.</p><p>Volumen.</p><p>Seleccione en el campo “Elemento de Costo”, el costo a aplicar al producto. Para ejemplificar el registro es utilizada la opción “Costos de Traslado”.</p><p>Campo Elemento de Costo</p><p>Imagen 5. Campo Elemento de Costo</p><p>Seleccione en el campo “Entrega/Recibo”, el documento de recepción del producto al cual será aplicado el costo adicional.</p><p>Campo Entrega/Recibo</p><p>Imagen 6. Campo Entrega/Recibo</p><p>Note</p><p>Este campo define el producto recepcionado al cual se le aplicará la distribución de costo según la tipología seleccionada anteriormente.</p><p>Si el documento de recepción posee solo una línea de entrega/recibo, no es necesario seleccionar la línea en el campo “Línea entrega/recibo”.</p><p>Si el documento de recepción posee más de una línea de entrega/recibo, es necesario seleccionar en el campo “Línea entrega/recibo”, una línea por registro de la pestaña “Costos Adicionales”.</p><p>Seleccione la opción “Distribución de Costos”, para aplicar el costo adicional al producto de la recepción.</p><p>Opción Distribución de Costos</p><p>Imagen 7. Distribución de Costos</p><p>Note</p><p>Según la tipología seleccionada anteriormente, ADempiere realiza la distribución de costos de la siguiente manera:</p><p>Cantidad, realiza la distribución dividiendo el costo de la factura entre la cantidad del producto recepcionado.</p><p>Costos, realiza la distribución porcentualmente al costo del producto.</p><p>Línea, realiza la distribución dividiendo el costo de la factura entre el número de líneas que tenga la factura.</p><p>Peso, realiza la distribución porcentualmente al peso del producto.</p><p>Volumen, realiza la distribución porcentualmente al volumen del producto.</p><p>Podrá visualizar la ventana “Distribución de Costos”, donde debe seleccionar la opción “OK” para aplicar el costo adicional al producto.</p><p>Ventana Distribución de Costos</p><p>Imagen 8. Ventana Distribución de Costos</p><p>Regrese a la ventana principal “Factura” y seleccione la opción “Completar”, ubicada en la parte inferior derecha del documento.</p><p>Opción Completar</p><p>Imagen 9. Opción Completar</p><p>Seleccione la acción “Completar” y la opción “OK”, para completar el documento por pagar.</p><p>Acción Completar</p><p>Imagen 10. Opción Completar</p><p>Consultar Costos Adicionales Ubique en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Gestión de Costos”, por último seleccione el reporte “Detalle Costo del Producto”.</p><p>Menú de ADempiere 2</p><p>Imagen 11. Menú de ADempiere</p><p>Podrá visualizar el reporte “Detalle Costo del Producto” de la siguiente manera.</p><p>Pestaña Costo</p><p>Imagen 12. Pestaña Costo</p><p>Reportes de Costos El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de gestionar los reportes de costos en la versión 3.9.2 de ADempiere en la localización Venezuela.</p><p>Consulta de Costo del Producto Informe de Costos del Producto Reporte de Costo del Producto Valoración de Inventario a Fecha Efectiva Valoración de Inventario Detalle de Costos del Producto Detalle de la Transacción del Costo</p><p>Consulta de Costo del Producto Ubique y seleccione en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Gestión de Costos”, por último seleccione la ventana “Costos del Producto”.</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana “Encontrar Registro: Selección de Producto”, con campos que permiten filtrar la búsqueda del producto.</p><p>Ventana Encontrar Registro Selección de Producto</p><p>Imagen 2. Ventana Encontrar Registro Selección de Producto</p><p>Introduzca en el campo “Código”, el código del producto por el cual requiere filtrar la búsqueda del producto.</p><p>Campo Código de la Ventana Encontrar Registro Selección de Producto</p><p>Imagen 3. Campo Código de la Ventana Encontrar Registro Selección de Producto</p><p>Introduzca en el campo “Nombre”, el nombre del producto por el cual requiere filtrar la búsqueda del producto.</p><p>Campo Nombre de la Ventana Encontrar Registro Selección de Producto</p><p>Imagen 4. Campo Nombre de la Ventana Encontrar Registro Selección de Producto</p><p>Introduzca en el campo “Descripción”, la descripción del producto por el cual requiere filtrar la búsqueda del producto.</p><p>Campo Descripción de la Ventana Encontrar Registro Selección de Producto</p><p>Imagen 5. Campo Descripción de la Ventana Encontrar Registro Selección de Producto</p><p>Luego de ingresar lo requerido en los campos por los cuales desea filtrar la búsqueda del producto, seleccione la opción “OK”, para realizar la búsqueda.</p><p>Opción OK de la Ventana Encontrar Registro Selección de Producto</p><p>Imagen 6. Opción OK de la Ventana Encontrar Registro Selección de Producto</p><p>Podrá visualizar la ventana “Costos del Producto”, con el registro buscado del producto y su información principal.</p><p>Ventana Costos del Producto</p><p>Imagen 7. Ventana Costos del Producto</p><p>Seleccione la pestaña “Costo del Producto”, para visualizar los registros de costos del producto según el tipo de costo configurado en ADempiere.</p><p>Pestaña Costo del Producto de la Ventana Costos del Producto</p><p>Imagen 8. Pestaña Costo del Producto de la Ventana Costos del Producto</p><p>Seleccione la pestaña “Detalle de Costo”, para visualizar de manera detallada los registros del costo del producto según el tipo de costo configurado en ADempiere.</p><p>Pestaña Detalle de Costo de la Ventana Costos del Producto</p><p>Imagen 9. Pestaña Detalle de Costo de la Ventana Costos del Producto</p><p>Informe de Costos del Producto Ubique y seleccione en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Gestión de Costos”, por último seleccione el reporte “Informe de Costo del Producto”.</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana del reporte para generar el “Informe de Costo del Producto”, con diferentes campos que le permiten al usuario filtrar la búsqueda de información para generar el informe de acuerdo a lo requerido por el mismo.</p><p>Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Imagen 2. Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Seleccione en el campo “Esquema Contable”, el esquema contable por el cual requiere filtrar la búsqueda de información.</p><p>Campo Esquema Contable de la Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Imagen 3. Campo Esquema Contable de la Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Seleccione en el campo “Categoría del Producto”, la categoría del producto por el cual requiere filtrar la búsqueda de información.</p><p>Campo Categoría del Producto de la Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Imagen 4. Campo Categoría del Producto de la Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Introduzca en el campo “Código”, el código por el cual requiere filtrar la búsqueda de información.</p><p>Campo Código de la Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Imagen 5. Campo Código de la Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Seleccione la opción “OK”, para generar el informe en base a lo seleccionado en los campos de la ventana “Informe de Costo del Producto”.</p><p>Opción OK de la Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Imagen 6. Opción OK de la Ventana del Reporte para Generar el Informe de Costo del Producto</p><p>Reporte de Costo del Producto Ubique y seleccione en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Gestión de Costos”, por último seleccione la ventana “Costo del Producto”.</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana del reporte “Costo del Producto”, con diferentes campos que le permiten al usuario filtrar la búsqueda de la información y generar el reporte en base a lo seleccionado en dichos campos.</p><p>Ventana del Reporte Costo del Producto</p><p>Imagen 2. Ventana del Reporte Costo del Producto</p><p>Seleccione en el campo “Esquema Contable”, el esquema contable por el cual requiere filtrar la búsqueda de información.</p><p>Campo Esquema Contable de la Ventana del Reporte Costo del Producto</p><p>Imagen 3. Campo Esquema Contable de la Ventana del Reporte Costo del Producto</p><p>Seleccione en el campo “Tipo de Costo”, el tipo de costo por el cual requiere filtrar la búsqueda de información.</p><p>Campo Tipo de Costo de la Ventana del Reporte Costo del Producto</p><p>Imagen 4. Campo Tipo de Costo de la Ventana del Reporte Costo del Producto</p><p>Seleccione en el campo “Categoría del Producto”, la categoría el producto por la cual requiere filtrar la búsqueda de información.</p><p>Campo Categoría del Producto de la Ventana del Reporte Costo del Producto</p><p>Imagen 5. Campo Categoría del Producto de la Ventana del Reporte Costo del Producto</p><p>Seleccione en el campo “Producto”, el producto por el cual requiere filtrar la búsqueda de información.</p><p>Campo Producto de la Ventana del Reporte Costo del Producto</p><p>Imagen 6. Campo Producto de la Ventana del Reporte Costo del Producto</p><p>Introduzca en el campo “Código”, el código por el cual requiere filtrar la búsqueda de información.</p><p>Campo Código de la Ventana del Reporte Costo del Producto</p><p>Imagen 7. Campo Código de la Ventana del Reporte Costo del Producto</p><p>Seleccione en el campo “Elemento de Costo”, el elemento de costo por el cual requiere filtrar la búsqueda de información.</p><p>Campo Elemento de Costo de la Ventana del Reporte Costo del Producto</p><p>Imagen 8. Campo Elemento de Costo de la Ventana del Reporte Costo del Producto</p><p>Seleccione la opción “OK”, para generar el reporte de costo del producto en base a lo seleccionado en los campos anteriormente explicados.</p><p>Opción OK de la Ventana del Reporte Costo del Producto</p><p>Imagen 9. Opción OK de la Ventana del Reporte Costo del Producto</p><p>Valoración de Inventario a Fecha Efectiva Ubique y seleccione en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Gestión de Costos”, por último seleccione el reporte “Valoración de Inventario a Fecha Efectiva”.</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana “Valoración de Inventario a Fecha Efectiva”, con diferentes campos que le permiten al usuario filtrar la información en base a lo seleccionado en los mismos.</p><p>Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 2. Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione en el campo “Fecha de Valor”, la fecha de valor por la cual requiere filtrar la búsqueda de información.</p><p>Campo Fecha de Valor de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 3. Campo Fecha de Valor de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione en el campo “Esquema Contable”, el esquema contable por el cual requiere filtrar la búsqueda de información.</p><p>Campo Esquema Contable de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 4. Campo Esquema Contable de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione en el campo “Almacén”, el almacén por el cual requiere filtrar la búsqueda de información.</p><p>Campo Almacén de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 5. Campo Almacén de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione en el campo “Producto”, el producto por el cual requiere filtrar la búsqueda de información.</p><p>Campo Producto de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 6. Campo Producto de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione en el campo “Categoría del Producto”, la catedoría del producto por la cual requiere filtrar la búsqueda de información.</p><p>Campo Categoría del Producto de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 7. Campo Categoría del Producto de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione en el campo “Tipo de Costo”, el tipo de costo por el cual requiere filtrar la búsqueda de información.</p><p>Campo Tipo de Costo de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 8. Campo Tipo de Costo de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione en el campo “Elemento de Costo”, el elemento de costo por el cual requiere filtrar la búsqueda de información.</p><p>Campo Elemento de Costo de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 9. Campo Elemento de Costo de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione en el campo “Versión de Lista de Precios”, la versión de lista de precios por la cual requiere filtrar la búsqueda de información.</p><p>Campo Versión de Lista de Precios de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 10. Campo Versión de Lista de Precios de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Seleccione la opción “OK”, para generar el reporte “Valoración de Inventario a Fecha Efectiva” en base a lo seleccionado en los campos explicados anteriormente.</p><p>Opción OK de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Imagen 11. Opción OK de la Ventana Valoración de Inventario a Fecha Efectiva</p><p>Podrá visualizar de la siguiente manera el reporte “Valoración de Inventario a Fecha Efectiva”.</p><p>Reporte Valoración de Inventario a Fecha Efectiva</p><p>Imagen 12. Reporte Valoración de Inventario a Fecha Efectiva</p><p>Valoración de Inventario Ubique y seleccione en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Gestión de Costos”, por último seleccione el reporte “Valoración de Inventario”</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana “Valoración de la Transacción”, con diferentes campos que permiten filtrar la búsqueda de la información para generar el reporte de acuerdo a lo requerido.</p><p>Ventana Valoración de la Transacción</p><p>Imagen 2. Ventana Valoración de la Transacción</p><p>Seleccione en el campo “Esquema Contable”, el esquema contable por el cual el usuario requiere filtrar la información.</p><p>Campo Esquema Contable de la Ventana Valoración de la Transacción</p><p>Imagen 3. Campo Esquema Contable de la Ventana Valoración de la Transacción</p><p>Seleccione en el campo “Almacén”, el almacén por el cual el usuario requiere filtrar la información.</p><p>Campo Almacén de la Ventana Valoración de la Transacción</p><p>Imagen 4. Campo Almacén de la Ventana Valoración de la Transacción</p><p>Note</p><p>Para simular el proceso y generar el reporte de valoración de inventario, se deja el campo “Almacén” en blanco, indicando de esta manera que la búsqueda de la información se debe realizar en todos los almacenes registrados en ADempiere.</p><p>Seleccione en el campo “Fecha de Movimiento”, el rango de fechas en el que se realizó el movimiento del producto y por el cual el usuario requiere filtrar la información.</p><p>Campo Fecha de Movimiento de la Ventana Valoración de la Transacción</p><p>Imagen 5. Campo Fecha de Movimiento de la Ventana Valoración de la Transacción</p><p>Seleccione en el campo “Producto”, el producto por el cual el usuario requiere filtrar la información.</p><p>Campo Producto de la Ventana Valoración de la Transacción</p><p>Imagen 6. Campo Producto de la Ventana Valoración de la Transacción</p><p>Note</p><p>Para simular el proceso y generar el reporte de valoración de inventario, se selecciona como ejemplo el producto “Cucharilla”.</p><p>Seleccione en el campo “Categoría del Producto”, la categoría a la que pertenece el producto seleccionado y por la cual el usuario requiere filtrar la información.</p><p>Campo Categoría del Producto de la Ventana Valoración de la Transacción</p><p>Imagen 7. Campo Categoría del Producto de la Ventana Valoración de la Transacción</p><p>Seleccione en el campo “Socio del Negocio”, el socio del negocio por el cual el usuario requiere filtrar la información.</p><p>Campo Socio del Negocio de la Ventana Valoración de la Transacción</p><p>Imagen 8. Campo Socio del Negocio de la Ventana Valoración de la Transacción</p><p>Introduzca en el campo “Código”, el código por el cual el usuario requiere filtrar la información.</p><p>Campo Código de la Ventana Valoración de la Transacción</p><p>Imagen 9. Campo Código de la Ventana Valoración de la Transacción</p><p>Seleccione en el campo “Tipo de Costo”, el tipo de costo por el cual el usuario requiere filtrar la información.</p><p>Campo Tipo de Costo de la Ventana Valoración de la Transacción</p><p>Imagen 10. Campo Tipo de Costo de la Ventana Valoración de la Transacción</p><p>Seleccione en el campo “Elemento de Costo”, el elemento de costo por el cual requiere filtrar la información.</p><p>Campo Elemento de Costo de la Ventana Valoración de la Transacción</p><p>Imagen 11. Campo Elemento de Costo de la Ventana Valoración de la Transacción</p><p>Seleccione la opción “OK” para generar el reporte de valoración de la transacción.</p><p>Opción OK Ventana Valoración de la Transacción</p><p>Imagen 12. Opción OK Ventana Valoración de la Transacción</p><p>Luego de culminado el proceso, podrá visualizar el reporte de la siguiente manera.</p><p>Reporte Valoración de la Transacción</p><p>Imagen 13. Reporte Valoración de la Transacción</p><p>Detalle de Costos del Producto Ubique y seleccione en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Gestión de Costos”, por último seleccione el reporte “Detalle Costo del Producto”.</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana “Detalle Costo del Producto”, con diferentes campos que le permiten al usuario filtrar la información según lo requerido por el mismo.</p><p>Ventana Detalle Costo del Producto</p><p>Imagen 2. Ventana Detalle Costo del Producto</p><p>Seleccione en el campo “Esquema Contable”, el esquema contable por el cual requiere filtrar la búsqueda de información.</p><p>Campo Esquema Contable de la Ventana Detalle Costo del Producto</p><p>Imagen 3. Campo Esquema Contable de la Ventana Detalle Costo del Producto</p><p>Seleccione en el campo “Categoría del Producto”, la categoría del producto por la cual requiere filtrar la búsqueda de información.</p><p>Campo Categoría del Producto de la Ventana Detalle Costo del Producto</p><p>Imagen 4. Campo Categoría del Producto de la Ventana Detalle Costo del Producto</p><p>Seleccione en el campo “Producto”, el producto por el cual requiere filtrar la búsqueda de información.</p><p>Campo Producto de la Ventana Detalle Costo del Producto</p><p>Imagen 5. Campo Producto de la Ventana Detalle Costo del Producto</p><p>Introduzca en el campo “Código”, el código por el cual requiere filtrar la búsqueda de información.</p><p>Campo Código de la Ventana Detalle Costo del Producto</p><p>Imagen 6. Campo Código de la Ventana Detalle Costo del Producto</p><p>Seleccione la opción “OK”, para generar el reporte “Detalle Costo del Producto”, en base a lo seleccionado en los campos explicados anteriormente.</p><p>Opción OK de la Ventana Detalle Costo del Producto</p><p>Imagen 7. Opción OK de la Ventana Detalle Costo del Producto</p><p>Podrá visualizar de la siguiente manera el reporte “Detalle Costo del Producto”.</p><p>Reporte Detalle Costo del Producto</p><p>Imagen 8. Reporte Detalle Costo del Producto</p><p>Detalle de la Transacción del Costo Ubique y seleccione en el menú de ADempiere, la carpeta “Análisis de Desempeño”, luego seleccione la carpeta “Gestión de Costos”, por último seleccione el reporte “Detalle de la Transacción de Costos”.</p><p>Menú de ADempiere</p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana “Detalle de la Transacción de Costos”, con diferentes campos que le permiten al usuario filtrar la búsqueda para generar el reporte “Detalle de la Transacción de Costos” según lo requerido.</p><p>Ventana Detalle de la Transacción de Costos</p><p>Imagen 2. Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Organización”, la organización por la cual requiere filtrar la búsqueda de información.</p><p>Campo Organización de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 3. Campo Organización de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Esquema Contable”, el esquema contable por el cual requiere filtrar la búsqueda de información.</p><p>Campo Esquema Contable de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 4. Campo Esquema Contable de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Tipo de Costo”, el tipo de costo por el cual requiere filtrar la búsqueda de información.</p><p>Campo Tipo de Costo de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 5. Campo Tipo de Costo de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Elemento de Costo”, el elemento de costo por el cual requiere filtrar la búsqueda de información.</p><p>Campo Elemento de Costo de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 6. Campo Elemento de Costo de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Almacén”, el almacén por el cual requiere filtrar la búsqueda de información.</p><p>Campo Almacén de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 7. Campo Almacén de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Producto”, el producto por el cual requiere filtrar la búsqueda de información.</p><p>Campo Producto de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 8. Campo Producto de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Fecha de Movimiento”, la fecha de movimiento por la cual requiere filtrar la búsqueda de información.</p><p>Campo Fecha de Movimiento de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 9. Campo Fecha de Movimiento de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Fecha Contable”, la fecha contable por la cual requiere filtrar la búsqueda de información.</p><p>Campo Fecha Contable de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 10. Campo Fecha Contable de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione en el campo “Tipo de Movimiento”, el tipo de movimiento por el cual requiere filtrar la búsqueda de información.</p><p>Campo Tipo de Movimiento de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 11. Campo Tipo de Movimiento de la Ventana Detalle de la Transacción de Costos</p><p>Introduzca en el campo “No. del Documento”, el número del documento por el cual requiere filtrar la búsqueda de información.</p><p>Campo No. del Documento de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 12. Campo No. del Documento de la Ventana Detalle de la Transacción de Costos</p><p>Introduzca en el campo “No. Lote”, el número de lote por el cual requiere filtrar la búsqueda de información.</p><p>Campo No. Lote de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 13. Campo No. Lote de la Ventana Detalle de la Transacción de Costos</p><p>Introduzca en el campo “No. de Serie”, el número de serie por el cual requiere filtrar la búsqueda de información.</p><p>Campo No de Serie de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 14. Campo No de Serie de la Ventana Detalle de la Transacción de Costos</p><p>Seleccione la opción “OK”, para generar el reporte “Detalle de la Transacción de Costos”, en base a lo seleccionado en los campos explicados anteriormente.</p><p>Opción OK de la Ventana Detalle de la Transacción de Costos</p><p>Imagen 15. Opción OK de la Ventana Detalle de la Transacción de Costos</p><p>Podrá visualizar de la siguiente manera el reporte “Detalle de la Transacción de Costos”.</p><p>Reporte Detalle de la Transacción de Costos</p><p>Imagen 16. Reporte Detalle de la Transacción de Costos</p>",315)],r={},t=(0,o(13860).Z)(r,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,l)}]])},59432:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-70b75062","path":"/docs/accounting-management/costs.html","title":"Gestión de Costos","lang":"en-US","frontmatter":{"title":"Gestión de Costos","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/accounting-management/costs.html"}],["meta",{"property":"og:title","content":"Gestión de Costos"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-08T22:34:47.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-03-08T22:34:47.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1678314887000,"updatedTime":1678314887000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":1}]},"readingTime":{"minutes":15.07,"words":4522},"filePathRelative":"docs/accounting-management/costs.md","localizedDate":"March 8, 2023"}')}}]);