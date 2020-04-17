import React from 'react'

function ShowData1Piece(prop) {

    return (
        <div className='row justify-content-between'>
            <div className='col-12 col-md-5 labelR'>
                <strong>{prop.label}</strong> 
            </div>
            <div className='col-12 col-md-5 labelL'>
                <p id='valueC' style={{wordBreak: 'break-all'}}>{prop.data}</p>
            </div>
        </div>
    )
}

export default ShowData1Piece
