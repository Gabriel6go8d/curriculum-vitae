import React from 'react'
import {FaFilm, FaHatWizard} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'

function Section4A() {
    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-10 backdiv'> 
                <div className='row justify-content-between'>               
                    <div className='col-12 col-md-5 labelR'>
                        <h4>Intereses</h4>
                        <div className='row m-0 p-0 mt-3 text-center'>
                            <div className='col-4'>
                                <div style={{height: '40px'}}><IoLogoGameControllerB size='40px' color='#F1CC04'/></div>
                                <p className='gray'>Game</p>
                            </div>
                            <div className='col-4'>
                                <div style={{height: '40px'}}><FaHatWizard size='30px' color='#F1CC04'/></div>
                                <p className='gray'>Anime</p>
                            </div>
                            <div className='col-4'>
                                <div style={{height: '40px'}}><FaFilm size='40px' color='#F1CC04'/></div>
                                <p className='gray'>Cine</p>
                            </div>
                        </div>
                    </div>   
                    <div className='col-12 col-md-5 labelL marginT'>
                        <h4>Idiomas</h4>
                        <div className='m-0 p-0 mt-3 justify-content-center justify-content-md-start' style={{display: 'flex'}}> 
                            <p>Español:</p>
                            <p className='gray ml-2'>Nativo</p>
                        </div>
                        <div className='m-0 p-0 justify-content-center justify-content-md-start' style={{display: 'flex'}}> 
                            <p>Ingles:</p>
                            <p className='gray ml-2'>B2</p>
                        </div>
                    </div> 
                </div>                 
            </div>            
        </div>
    )
}

export default Section4A
