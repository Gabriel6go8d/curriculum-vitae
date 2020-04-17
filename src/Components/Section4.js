import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceD6} from '@fortawesome/free-solid-svg-icons'

function Section4() {
    return (
        <React.Fragment>
            <div className='row justify-content-center mt-5'>
                <h1 className='col-12'>Skills</h1>
                <div className='col-10 mt-5 backdiv'>
                    Laborum occaecat labore dolore commodo irure adipisicing amet officia. Deserunt fugiat deserunt aliqua quis mollit velit. Occaecat est labore sint aliquip labore occaecat nostrud reprehenderit ullamco aliqua sit voluptate. Ex laboris nisi elit proident ut dolore consequat incididunt irure dolore dolore sint reprehenderit nostrud. Est labore excepteur qui aute amet qui labore culpa.        
                </div>            
            </div>
            <FontAwesomeIcon icon={faDiceD6} size='3x' color='#F1CC04' className='mt-5'/>
        </React.Fragment>
    )
}

export default Section4
