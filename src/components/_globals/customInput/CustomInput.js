import React from "react";
import styles from "./CustomInput.module.scss"

const CustomInput = ({placeholder, underlineLabel}) => {
    return (
        <div className={styles.container}>
            <div>
                <form>
                    <div className={styles.omrsInputGroup}>
                        <label className={styles.omrsInputUnderlined}>
                            <input required/>
                            <span className={styles.omrsInputLabel}>{placeholder}</span>
                            <span className={styles.omrsInputHelper}>{underlineLabel}</span>
                        </label>
                    </div>

                </form>
            </div>

        </div>

    )
}

export default CustomInput

CustomInput.defaultProps = {
    placeholder: "Input Default Placeholder",
    underlineLabel:"Must"
}