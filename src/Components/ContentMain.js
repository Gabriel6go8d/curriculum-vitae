import React from 'react'
import Section1 from './Section1';
import Section3 from './Section3';
import Section2 from './Section2';
import Section4 from './Section4';

function ContentMain() {
    return (
        <div className='col-12 col-lg-10'>
            <section id="section-1">
                <Section1/> 
            </section>
            
            <section id="section-2" className='mt-5'>
                <Section2/>
            </section>

            <section id="section-3">
                <Section3/> 
            </section>

            <section id="section-4">
                <Section4/> 
            </section>  
        </div>
    )
}

export default ContentMain
