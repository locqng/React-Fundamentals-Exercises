import Item from "./Item";
import PropTypes from "prop-types";

const ItemList = ({itemList}) => {
    return <ol className="item">
            {itemList.map((item, index) => (
                <Item key={index} item={item}/>
            ))}
        </ol>
    
}

ItemList.propTypes = {
    itemList: PropTypes.array.isRequired
}

export default ItemList;