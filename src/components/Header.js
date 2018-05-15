import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <div>
            {
                props.size === 'big' ? 
                <h1>{props.title}</h1>
                : <h3>{props.title}</h3>
            }
        </div> 
    )
}