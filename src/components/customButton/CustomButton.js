import React from 'react';
import styles from './CustomButton.module.scss';
const CustomButton = ({label, handleClick}) => {
    return (
        <div>
            <button className={styles.bubblyButton} onClick={handleClick}>
                {label}
            </button>
        </div>


    )
}
export default CustomButton;

CustomButton.defaultProps = {
    label: 'Default Label',
};