import React from 'react';

export default function (props) {
    console.log(props);
    return <div>
        { props.data.map((item) => props.render(item)) }
    </div>
    
}