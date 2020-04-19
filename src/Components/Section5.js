import React from 'react'
import {FaFolderOpen} from 'react-icons/fa'
import Section5A from './Section5A'

function Section5() {
    return (
        <React.Fragment>
            <FaFolderOpen size='50px' color='#F1CC04' className='mt-5'/>
            <div className='row justify-content-center m-0 p-0 mt-5'>
                <h1 className='col-12'>Portafolio</h1>
                <h5 className='col-12 gray'>https://github.com/Gabriel6go8d</h5>
                <div className='row justify-content-between'>
                    <Section5A title='React' description='Pagina de practica con React y Bootstrap' img='https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg' direction='https://gabriel6go8d.github.io/firts-steps/'/>

                    <Section5A title='Canvas' description='Pagina de practica para Canvas utilizando React y Bootstrap' img='https://www.loopeando.com/wp-content/uploads/2016/11/html5.jpg' direction='https://gabriel6go8d.github.io/canvas-training/'/>

                    <Section5A title='Primeros Pasos' description='Pagina de practica con Laravel y React' img='https://wallpaperaccess.com/full/1567483.jpg' direction='https://github.com/Gabriel6go8d/lorem-page'/>
                </div>          
            </div>            
        </React.Fragment>
    )   
}

export default Section5
