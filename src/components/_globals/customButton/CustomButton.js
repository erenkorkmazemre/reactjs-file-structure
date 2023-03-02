import React from 'react';
import styles from './CustomButton.module.scss';

const CustomButton = ({label, onClick, type}) => {
    return (
        <div className={styles.container}>
            <button className={styles.bubblyButton} onClick={onClick} type={type}>
                {label}
            </button>
        </div>


    )
}
export default CustomButton;

CustomButton.defaultProps = {
    label: 'Default Button Label',
};