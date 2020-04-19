import React from 'react'
import Navigation2Piece from './Navigation2Piece'
import {FaLightbulb, FaGraduationCap, FaBriefcase, FaUser, FaFolderOpen, FaPhone} from 'react-icons/fa'

function Navigation2() {

    return (
        <div className='col-12 col-lg-2 m-0 p-0 navigation' style={{position: 'sticky', top: '0px', height:'80vh'}}> 
            <div className='col-9'>
                <div className='row justify-content-start'>
                    <div className='col-11 m-0 p-0'>
                        <img src={require('../Images/gabriel2.jpg')} alt='Gabriel' style={{width: '100%'}} className='p-0 m-0'></img>
                    </div>
                </div> 
                <Navigation2Piece icon={<FaUser size='25px' color='black'/>} label='Sobre mi' section='section-1' id='1'/>
                <Navigation2Piece icon={<FaBriefcase size='25px' color='black'/>} label='Experiencia' section='section-2' id='2'/>
                <Navigation2Piece icon={<FaGraduationCap size='25px' color='black'/>} label='Educación' section='section-3' id='3'/>
                <Navigation2Piece icon={<FaLightbulb size='25px' color='black'/>} label='Habilidades' section='section-4' id='4'/> 
                <Navigation2Piece icon={<FaFolderOpen size='25px' color='black'/>} label='Portafolio' section='section-5' id='5'/> 
                <Navigation2Piece icon={<FaPhone size='20px' color='black'/>} label='Contacto' section='section-6' id='6'/>            
            </div>     
        </div>       
    )
}

export default Navigation2