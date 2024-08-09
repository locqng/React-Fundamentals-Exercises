import PropTypes from "prop-types";

const DeleteItem = ({deleteItem, noItemFound}) => {
    
    return (
    <button onClick={deleteItem} disabled={noItemFound}>
        Delete Last Item
    </button>)
}

DeleteItem.propTypes = {
    deleteItem: PropTypes.func.isRequired,
    noItemFound: PropTypes.func.isRequired
}

export default DeleteItem;