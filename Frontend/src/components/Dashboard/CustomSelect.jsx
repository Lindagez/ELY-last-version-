import React from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCouch,
    faLaptop,
    faTshirt,
    faBook,
    faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        color: '#000',
        backgroundColor: '#fff',
        padding: '5px',
        cursor: 'pointer',
        backgroundColor: state.isSelected ? 'blue' : '#fff',
        '&:hover': {
            backgroundColor: 'lightblue',
        },
    }),
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '15px',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
    }),
    

};

const customOptions = [
    {
        value: 'Electronics',
        label: (
            <div>
                <FontAwesomeIcon icon={faLaptop} style={{ marginRight: '8px' }} />
                Electronics
            </div>
        ),
    },
    {
        value: 'Clothing',
        label: (
            <div>
                <FontAwesomeIcon icon={faTshirt} style={{ marginRight: '8px' }} />
                Clothing
            </div>
        ),
    },
    {
        value: 'Furniture',
        label: (
            <div>
                <FontAwesomeIcon icon={faCouch} style={{ marginRight: '8px' }} />
                Furniture
            </div>
        ),
    },
    {
        value: 'Books',
        label: (
            <div>
                <FontAwesomeIcon icon={faBook} style={{ marginRight: '8px' }} />
                Books
            </div>
        ),
    },
    {
        value: 'Other',
        label: (
            <div>
                <FontAwesomeIcon
                    icon={faQuestionCircle}
                    style={{ marginRight: '8px' }}
                />
                Other
            </div>
        ),
    },
];

function CustomSelect(props) {
    const { category, handleCategoryChange } = props;

    const handleChange = (selectedOption) => {
        handleCategoryChange(selectedOption.value);
    };

    return (
        <Select
            options={customOptions}
            styles={customStyles}
            placeholder="Select a category"
            value={category ? { value: category, label: category } : null}
            onChange={handleChange}
        />
    );
}

export default CustomSelect;
