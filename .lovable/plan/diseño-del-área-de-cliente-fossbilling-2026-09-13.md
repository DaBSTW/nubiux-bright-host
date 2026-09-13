# Diseño del área de cliente FOSSBilling

## Primera pantalla
Crearé primero el **Panel principal del cliente**, porque es la entrada natural tras iniciar sesión y establece el sistema visual para las demás pantallas.

Incluirá:
- Navegación lateral de Nubiux y cabecera adaptable a móvil.
- Resumen de servicios activos, facturas pendientes, tickets y saldo.
- Accesos rápidos para contratar, pagar, abrir soporte y administrar servicios.
- Lista de servicios recientes, próxima renovación y actividad de soporte.
- Estados vacíos, indicadores claros y datos de demostración realistas.
- Diseño bilingüe EN/ES, coherente con la web principal.

## Páginas identificadas
La disponibilidad exacta depende de los módulos instalados, pero el área de cliente normalmente contempla:

1. Inicio de sesión, registro y recuperación de contraseña.
2. Panel principal.
3. Catálogo y contratación de productos.
4. Carrito y proceso de pedido.
5. Mis servicios y detalle de cada servicio.
6. Dominios y gestión de dominio, si el módulo está activo.
7. Facturas, detalle y pago.
8. Soporte: tickets, nuevo ticket y base de conocimiento.
9. Perfil, contactos, contraseña y seguridad.
10. Créditos o saldo, afiliados y extensiones, según módulos habilitados.

## Alcance técnico
- Añadir una nueva ruta de demostración para el panel FOSSBilling sin conectar todavía datos reales.
- Crear componentes reutilizables para que las siguientes pantallas mantengan la misma navegación y estilo.
- No modificar la landing pública ni conectar pagos, usuarios o FOSSBilling en esta etapa.
- Verificar escritorio y móvil, enlaces, textos bilingües y ausencia de errores.
