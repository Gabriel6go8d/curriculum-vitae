import React from 'react'
import ShowData1 from './ShowData1'
import {FaPhone} from 'react-icons/fa'

function Section6() {

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
            data: 'https://gabriel6go8d.github.io/curriculum-vitae/',
        },
        {
            id: '4',
            label: 'Linkeld',
            data: 'https://www.linkedin.com/in/gabriel-gutierrez-infante-aa1762125/',
        },
    ]

    return (
        <React.Fragment>
            <FaPhone size='40px' color='#F1CC04' className='mt-5'/>
            <ShowData1 values={ContactList} label='Contacto'/>             
        </React.Fragment>
    )
}

export default Section6
