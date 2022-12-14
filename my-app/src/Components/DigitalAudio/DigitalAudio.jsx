import React from 'react'
import { data } from '../../data'
import Product from '../Product'
// import styles from "./"

const DigitalAudio = () => {
    console.log("from digital audio",data);
  return (
    <div style={{width:"100%"}}>
        <h1>Digital Audio </h1>
        <div className='digital'>

        {
            data.map((items)=>{
                return(
                    <Product items={items} />
                    )
            })
        }
        </div>
    </div>
  )
}

export default DigitalAudio