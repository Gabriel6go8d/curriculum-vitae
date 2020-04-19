import React from 'react'
import {FaLightbulb, FaGraduationCap, FaBriefcase, FaUser, FaFolderOpen, FaPhone} from 'react-icons/fa'
import smoothscroll from 'smoothscroll-polyfill';
import NavbarPiece from './NavbarPiece';

function NavBar() {
    smoothscroll.polyfill();
    
    return (
        <React.Fragment>
            <img className='m-0 p-0' src={require('../Images/gabriel.jpg')} alt='Gabriel' style={{width: '100%'}}></img>
            
            <div className='row m-0 p-0' style={{position: 'sticky', top: '0px', zIndex: 10}}>
                <NavbarPiece section='section-1' id='1' icon={<FaUser size='20px' color='black'/>}/>
                <NavbarPiece section='section-2' id='2' icon={<FaBriefcase size='20px' color='black'/>}/>
                <NavbarPiece section='section-3' id='3' icon={<FaGraduationCap size='20px' color='black'/>}/>
                <NavbarPiece section='section-4' id='4' icon={<FaLightbulb size='20px' color='black'/>}/>
                <NavbarPiece section='section-5' id='5' icon={<FaFolderOpen size='20px' color='black'/>}/>
                <NavbarPiece section='section-6' id='6' icon={<FaPhone size='20px' color='black'/>}/>
            </div>   
        </React.Fragment>         
    )
}

export default NavBar
