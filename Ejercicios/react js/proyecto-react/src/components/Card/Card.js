import React from 'react';
import Tag , {TAG_TYPES} from '../Tag/Tag';

import './Card.scss';
// import tags from 'tags';


const Card = ({tags, title, text}) => (
    <div className='card'>
        <div className='tags'>
            {
                tags.map(tag => 
                <Tag 
                key={tag.id}
                name= {tag.name}
                color={tag.color}
                type={TAG_TYPES.SMALL}
                />)
            }
        </div>
        <p><b>{title}</b></p>
        <p>{text}</p>
    </div>
)

export default Card;