import React from "react";
import styles from "./CustomInput.module.scss"

const CustomInput = ({
                         placeholder,
                         underlineLabel,
                         handleChange,
                         id,
                         value,
                         name,
                         errors,
                         validationErrorMessage
                     }) => {

    return (
        <>
            <div className={styles.container}>
                <div>
                    <div className={styles.omrsInputGroup}>
                        <label className={styles.omrsInputUnderlined}>
                            <input onChange={handleChange} id={id} value={value} name={name}/>
                            <span className={styles.omrsInputLabel}>{placeholder}</span>
                            <span className={styles.omrsInputHelper}>{underlineLabel}</span>
                            {errors && validationErrorMessage && (
                                <div>{errors}</div>
                            )}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomInput

CustomInput.defaultProps = {
    placeholder: "Input Default Placeholder",
    underlineLabel: ""
}