import React from 'react'
import AboutMe from './AboutMe'
import ShowData1 from './ShowData1'
import {FaUser} from 'react-icons/fa'

function Section1() {

    const PersonalList = [
        {
            id: '1',
            label: 'Nombre',
            data: 'Gabriel Gutierrez Infante',
        },
        {
            id: '2',
            label: 'Edad',
            data: '27 años',
        },
        {
            id: '3',
            label: 'Nacionalidad',
            data: 'Cubano',
        },
        {
            id: '4',
            label: 'Estado Civil',
            data: 'Casado',
        },
    ]

    

    return (
        <React.Fragment>
            <AboutMe/>
            <FaUser size='40px' color='#F1CC04' className='mt-5'/>
            <ShowData1 values={PersonalList} label='Información Personal'/>           
        </React.Fragment>      
    )
}

export default Section1
