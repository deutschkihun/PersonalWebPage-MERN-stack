import { Button,Input } from 'antd'
import Axios from 'axios'
import React,{useState} from 'react'
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
const {TextArea} = Input;

function Comment(props) {


    const [commentvalue, setcommentvalue] = useState("")
    const onTextArea = (event) => {
        setcommentvalue(event.currentTarget.value)
    }


    const onSubmit = (event) => {
        event.preventDefault();

    const variable = {
        content : commentvalue,
        writer : localStorage.getItem("userId"),
        videoId : props.videoId
    }

        Axios.post('/api/comment/saveComment',variable)
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
            <br/>
            <p>Replies</p>
            <br/>   

            {/* Text box with submit */}
            <form onSubmit={onSubmit}>
            <TextArea 
                style={{ width: '100%', borderRadius:'5px'}}
                onChange={onTextArea}
                value={commentvalue}
                placeholder="write your comment"
                rows={4} 
            />
            <br/>
            <Button style={{ width:'10%', height:'35px',marginTop:'0.5rem',
                             backgroundColor:'#1890ff',color:'white',fontSize:'16px'}} onClick={onSubmit} >Submit</Button>  
            <br/><br/><br/><br/>                           
            </form>
    

            {/* Comment list */}
            {props.CommentLists && props.CommentLists.map((comment,index) => (
                (!comment.responseTo &&
                <React.Fragment>
                    <SingleComment refreshfunction={props.refreshfunction} comment={comment} key={index} videoId={props.videoId}/>
                    <ReplyComment refreshfunction={props.refreshfunction} parentCommentId={comment._id} videoId={props.videoId}  CommentLists={props.CommentLists} />
                </React.Fragment>
            )))}

        </div>
    )
}

export default Comment
