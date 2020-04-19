import React from 'react'

function AboutMe() {
    return (
        <React.Fragment>
            <div className='row justify-content-center'>
                <div className='col align-self-center mt-4'>
                    <h1 className='bigname mt-2'>Gabriel Gutierrez</h1>
                    <h4 className='bigname_desc '>Web Designer / Web Developer</h4>
                </div>
            </div>
            <div className='row justify-content-center mt-5'>
                <div className='col-8'>  
                    <h1>About Me</h1>                  
                    <p className='mt-4 gray'>Hola, mi nombre es Gabriel y soy un Ing. en Telecomunicaciones que le encanta la programación. Cada dia se presentan nuevos retos y con ellos nuevos caminos, nuevas formas de ver las cosas y posibilidades de mejorar. Fanatico del anime y el cine de Marvel, Pro Apple aunque reconozco que hay mas marcas en este mundo. Soy activo y responsable, pero sobre todo, un Buen Amigo. </p>                    
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default AboutMe
