import React from 'react'
import './tabs.css'

const Female = ({imgUrl,name,distace,durum}) => {
    return (
        <>
        <div className='person'>
            <div className='person_img'>
                <img src={imgUrl}></img>
            </div>
            <div className='person_name'>
                <h5>{name}</h5>
                <h6>{distace} Km</h6>
            </div>
            <div className='ofline'>
                <div className='rapor'>{durum}</div>
            </div>
        </div>
        <hr/>
    </>
    )
}

export default Female