import './CartWidget.css';

const CartWidget = () => {

    const imgCarrito= "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sale-Stickers-PNG/Shopping_Cart_PNG_Clip_Art_Image.png?m=1629814078"

return (
    <div className="cart-widget">
        <img src={imgCarrito} alt="Carrito" className="cart-widget-img" />
        <strong className="cart-widget-count">5</strong>
    </div>
)
}

export default CartWidget