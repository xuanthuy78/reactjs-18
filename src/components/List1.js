import React from 'react';

export default function (props) {
    //truyen tu cha sang con, props ta có thể viết {data, render}, vì render trruyf qua la function
    console.log(props);
    return <div className="data1">
        { props.data.map((item,index) => props.render(item, index)) }
    </div>
    
}