import React from 'react'

function ShowData1Piece(prop) {
    var toShow =''
    if(prop.values.type === 'link'){
        var myLabel = prop.values.data
        if (myLabel.includes('mailto')){
            myLabel = myLabel.replace('mailto:', '')
        }
        if (myLabel.includes('tel:')){
            myLabel = myLabel.replace('tel:', '')
        }
        toShow = <a  href={prop.values.data}>{myLabel}</a>
    }else{
        toShow = <p id='valueC' className='gray' style={{wordBreak: 'break-all'}}>{prop.values.data}</p>
    }

    return (
        <div className='row justify-content-between mt-3'>
            <div className='col-12 col-md-5 labelR'>
                <strong>{prop.values.label}</strong> 
            </div>
            <div className='col-12 col-md-5 labelL'>
                {toShow}
            </div>
        </div>
    )
}

export default ShowData1Piece
