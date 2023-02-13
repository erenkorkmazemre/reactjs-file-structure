import React from "react"
import styles from './CustomSelect.module.scss';

const CustomSelect = ({label}) => {

    return (
        <div>
            <select>
                <option value="11">{label}</option>
                <option value="22">{label}</option>
            </select>
        </div>
    )

}

export default CustomSelect

CustomSelect.defaultProps = {
    label: 'Default Select Label',
};