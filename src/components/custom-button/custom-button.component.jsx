import React from 'react';
import './custom-button.styles.scss';
import CollectionItem from '../colleciton-item/collection-item.component';

const CustomButtom = ({children,...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}

    </button>
)

export default CustomButtom;