import React, { useState, useEffect } from 'react';
import './Status.css';

const Status = ({ message, type }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); 

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const classNames = `status-message ${type} ${isVisible ? 'visible' : ''}`;

    return <div className={classNames}> {message}</div>;
};

export default Status;
