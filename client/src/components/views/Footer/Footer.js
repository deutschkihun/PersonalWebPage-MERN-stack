import React from 'react'
import '../NavBar/Sections/Navbar.css'
import {Avatar} from 'antd';
import {GithubFilled,LinkedinFilled,MailFilled,CopyrightOutlined} from '@ant-design/icons';


function Footer() {
    return (
        <div className='footer'>
            <nav>
                <div className="nav_items">
                    <ul>
                        <li><a href="/">Home  </a></li>
                        <li><a href="/career">Career</a></li>
                        <li><a href="/project">Projects  </a></li>
                    </ul>
                </div>
            </nav>
            <span style={{justifyContent:"center"}}>
                <a  href="https://github.com/deutschkihun" target="_blank">
                        <Avatar
                            style={{color:'black',backgroundColor:'rgb(223 223 226)'}}  
                            icon={<GithubFilled />}
                        /> </a>
                 <a href="https://www.linkedin.com/in/kihun-kim-b35b73174/" target="_blank">
                        <Avatar
                            style={{color:'black',backgroundColor:'rgb(223 223 226)'}}
                            icon={<LinkedinFilled />}
                        /> </a>

                <a href="mailto:deutschkihun@gmail.com">
                        <Avatar
                            style={{color:'black',backgroundColor:'rgb(223 223 226)'}}  
                            icon={<MailFilled />}
                         /></a>
            </span>
           <p style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}> <Avatar style={{color:'black',backgroundColor:'rgb(223 223 226)'}}  icon={<CopyrightOutlined />}/> 
            2020 Kihun Kim. All rights reserved.</p>
        </div>
    )
}

export default Footer
