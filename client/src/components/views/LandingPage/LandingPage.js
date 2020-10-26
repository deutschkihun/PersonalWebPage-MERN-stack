import React,{useState,useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import profile from '../common/profile.png'
import {Row,Typography,Avatar,Col,Card} from 'antd';
import Axios from 'axios';
import { UserOutlined,GithubFilled,LinkedinFilled,MailFilled } from '@ant-design/icons';
import moment from 'moment'
import MainImage from '../common/MainImage.jpg'
const {Title} = Typography;
const {Meta} = Card;
function LandingPage() {


    const [Video, setVideo] = useState([])

    useEffect(() => {
      Axios.get('/api/video/getVideo')
        .then(response => {
            if(response.data.success){
                setVideo(response.data.video)
            }else{
                alert('fail to get video')
            }
        })
    }, [])

    const renderCards = Video.map((video,index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);
        // defautl value of duration is second

        return <Col lg={8} md={12} xs={24}>
        <div key={index} style={{ position: 'relative' }}>
            <a href={`/video/${video._id}`} >
            <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
            <div className=" duration"
                style={{ bottom: 0, right:0, position: 'absolute', margin: '4px', 
                color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8, 
                padding: '2px 4px', borderRadius:'2px', letterSpacing:'0.5px', fontSize:'12px',
                fontWeight:'500', lineHeight:'12px' }}>
                <span>{minutes} : {seconds}</span>
            </div>
            </a>
        </div><br />
        <Meta
            avatar={
                <Avatar 
                style={{backgroundColor: '#87d068'}}
                icon={<UserOutlined/>}
                />
            }
            title={video.title}
        />
        <span>{video.writer.name} </span><br />
        <span style={{ marginLeft: '3rem' }}> {video.views}</span>
        - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
    </Col>
    })

    return (
        
        <div style={{width:'100%',margin:'0'}}>
            {/*Main Image*/}
                <div style={{background: `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%),
                url('${MainImage}'), #1c1c1c`,
                height: '700px',
                backgroundSize: '100%, cover',
                backgroundPosition: 'center, center',
                width: '100%',
                position: 'relative'}}>
                    <div style={{padding: '3rem'}}>
                    <img src={profile} alt="profile"/>
                    </div>

                <div>
                    <div style={{position:'absolute',maxWidth:'500px',bottom:'3rem',marginLeft:'4rem'}}>
                        <h1 style={{color:'white',fontSize:'3rem',lineHeight:'8px'}} >Kihun Kim</h1>
                        <br/>
                        <p style={{color:'white',fontSize:'1.5rem'}}>Coding Enthusiast</p>
                        <a href="https://github.com/deutschkihun">
                            <Meta
                                avatar={
                                <Avatar 
                                    style={{backgroundColor: '#1c1c1c'}}  
                                    icon={<GithubFilled />}
                                />}
                                />
                        </a>
                        <pre>  </pre>
                        <a href="https://www.linkedin.com/in/kihun-kim-b35b73174/">
                        <Meta
                            avatar={
                            <Avatar 
                                style={{backgroundColor: '#1c1c1c'}}  
                                icon={<LinkedinFilled />}
                               />}
                            />
                            </a>
                        <pre>  </pre>
                         <Meta
                            avatar={
                            <Avatar 
                                style={{backgroundColor: '#1c1c1c'}}  
                                icon={ <MailFilled />}
                               />}
                            />
                    </div>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>


               <div style={{ width: '85%', margin: '1rem auto',justifyContent:'center' }}>
                <Title level={1}>Introduction video</Title>
                <hr />

                {/*Introvideo video card component*/}
                <Row gutter={[16,16]}>
                    {renderCards}
                </Row>
               
            </div>


















            <div>
                <div className="app">
                    <FaCode style={{ fontSize: '4rem' }} /><br />
                    <span style={{ fontSize: '2rem' }}>The Result Never Betrays The Effort</span>
                </div>

                <div style={{ float: 'right' }}>
                    Kihun kim
                </div>
                </div>
        </div> 
          
    )
}


export default LandingPage
