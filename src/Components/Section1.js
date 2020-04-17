import React from 'react'
import '../MyCSS.css'
import AboutMe from './AboutMe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceD6} from '@fortawesome/free-solid-svg-icons'
import ShowData1 from './ShowData1'

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
            data: '26 años',
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

    const ContactList = [
        {
            id: '1',
            label: 'Email',
            data: 'gabrie.ares93@gmail.com',
        },
        {
            id: '2',
            label: 'Telefono',
            data: '+34 625967964',
        },
        {
            id: '3',
            label: 'Web',
            data: 'https://gabriel6go8d.github.io/canvas-training/',
        },
        {
            id: '4',
            label: 'Linkeld',
            data: 'https://www.linkedin.com/in/gabriel-gutierrez-infante-aa1762125/',
        },
    ]

    return (
        <React.Fragment>
            <AboutMe/>
            <FontAwesomeIcon icon={faDiceD6} size='3x' color='#F1CC04' className='mt-5'/>
            <ShowData1 values={PersonalList} label='Información Personal'/>
            <FontAwesomeIcon icon={faDiceD6} size='3x' color='#F1CC04' className='mt-5'/>
            <ShowData1 values={ContactList} label='Contacto'/>
            <FontAwesomeIcon icon={faDiceD6} size='3x' color='#F1CC04' className='mt-5'/>
        </React.Fragment>      
    )
}

export default Section1
