import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faLightbulb, faGraduationCap, faBriefcase, faUser} from '@fortawesome/free-solid-svg-icons'
import smoothscroll from 'smoothscroll-polyfill';

function NavBar() {
    smoothscroll.polyfill();
    const [styleList, setStyleList] = useState(['boxfull', 'boxempty', 'boxempty', 'boxempty', '','arrowhidde','arrowhidde','arrowhidde'])

    const ReadPosition = (e) => {
        let part2PY = document.getElementById('section-2').offsetTop - window.innerHeight/2 +500
        let part3PY = document.getElementById('section-3').offsetTop - window.innerHeight/2 +500
        let part4PY = document.getElementById('section-4').offsetTop - window.innerHeight/2 +500
        let scrollPY = Math.floor(document.body.getBoundingClientRect().y) * (-1)
        if (scrollPY < part2PY){
            setStyleList(['boxfull2', 'boxempty2', 'boxempty2', 'boxempty2', '','arrowhidde','arrowhidde','arrowhidde'])
        }else if(scrollPY < part3PY){
            setStyleList(['boxempty2', 'boxfull2', 'boxempty2', 'boxempty2', 'arrowhidde','','arrowhidde','arrowhidde'])
        }else if(scrollPY < part4PY){
            setStyleList(['boxempty2', 'boxempty2', 'boxfull2', 'boxempty2', 'arrowhidde','arrowhidde','','arrowhidde'])
        }else{
            setStyleList(['boxempty2', 'boxempty2', 'boxempty2', 'boxfull2', 'arrowhidde','arrowhidde','arrowhidde',''])
        }    
    }

    useEffect(()=>{        
        window.addEventListener('scroll', ReadPosition)
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
        <React.Fragment>
            <img className='m-0 p-0' src='/gab4.jpg' style={{width: '100%'}}></img>
            
            <div className='row m-0 p-0' style={{position: 'sticky', top: '0px', zIndex: 10, backgroundColor: 'white'}}>
                <div className='col-3'>                
                    <div className={`row box2 align-items-center ${styleList[0]}`} onClick={() => clickJump('section-1')}>                    
                        <div className='col'>
                            <FontAwesomeIcon icon={faUser} size='lg' color='black'/>
                        </div>                    
                    </div> 
                    <div className={`row justify-content-center arrowdown ${styleList[4]}`}>                    
                        <FontAwesomeIcon icon={faCaretDown} size='2x' color='#F1CC04'/>                    
                    </div>  
                </div> 

                <div className='col-3'>                
                    <div className={`row box2 align-items-center ${styleList[1]}`} onClick={() => clickJump('section-2')}>
                        <div className='col'>
                            <FontAwesomeIcon icon={faBriefcase} size='lg' color='black'/>
                        </div>
                    </div> 
                    <div className={`row justify-content-center arrowdown ${styleList[5]}`}>                    
                        <FontAwesomeIcon icon={faCaretDown} size='2x' color='#F1CC04'/>                    
                    </div>  
                </div> 

                <div className='col-3'>                
                    <div className={`row box2 align-items-center ${styleList[2]}`} onClick={() => clickJump('section-3')}>
                        <div className='col'>
                            <FontAwesomeIcon icon={faGraduationCap} size='lg' color='black'/>
                        </div>
                    </div> 
                    <div className={`row justify-content-center arrowdown ${styleList[6]}`}>                    
                        <FontAwesomeIcon icon={faCaretDown} size='2x' color='#F1CC04'/>                    
                    </div> 
                </div> 

                <div className='col-3'>                
                    <div className={`row box2 align-items-center ${styleList[3]}`} onClick={() => clickJump('section-4')}>
                        <div className='col'>
                            <FontAwesomeIcon icon={faLightbulb} size='lg' color='black'/>
                        </div>
                    </div> 
                    <div className={`row justify-content-center arrowdown ${styleList[7]}`}>                    
                        <FontAwesomeIcon icon={faCaretDown} size='2x' color='#F1CC04'/>                    
                    </div> 
                </div>
            </div>   
        </React.Fragment>         
    )
}

export default NavBar
