import React from 'react';
import './custom-button.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      }
    custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

/** Redux is using flex pattern architecture.  */
/** update user Reducer with payLaod */
