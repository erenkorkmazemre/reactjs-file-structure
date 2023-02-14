import React from "react";
import styles from "./CustomInput.module.scss"
const CustomInput = ({placeholder}) => {
    return (
        <div className={styles.container}>
            <div>
                <h4 className={styles.title}>Underlined Inputs</h4>
                <form>
                    <div className={styles.omrsInputGroup}>
                        <label className={styles.omrsInputUnderlined}>
                            <input required/>
                                <span className={styles.omrsInputLabel}>Normal</span>
                                <span className={styles.omrsInputHelper}>Helper Text</span>
                        </label>
                    </div>

                </form>
            </div>

        </div>

    )
}

export default CustomInput

CustomInput.defaultProps = {
    placeholder: "Input Default Placeholder"
}