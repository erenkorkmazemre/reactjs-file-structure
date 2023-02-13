import React from "react";

const CustomTable = ({label, numberOfColumn}) => {

    return (
        <>
            <div>{label}</div>
            <table className="mt-20">
                <thead>
                <tr>
                    <th>Test Data Name</th>
                    <th>Description</th>
                    <th>File Size</th>
                    <th>Add Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {new Array({numberOfColumn}).fill(0).map((_, index) => (
                    <tr>
                        <td>Adresler</td>
                        <td>3 Files</td>
                        <td>5.6 MB</td>
                        <td>26/04/20202</td>
                        <td>26/04/20202</td>
                        <td>26/04/20202</td>
                        <td>26/04/20202</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default CustomTable

CustomTable.defaultProps = {
    label: "Default Table Label",
    numberOfColumn: 2
}