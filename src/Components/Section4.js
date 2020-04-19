import React from 'react'
import {FaLaptopCode, FaNewspaper, FaCogs, FaMobileAlt, FaLightbulb} from 'react-icons/fa'
import SkillPiece from './SkillPiece'
import Section4A from './Section4A'

function Section4() {
    return (
        <React.Fragment>
            <FaLightbulb size='50px' color='#F1CC04' className='mt-5'/>
            <div className='row justify-content-center mt-5'>
                <h1 className='col-12 mb-5'>Habilidades</h1>
                <div className='row justify-content-center backdiv' style={{width: '100%'}}>
                    <SkillPiece label='Desarrollo Web' data={['HTML', 'CSS', 'Javascript']} icon={<FaLaptopCode size='60px' color='#F1CC04'/>}/>      
                    <SkillPiece label='Frontend Framework' data={['Bootstrap', 'React']} icon={<FaNewspaper size='60px' color='#F1CC04'/>}/> 
                    <SkillPiece label='Backend Framework' data={['Laravel', 'PHP', 'MySQL']} icon={<FaCogs size='60px' color='#F1CC04'/>}/>
                    <SkillPiece label='Desarrollo App' data={['Swift']} icon={<FaMobileAlt size='60px' color='#F1CC04'/>}/>                   
                </div>            
            </div>

            <div className='row justify-content-center'>
                <div className='mt-5 col-6'>
                    <p className='gray font-italic' style={{fontSize: '13px', fontWeight: '100'}}>Responsable, activo, puntual, creativo, flexible, empatico, solidario, buen amigo.</p>
                </div>
            </div>

            <Section4A/>
        </React.Fragment>
    )
}

export default Section4
