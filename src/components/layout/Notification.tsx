import React, { useEffect } from 'react';

// @ts-ignore
const Notification = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div style={{ position: 'fixed', top: '10px', right: '10px', padding: '10px', background: 'green', color: 'white' }}>
            {message}
        </div>
    );
};

export default Notification;