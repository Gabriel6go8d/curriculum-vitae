import React from 'react'
import ShowData1Piece from './ShowData1Piece'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

function ShowData1(prop) {
    const matches = window.matchMedia('(min-width:765px)').matches
    const toSHow = prop.values.map(xx => <ShowData1Piece label={xx.label} data={xx.data} key={xx.id}/>)

    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-10'>
                <h1>{prop.label}</h1>
                {matches && <FontAwesomeIcon icon={faCircle} size='sm' color='black' className='mt-5'/>}
                {!matches && <div style={{height: '30px'}}/>}
                <div className='col-12 backdiv mt-2'>                
                    {toSHow}                           
                </div>
                {matches && <FontAwesomeIcon icon={faCircle} size='sm' color='#F1CC04' className='mt-2'/>}
            </div>
        </div>
    )
}

export default ShowData1
