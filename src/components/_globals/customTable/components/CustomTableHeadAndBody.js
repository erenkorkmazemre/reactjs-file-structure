import React from "react";

const CustomTableHeadAndBody = ({data}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    {Object.keys(data[0]).map((key,index) => (
                        <th key={index} style={{borderStyle: "solid", borderColor: "black"}}>{key}</th>
                    ))}
                </tr>
                </thead>
                {data.map((item) => (
                    <tbody key={item.id}>
                    <tr>
                        {Object.values(item).map((val,index) => (
                            <td key={index} style={{borderStyle: "solid", borderColor: "black"}}>{val}</td>
                        ))}
                    </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}

export default CustomTableHeadAndBody

CustomTableHeadAndBody.defaultProps = {
    label: "Default Table Label"
}