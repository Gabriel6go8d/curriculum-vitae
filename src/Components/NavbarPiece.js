import React, {useState, useEffect} from 'react'
import {FaCaretDown} from 'react-icons/fa'

function NavbarPiece(prop) {

    const[styleBox, setStyleBox] = useState('')
    const[styleArrow, setStyleArrow] = useState('arrowhidde')

    const ReadPosition = () => {
        let part2PY = document.getElementById('section-2').offsetTop - window.innerHeight/2
        let part3PY = document.getElementById('section-3').offsetTop - window.innerHeight/2
        let part4PY = document.getElementById('section-4').offsetTop - window.innerHeight/2
        let part5PY = document.getElementById('section-5').offsetTop - window.innerHeight/2
        let part6PY = document.getElementById('section-6').offsetTop - window.innerHeight/2
        let scrollPY = Math.floor(document.body.getBoundingClientRect().y) * (-1)
        var position = '0'
        if (scrollPY < part2PY){
            position = '1'
        }else if(scrollPY < part3PY){
            position = '2'
        }else if(scrollPY < part4PY){
            position = '3'
        }else if(scrollPY < part5PY){
            position = '4'
        }else if(scrollPY < part6PY){
            position = '5'
        }else{
            position = '6'
        }   
        
        if(prop.id===position){
            setStyleBox('boxfull2')
            setStyleArrow('')
        }else{
            setStyleBox('boxempty2')
            setStyleArrow('arrowhidde')
        }
    }

    useEffect(()=>{        
        window.addEventListener('scroll', ReadPosition)
        ReadPosition()
        return () => {
            window.removeEventListener('scroll', ReadPosition)
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const clickJump = (e) => {
        window.scrollTo({
            top:document.getElementById(e).offsetTop + 400, 
            behavior: "smooth" // smooth scroll.
        });  
    }

    return (
        <div className='col-2'>                
            <div className={`row box2 align-items-center ${styleBox}`} onClick={() => clickJump(prop.section)}>                    
                <div className='col'>
                    {prop.icon}
                </div>                    
            </div> 
            <div className={`row justify-content-center arrowdown ${styleArrow}`}>                    
                <FaCaretDown size='30px' color='#F1CC04'/>                    
            </div>  
        </div> 
    )
}

export default NavbarPiece
