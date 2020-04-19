import React from 'react'
import ShowData2Piece from './ShowData2Piece'
import {FaBriefcase} from 'react-icons/fa'


function Section2() {

    const list = [
        {
            id: '1',
            label: 'Mega',
            date: '03/2016 - 09/2019',
            location: 'La Habana, Cuba',
            data: 'Técnico Comercial',
        },
        {
            id: '2',
            label: 'Universidad CUJAE',
            date: '09/2014 - 08/2017',
            location: 'La Habana, Cuba',
            data: 'Profesor',
        },
    ]

    const MapList = list.map(xx => <ShowData2Piece values={xx} key={xx.id}/>)


    return (
        <React.Fragment>
            <FaBriefcase size='40px' color='#F1CC04'/>
            <div className='row justify-content-center mt-5'>
                <h1 className='col-12'>Experiencia</h1>
                <div className='col-10 mt-5 backdiv'>                
                    {MapList}                           
                </div>            
            </div>            
        </React.Fragment>
    )
}

export default Section2

