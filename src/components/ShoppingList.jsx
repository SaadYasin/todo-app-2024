import PropTypes from 'prop-types'
const ShoppingList = ({ items }) => {
  return (
    <div className='mt-8'>
      {items.map((listItem, index) => (
          <h3
              key={index}
              className='w-[340px] p-2 mb-1 bg-yellow-200 mx-auto rounded-sm'>
              {listItem}
          </h3>
      ))}
    </div>
  );
};

ShoppingList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ShoppingList;