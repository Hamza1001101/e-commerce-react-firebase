import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import { createStructuredSelector } from 'reselect';
import './directory-menu.scss';
import MenuItem from '../menu-item/MenuItem';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...allOtherSectionprops }) => {
        return <MenuItem key={id} {...allOtherSectionprops} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
