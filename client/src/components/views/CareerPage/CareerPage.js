import React from 'react'
import {Button,Card} from 'antd'
import {FaQuoteRight } from 'react-icons/fa';
import '../../../main.css'
import profile from '../common/profile.png'
import udacity from '../common/udacity.JPG'
import dmtech from '../common/dmtech.png'
import mintcolleg from '../common/mintcolleg.png'
import git from '../common/git.png'
import github from '../common/github.png'
import javascript from '../common/3stack.png'
import tensorflow from '../common/tensorflow.png'
import google from '../common/google.png'

const {Meta} = Card;

function CareerPage() {
    return (
        <div>
            <main>
            <div>
                <br/>
                <br/> 
                <br/>
                <br/>
                <br/> 
            </div>
                <div className="main-container">




                    <article className="box-one">
                        <div className="img-container">
                            <img src={profile} alt="profile" className='person-img'/>
                            <span className='quote-icon'>
                                <FaQuoteRight />
                            </span>
                        </div>

                        <h4 className='author'>Kihun Kim</h4>
                        <p className='job'>Student / Full stack developer / Coding Enthusiast</p>
                        <p className='info'>
                        Hello Kihun is here, I'm studying industrial engineering at KIT. Industrial engineering is the interdisciplinary study field,
                        So students have a chance to get to know business and engineering together.For both part I mainly focus on computer sciecne and mathematics.
                        <br/>
                        So my career goal is to become a software engineer and further make my on business with coding. Normally I spend my time to learn coding 
                        make my own personal project or try to get a chance to practice coding in many different ways
                        </p>
                    </article>



                    <div className=" box-two">
                        <a href="https://drive.google.com/file/d/1C74AepUOLJbCUR66ee-fhLKMZlVHvFc9/view?usp=sharing" target="_blank">
                            <Button>Download CV</Button>
                        </a>
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <a href="mailto:deutschkihun@gmail.com">
                            <Button>Contact</Button>  
                         </a>
                    </div>

                    <div className=" box-three">ACADEMIC BACKGROUND</div>
               
                    <div className=" box-four-1">
                        <a href="https://www.kit.edu/" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Logo_KIT.svg/2000px-Logo_KIT.svg.png"
                         width='250' height='130'alt="kit"/>  
                        </a>
                    </div>
                    <div className=" box-four-2">
                      <a href="https://www.udacity.com/course/data-analyst-nanodegree--nd002" target="_blank">
                            <img src={udacity}
                         width='500' height='130'alt="kit"/>  
                        </a>  
                    </div>
                    <div className=" box-five-1">
                        <p style={{display:'inline-flex'}}>Education</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Major :Industrial Engineering</li>
                            <li>Bachelor of science</li>
                            <li>From Oct. 2017 to present</li>
                            <li>Advance field : mathemathical optimization & computer science</li>
                        </ul>
                    </div>
                    <div className=" box-five-2">
                        <p style={{display:'inline-flex'}}>Nanodegree</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Data Analyst nanodegree program</li>
                            <li>Provided by Udacity</li>
                            <li>From Feb. 2020 to May 2020</li>
                            <li>Python programing for data analysis with statistic background</li>
                            <li><a href="https://drive.google.com/file/d/1bSGPpEvvfNC6ZjTMYVsgNm9azys5aT6N/view?usp=sharing" target="_blank">
                            <Button>See Certificate</Button>
                        </a></li>
                        </ul>
                    </div>
                    
                    <div className=" box-six">WORKING EXPERIENCE</div>
                    <div className=" box-seven-1">
                        <p style={{display:'inline-flex'}}>Working Student</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Customoer recipt data management</li>
                            <li>Daily data warehouse controlling with SQL</li>
                            <li>Debug reporting of data warehouse with SQL</li>
                            <li><a href="https://drive.google.com/file/d/1hcUIODMNDrFPiHijQib1IXmngAGTFtWB/view?usp=sharing" target="_blank">
                            <Button>Employment reference</Button>
                        </a></li>
                        </ul>
                    </div>
                    <div className=" box-seven-2">
                         <p style={{display:'inline-flex'}}>Math Tutor</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Teaching math for computer sciecne students</li>
                            <li>Explanation of excercise</li>
                            <li>Lead question and answer session</li>
                            <li>Lecture field: Integral,Derivative,log & exponential function</li>
                            <li><a href="https://drive.google.com/file/d/10wy637QRz0jTBr2QOn4LOPpaR5FTH-Uk/view?usp=sharing" target="_blank">
                            <Button>Employment reference</Button>
                        </a></li>
                        </ul>
                    </div>

                    <div className=" box-eight-1">
                        <a href="https://www.dm-jobs.com/dmTECH/?locale=de_DE" target="_blank">
                            <img src={dmtech}
                         width='200' height='130'alt="kit"/>  
                        </a>
                    </div>
                    <div className=" box-eight-2">
                        <a href="https://www.mint-kolleg.kit.edu/" target="_blank">
                            <img src={mintcolleg}
                         width='250' height='200'alt="kit"/>  
                        </a>
                    </div>
                    <div className=" box-nine">PROGRAMMING SKILLS </div>
                    <div className=" box-ten-1">
                        <img src="https://camo.githubusercontent.com/585d02eb537edcb1ba9d7ca79d6e1c5a3328aa2d/68747470733a2f2f692e696d6775722e636f6d2f45543747484d342e706e67"
                         width='300' height='130'alt="kit"/>  
                    </div>
                    <div className=" box-ten-1">
                        <img src="https://camo.githubusercontent.com/585d02eb537edcb1ba9d7ca79d6e1c5a3328aa2d/68747470733a2f2f692e696d6775722e636f6d2f45543747484d342e706e67"
                         width='300' height='130'alt="kit"/>  
                    </div>
                    <div className=" box-ten-2">
                        <img src={javascript}
                         width='300' height='130'alt="kit"/>  
                    </div>
                    <div className=" box-ten-3">
                        <img src={git} width='130' height='130'alt="kit"/>  
                        <img src={github} width='130' height='130'alt="kit"/>  
                    </div>
                    <div className=" box-ten-4">
                        <img src={tensorflow} width='280' height='130'alt="kit"/> 
                        <img src={google} width='180' height='200'alt="kit"/>  
 
                    </div>

                    <div className=" box-eleven-1">
                        <p style={{display:'inline-flex'}}>MERN Stack</p>
                        <ul style={{textAlign:'left'}}>
                            <li>MERN Stack = Mongo DB & Express JS & React & nodejs</li>
                            <li>Standard full stack development package</li>
                            <li>Several projects experience</li>
                            <li>Skill level : Intermediate </li>
                            <li><a href="/project">
                            <Button>See all my MERN stack projects</Button>
                        </a></li>
                        </ul>
                    </div>
                    <div className=" box-eleven-2">
                        <p style={{display:'inline-flex'}}>Javascript & HTML & CSS</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Fundamental knowledge for Web development</li>
                            <li>Several projects experience</li>
                            <li>Skill level : Intermediate </li>
                            <li><a href="/project">
                            <Button>See all my related skill projects</Button>
                        </a></li>
                        </ul>
                    </div>
                    <div className=" box-eleven-3">
                         <p style={{display:'inline-flex'}}>Git & Github</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Most popular distributed version control system</li>
                            <li>Tracking changes in source code during software development</li>
                            <li>All my projects are managed by Git and Github</li>
                            <li><a href="https://github.com/deutschkihun?tab=repositories" target="_blank">
                            <Button>See my Repository</Button>
                        </a></li>
                        </ul>
                    </div>

                    <div className=" box-eleven-4">
                         <p style={{display:'inline-flex'}}>Machine learning with Tensorflow</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Machine learning library tensorflow certificate</li>
                            <li>issued by Tesorflow & Google</li>
                            <li>Basic knowledge of time series & NLP & image classification </li>
                            <li><a href="https://drive.google.com/file/d/1gI0IZuz2WZL8H7CxLOFDwApnyEwgpRkE/view?usp=sharing" target="_blank">
                            <Button>See certificate</Button>
                        </a></li>
                        </ul>
                    </div>


                </div>
             <div>
                <br/>
                <br/> 
                <br/>
                <br/>
                <br/> 
            </div>

            </main>
        </div>
    )
}

export default CareerPage
