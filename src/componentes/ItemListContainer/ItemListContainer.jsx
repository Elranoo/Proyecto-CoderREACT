import './ItemListContainer.css'


const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="item-list-container">
            <div className="itemlist-mensaje">{mensaje}</div>
        </div>
    )
}

export default ItemListContainer