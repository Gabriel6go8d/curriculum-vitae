import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight, faLightbulb, faGraduationCap, faBriefcase, faUser} from '@fortawesome/free-solid-svg-icons'

function Navigation() {

    const [styleList, setStyleList] = useState(['boxfull', 'boxempty', 'boxempty', 'boxempty', '','arrowhidde','arrowhidde','arrowhidde'])

    const ReadPosition = (e) => {
        let part2PY = document.getElementById('section-2').offsetTop - window.innerHeight/2
        let part3PY = document.getElementById('section-3').offsetTop - window.innerHeight/2
        let part4PY = document.getElementById('section-4').offsetTop - window.innerHeight/2
        let scrollPY = Math.floor(document.body.getBoundingClientRect().y) * (-1)
        if (scrollPY < part2PY){
            setStyleList(['boxfull', 'boxempty', 'boxempty', 'boxempty', '','arrowhidde','arrowhidde','arrowhidde'])
        }else if(scrollPY < part3PY){
            setStyleList(['boxempty', 'boxfull', 'boxempty', 'boxempty', 'arrowhidde','','arrowhidde','arrowhidde'])
        }else if(scrollPY < part4PY){
            setStyleList(['boxempty', 'boxempty', 'boxfull', 'boxempty', 'arrowhidde','arrowhidde','','arrowhidde'])
        }else{
            setStyleList(['boxempty', 'boxempty', 'boxempty', 'boxfull', 'arrowhidde','arrowhidde','arrowhidde',''])
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
            top:document.getElementById(e).offsetTop + 30, 
            behavior: "smooth" // smooth scroll.
        });  
    }

    return (
        <div className='col-12 col-lg-2' style={{position: 'sticky', top: '0px', height:'80vh'}}> 
            <div className='col-10'>
            <div className='row justify-content-start'>
                <div className='col-11 m-0 p-0'>
                    <img src='/gabriel.jpg' alt='Gabriel' style={{width: '100%'}} className='p-0 m-0'></img>
                </div>
            </div> 

            <div className='row'>                
                <div className={`col-11 box ${styleList[0]}`} onClick={() => clickJump('section-1')}>
                    <div className='row align-items-center' style={{height: '100%'}}>
                        <div className='col'>
                        <FontAwesomeIcon icon={faUser} size='lg' color='black'/>
                        <p className='navLabel'>ABOUT ME</p>
                        </div>
                    </div>
                </div> 
                <div className={`col-1 m-0 p-0 arrow ${styleList[4]}`}>
                    <div className='row align-items-center m-0 p-0' style={{height: '100%'}}>
                    <FontAwesomeIcon icon={faCaretRight} size='2x' color='#F1CC04'/>
                    </div>
                </div>  
            </div> 

            <div className='row'>                
                <div className={`col-11 box ${styleList[1]}`} onClick={() => clickJump('section-2')}>
                    <div className='row align-items-center' style={{height: '100%'}}>
                        <div className='col'>
                        <FontAwesomeIcon icon={faBriefcase} size='lg' color='black'/>
                        <p className='navLabel'>EXPERIENCE</p>
                        </div>
                    </div>
                </div> 
                <div className={`col-1 m-0 p-0 arrow ${styleList[5]}`}>
                    <div className='row align-items-center m-0 p-0' style={{height: '100%'}}>
                    <FontAwesomeIcon icon={faCaretRight} size='2x' color='#F1CC04'/>
                    </div>
                </div>  
            </div> 

            <div className='row'>                
                <div className={`col-11 box ${styleList[2]}`} onClick={() => clickJump('section-3')}>
                    <div className='row align-items-center' style={{height: '100%'}}>
                        <div className='col'>
                        <FontAwesomeIcon icon={faGraduationCap} size='lg' color='black'/>
                        <p className='navLabel'>EDUCATION</p>
                        </div>
                    </div>
                </div> 
                <div className={`col-1 m-0 p-0 arrow ${styleList[6]}`}>
                    <div className='row align-items-center m-0 p-0' style={{height: '100%'}}>
                    <FontAwesomeIcon icon={faCaretRight} size='2x' color='#F1CC04'/>
                    </div>
                </div>  
            </div> 

            <div className='row'>                
                <div className={`col-11 box ${styleList[3]}`} onClick={() => clickJump('section-4')}>
                    <div className='row align-items-center' style={{height: '100%'}}>
                        <div className='col'>
                        <FontAwesomeIcon icon={faLightbulb} size='lg' color='black'/>
                        <p className='navLabel'>SKILLS</p>
                        </div>
                    </div>
                </div> 
                <div className={`col-1 m-0 p-0 arrow ${styleList[7]}`}>
                    <div className='row align-items-center m-0 p-0' style={{height: '100%'}}>
                    <FontAwesomeIcon icon={faCaretRight} size='2x' color='#F1CC04'/>
                    </div>
                </div>  
            </div>
        </div>     
        </div>       
    )
}

export default Navigation
