import React from 'react'

export default function ProductCard(props) { 
    return (
        <div className='productCategory category1'>
            <div className='categoryImage image' style={{ backgroundImage: `url("${props.imgURL}")` }}></div>
            <div className='categoryHeading'>
                <div className='categoryTitle'>{props.name}</div>
                <div className='categoryTitle'>{props.price}</div>
            </div>
        </div>
    )
}
