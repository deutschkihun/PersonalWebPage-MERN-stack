import React,{useState} from 'react'
import {Comment, Avatar,Button,Input} from 'antd';
import Axios from 'axios';

function SingleComment(props) {
    
    
    
    const [commentvalue, setcommentvalue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    const onHandleChange = (event) => {
        setcommentvalue(event.currentTarget.value)
    }

    const onClickReplayOpen = () => {
        setOpenReply(!OpenReply)
    }

    const actions = [
        <span onClick={onClickReplayOpen} key="comment-list-reply-to-0">Reply to</span>
    ]

    

    const onSubmit = (event) => {
        event.preventDefault();

    const variable = {
        comment : commentvalue,
        writer : localStorage.getItem("userId"),
        videoId : props.videoId
    }

        Axios.post('/api/comment/saveComments',variable)
            .then(response => {
                if(response.data.success){
                    setcommentvalue("")
                    props.refreshfunction(response.data.result)
                }else{ 
                    alert('fail to save comment')
                }
            })
    }
    
    return (
        <div>
            {console.log(props.comment)}
            <Comment
             
            />

            {OpenReply && 
            <form style={{display:'flex'}} onSubmit={onSubmit}>
            <textarea
                style={{ width: '100%', borderRadius:'5px'}}
                onChange={onHandleChange}
                value={commentvalue}
                placeholder="write your comment"
            />
            <br />
            <Button style={{ width:'20%', height:'52px'}} onClick={onSubmit} >Submit</Button>
            </form>
        }
        </div>
    )
}
s
{/* https://ant.design/components/comment/#header*/}
export default SingleComment
