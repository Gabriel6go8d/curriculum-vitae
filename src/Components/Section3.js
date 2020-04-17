import React from 'react'
import ShowData2Piece from './ShowData2Piece'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceD6} from '@fortawesome/free-solid-svg-icons'

function Section3() {

    const list = [
        {
            id: '1',
            label: 'Eude Business School',
            date: '09/2019 - Present',
            location: 'Madrid, España',
            data: 'MBA Master en Administracion de Empresa',
        },
        {
            id: '2',
            label: 'Universidad CUJAE',
            date: '09/2012 - 08/2017',
            location: 'La Habana, Cuba',
            data: 'Ing. en Telecomunicaciones y Electrónica',
        },
        {
            id: '3',
            label: 'IPVCE Lenin',
            date: '09/2008 - 08/2011',
            location: 'La Habana, Cuba',
            data: 'Bachiller',
        }
    ]

    const MapList = list.map(xx => <ShowData2Piece values={xx} key={xx.id}/>)


    return (
        <React.Fragment>
            <div className='row justify-content-center mt-5'>
                <h1 className='col-12'>Educación</h1>
                <div className='col-10 mt-5 backdiv'>                
                    {MapList}                           
                </div>            
            </div>
            <FontAwesomeIcon icon={faDiceD6} size='3x' color='#F1CC04' className='mt-5'/>
        </React.Fragment>
    )
}

export default Section3
