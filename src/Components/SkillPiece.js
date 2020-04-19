import React from 'react'

function SkillPiece(prop) {

    const toShow = prop.data.map(xx => <div className='mr-2'
                                        style={{backgroundColor: '#e6e6e6', borderRadius: '15px'}}>
                                        <p className='ml-2 mr-2 mt-0' style={{fontSize:'15px'}}>{xx}</p></div>)

    return (
        <div className='col-12 col-md-6 mt-3 mb-3'>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    {prop.icon}
                </div>
                <div className='col-6 m-0 p-0 text-left'>
                    <h5>{prop.label}</h5>
                    <div className='row m-0 p-0'>                        
                        {toShow}
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default SkillPiece
