import React from "react";

const CustomDataTableComponent = ({data, style, headData, bodyData}) => {

    const renderManipulateTh = () => {
      const count = 10;
      const arr = [];
      //data[0]?.headData

      for (let i = 0; i < headData.length; i++) {
        arr.push( 
            <th style={{borderStyle: "solid", borderColor: "black"}}>{headData[i]}</th>
        );
      }
      return arr;
    };

    const renderManipulateTd = (index) => {
        const arr = [];
        //console.log(data?.lectures?.[0]?.code)
        //const abc = data[2].lectures[0].code
        //const def = "lectures[0].code"
        //const a = data[2]?.[def]
        //console.log(def)
        //console.log(a)
        //console.log(abc)
        //console.log(data[2]?.abc)
        console.log(data)
        const def = "name";
        const abc = "lectures";
        const z = "lectures[0].code";

        //console.log(data[0].def)
        console.log(eval(`data[3].${z}`));

        //console.log(data[3]?.[def]); // 
        //console.log(data[3]?.[abc][0]); //
        //console.log(data[3]?.z); //



        for (let i = 0; i < bodyData.length; i++) { 
          arr.push( 
              <td style={{borderStyle: "solid", borderColor: "black"}}>{data[index]?.[bodyData[i]]}</td>
          );
        }
        return arr;
      };

    return (
        <>
            <table style={style}>
                <thead>
                <tr>
                    {/* <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].id}</th>
                    <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].name}</th>
                    <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].surname}</th>
                    <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].name}</th>
                    <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].name}</th>
                    <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].name}</th>
                    <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].name}</th>
                    <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].name}</th>
                    <th style={{borderStyle: "solid", borderColor: "black"}}>{data[0].name}</th> */}
                    {renderManipulateTh()}
                </tr>
                </thead>
                    <tbody >
                    {data.map((data, index) => (
                    <tr key={index}>
                         {/* <td style={{borderStyle: "solid", borderColor: "black"}}>{data.id}</td>
                         <td style={{borderStyle: "solid", borderColor: "black"}}>{data.name}</td>
                         <td style={{borderStyle: "solid", borderColor: "black"}}>{data.surname}</td>
                         <td style={{borderStyle: "solid", borderColor: "black"}}>{data.name}</td>
                         <td style={{borderStyle: "solid", borderColor: "black"}}>{data.name}</td>
                         <td style={{borderStyle: "solid", borderColor: "black"}}>{data.name}</td>
                         <td style={{borderStyle: "solid", borderColor: "black"}}>{data.name}</td>
                         <td style={{borderStyle: "solid", borderColor: "black"}}>{data.name}</td>
                         <td style={{borderStyle: "solid", borderColor: "black"}}>{data?.lectures?.[0]?.code}</td> */}
                         {renderManipulateTd(index)}
                    </tr>
                    ))}
                    </tbody>
                
            </table>
        </>
    )
}

export default CustomDataTableComponent

CustomDataTableComponent.defaultProps = {
    label: "Default Table Label"
}