import React from 'react';
import './Tag.scss';

const Tag = ({type, color, name}) => (
    <div 
    className={type}
    style={{backgroundColor: color}}
    >
        {name}
    </div>
)

export const TAG_TYPES = {
    SMALL: 'tag-small',
    BIG: 'tag-big'
}

export default Tag;