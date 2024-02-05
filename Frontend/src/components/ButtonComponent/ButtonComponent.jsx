import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


const ButtonComponent = ({ onClick }) => {
    const buttonStyles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        padding: '10px 15px',
        background: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      };

  return (
    
    <button onClick={onClick} style={buttonStyles}>
        <FontAwesomeIcon icon={faSignInAlt} />
    </button>
  );
};

export default ButtonComponent;
