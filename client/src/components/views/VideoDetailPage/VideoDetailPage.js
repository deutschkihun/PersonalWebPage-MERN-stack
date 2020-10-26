import React,{useEffect,useState} from 'react'
import {Row,Col,List, Avatar} from 'antd';
import Axios from 'axios';
import { UserOutlined } from '@ant-design/icons';
import SideVideo from './SideVideo';
import Comment from './Comment';
import LikeDislike from './LikeDislike';


function VideoDetailPage(props) {
    
    const videoId = props.match.params.videoId
    const variable = {videoId : videoId}

    const [VideoDetail, setVideoDetail] = useState([])
    const [CommentLists, setCommentLists] = useState([])
    

    useEffect(() => {
        
        Axios.post('/api/video/getVideoDetail',variable)
            .then(response => {
                if(response.data.success){
                    setVideoDetail(response.data.videoDetail)
                }else{
                    alert('fail to get video detail')
                }
            })


        Axios.post('/api/comment/getComments',variable)
            .then(response => {
                if(response.data.success){
                    setCommentLists(response.data.comments)
                }else{
                    alert('fail to get comment')
                }
            })
    }, [])

   
    const refreshfunction = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }


    return (
        <Row>
            <Col lg={18} xs={24}>
                <div className="postPage" style={{width:'100%', padding:'3rem 2rem'}}>
                <video style={{ width: '100%' }} src={`http://localhost:5000/${VideoDetail.filePath}`} controls></video>

                    <List.Item
                        actions={[ <LikeDislike video videoId={videoId} userId={localStorage.getItem("userId")} /> ]}>

                            <List.Item.Meta
                              avatar={
                                  <Avatar style={{background:'#87d068'}}
                                          icon={<UserOutlined/>}
                                          src={VideoDetail.writer && VideoDetail.writer.image}/>}
                              title={VideoDetail.title}
                              description={VideoDetail.description}
                            />
                            <div></div>
                        </List.Item>
                        {/*Comment */}     
                        <Comment refreshfunction={refreshfunction} CommentLists={CommentLists} videoId={videoId} />
                </div>
            </Col>
            <Col lg={6} xs={24}>
            <SideVideo/>
            </Col>
        </Row>
    )
}

export default VideoDetailPage
