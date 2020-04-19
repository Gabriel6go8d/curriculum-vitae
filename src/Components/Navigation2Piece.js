import React, {useEffect, useState} from 'react'
import {FaCaretRight} from 'react-icons/fa'

function Navigation2Piece(prop) {

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
            setStyleBox('boxfull')
            setStyleArrow('')
        }else{
            setStyleBox('boxempty')
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
            top:document.getElementById(e).offsetTop + 30, 
            behavior: "smooth"
        });  
    }

    return (
        <div className='row'>                
            <div className={`col-11 box ${styleBox}`} onClick={() => clickJump(prop.section)}>
                <div className='row align-items-center' style={{height: '100%'}}>
                    <div className='col'>
                    {prop.icon}
                    <h3 className='navLabel m-0 p-0'>{prop.label}</h3>
                    </div>
                </div>
            </div> 
            <div className={`col-1 m-0 p-0 arrow ${styleArrow}`}>
                <div className='row align-items-center m-0 p-0' style={{height: '100%'}}>
                    <FaCaretRight size='30px' color='#F1CC04'/>
                </div>
            </div>  
        </div> 
    )
}

export default Navigation2Piece
