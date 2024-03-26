// import { FaTrashAlt } from "react-icons/fa";
// import { IoCheckmark } from "react-icons/io5";
import PropTypes from 'prop-types'
import ShoppingItem from './ShoppingItem'
const ShoppingList = ({ listItems, setListItems }) => {
  // const handleDelete = (listItem) => {
  //   console.log(listItem)
  // }
 
  return (
    <div className='mt-8'>
      <ul>
        {listItems.map((item) => (
          <ShoppingItem 
            key = {item.name}
            listItem={item}
            listItems={listItems}
            setListItems = {setListItems}
         />          

      ))}
      </ul>
      
    </div>
  );
};

ShoppingList.propTypes = {
  listItems: PropTypes.array.isRequired,
  setListItems: PropTypes.func.isRequired,
};

export default ShoppingList;