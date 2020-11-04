import React from 'react'
import {Button} from 'antd'
import '../../../main.css'
import profile from '../common/profile.png'
import udacity from '../common/udacity.JPG'
import dmtech from '../common/dmtech.png'
import mintcolleg from '../common/mintcolleg.png'
import git from '../common/git.png'
import github from '../common/github.png'
import javascript from '../common/3stack.png'

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
                    <div className=" box-one">
                        <img src={profile} alt="profile" width="300" height="320"/>
                    </div>
                    <div className=" box-two-1"> <p>Student / Full Stack Developer<br/><h3>Kihun Kim</h3> </p> </div>
                    <div className=" box-two-2">   <p>Hello Kihun is here, I'm studying industrial engineering at KIT. Industrial engineering is the interdisciplinary study field, which mean student can 
                                                    learn business and technology together. For both part I focus on computer science and coding mainly. 
                                                    <br/>
                                                    So my career goal is to become a software engineer and further make my on business with coding. In my study, especially on Math I made a great academical achievement.
                                                    Nowaday I'm spending almost whole time to learn coding and create a full stack development project.
                                                    In the free time I work out or cooking something for my friends.
                                                    </p> 
                    </div>
                    
                    <div className=" box-two-3">
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
                    <div className=" box-five-1">KIT WIWI </div>
                    <div className=" box-five-2">Udacity nanodegree</div>
                    <div className=" box-six">WORKING EXPERIENCE</div>
                    <div className=" box-seven-1">dmTech</div>
                    <div className=" box-seven-2">mintcolleg</div>

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
                    <div className=" box-nine">PROGRAMMING SKILLS</div>
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
                    <div className=" box-eleven-1">MERN stack</div>
                    <div className=" box-eleven-2">JS HTML CSS</div>
                    <div className=" box-eleven-3">Git & Github</div>

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
