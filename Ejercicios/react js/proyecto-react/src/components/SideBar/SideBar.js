import React from 'react';
import './SideBar.scss';
import tags from 'tags';
import Tag, {TAG_TYPES} from '../Tag/Tag';

const SideBar = () => (
    <div className='side-bar'>
        <div className='side-bar-tags'>
        {
            tags.map(tag => < Tag 
            type={TAG_TYPES.BIG}
            key={tag.id}
            name={tag.name}
            color={tag.color}
            />)
        }
        </div>
    </div>
)

export default SideBar;