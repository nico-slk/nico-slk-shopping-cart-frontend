# Bienvenido a la aplicación CartShop en su aplicacion Frontend

 ## Instalar dependencias

Una vez clonado el repositorio en tu equipo, entra al proyecto y en la consola utiliza cualquiera de los siguientes comandos:

```
npm install
```
```
yarn install
```
```
pmpm install
```
Elije cualquiea que te resulte mas cómodo.

#

Una vez terminado de instalar las dependencias necesarias, corre el siguiente comando:
```
npm run dev
```
Para poner el marcha el frontend y comenzar a interactual desde tu navegador. Verás la siguiente información: 
```
VITE v5.3.3  ready in 293 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

en la que el link `ttp://localhost:5173/` es la direccion de la aplicacion corriendo en tu equipo de forma local. Copia el link y pegalo en tu navegador favorito

#

Enseguida podras hacer las pruebas con distintos productos. Notarás que en la pagina de inicio, existen 3 botones: `Common User`, `VIP User`, `Special Day`

En los cuales podras elegir entre un usuario VIP o un usuario común. Y el otro botón es para activar la fecha especial para tener el efecto necesario en el monto total en carrito si se cumplen los requerimientos.

#### Si hay exactamente 4 productos
Si tu carrito de compras, tiene exactamente 4 productos. Verás que tendrás un descuento del -25%

#### Si hay exactamente 4 productos
Si el carrito es común se hará un descuento de $100.\
Si el carrito es promocionable por fecha especial se hace un descuento general de $300.\
Si el carrito es vip, se bonifica el producto más barato y se hace un descuento general de $500

Si el cliente en un determinado mes, realizó compras por más de $10.000, pasa a ser
considerado VIP en su próxima compra. (considerar el valor de lo que realmente paga el
cliente por los carritos luego de aplicarle los descuentos)

Si el cliente en un determinado mes, no realizó compras, deja de ser VIP si lo era

 

[Repositorio backend](https://github.com/nico-slk/nico-slk-shopping-cart-backend)
