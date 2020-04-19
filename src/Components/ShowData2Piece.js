import React from 'react'
import {FaCircle} from 'react-icons/fa'

function ShowData2Piece(prop) {
    // const matches = window.matchMedia('(min-width:765px)').matches

    var showIcon = ''
    if(prop.values.id !== '1') {
        showIcon = <FaCircle size='15px' color='#F1CC04' className='mt-3 mb-3 col-12'/>
    }

    return (
        <div className='row justify-content-between'>
            {showIcon}
            <div className='col-12 col-md-5 labelR'>
                <h5>{prop.values.date}</h5>
                <p className='gray'>{prop.values.location}</p>  
            </div>
            <div className='col-12 col-md-5 labelL'>
                <div className='row align-items-start' style={{height: 'fill'}}>
                    <div className='col'>
                        <h5>{prop.values.label}</h5>
                        <p id='valueC' className='gray' style={{wordBreak: 'break-word'}}>{prop.values.data}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowData2Piece
