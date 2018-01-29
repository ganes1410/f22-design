import React from 'react';
import forest from './photos/forest.jpeg';
import sea from './photos/sea.jpeg';


const BgImage  =({index}) => (
    index %2 === 0
    ? <img src={forest} alt="background" className='background'/> 
    : <img src={sea} alt="background" className='background'/> 
    
)

export default BgImage;