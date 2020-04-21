import React from 'react'
import ShowData1 from './ShowData1'
import {FaPhone} from 'react-icons/fa'

function Section6() {

    const ContactList = [
        {
            id: '1',
            label: 'Email',
            data: 'mailto:gabrie.ares93@gmail.com',
            type: 'link'
        },
        {
            id: '2',
            label: 'Telefono',
            data: 'tel:+34 625967964',
            type: 'link'
        },
        {
            id: '3',
            label: 'Web',
            data: 'https://gabriel6go8d.github.io/curriculum-vitae/',
            type: 'link'
        },
        {
            id: '4',
            label: 'Linkeld',
            data: 'https://www.linkedin.com/in/gabriel-gutierrez-infante-aa1762125/',
            type: 'link'
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
