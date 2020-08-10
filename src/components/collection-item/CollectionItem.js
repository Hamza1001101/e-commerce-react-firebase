import React from 'react';
import './collection-item.scss';

import CustomButton from '../custom-button/CustomButton';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'> {name} </span>
        <span className='price'> {price} </span>
      </div>
      <CustomButton inverted>Add to cart </CustomButton>
    </div>
  );
};

export default CollectionItem;
