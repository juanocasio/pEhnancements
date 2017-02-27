import React from 'react';

const color = Math.random() > 0.5 ? 'blue': 'red'

const Header = ({message}) => {
  return (
    <h2 style={{color}} className="Header text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

Header.defaultProps = {
  headerMessage: 'Default Header Message'
};

export default Header;