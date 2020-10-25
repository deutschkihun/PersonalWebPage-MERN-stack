import { Button } from 'antd'
import Axios from 'axios'
import React,{useState} from 'react'
import SingleComment from './SingleComment';

function Comment(props) {


    const [commentvalue, setcommentvalue] = useState("")
    const onTextArea = (event) => {
        setcommentvalue(event.currentTarget.value)
    }


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
            <br/>
            <p>Replies</p>
            <br/>       

            {/* Comment list */}
            {props.CommentLists && props.CommentLists.map((comment,index) => (
                <React.Fragment>
                    <SingleComment comment={comment} key={index} refreshfunction={props.refreshfunction} videoId={props.videoId}/>
                </React.Fragment>
            ))}



            {/* Text box with submit */}
             <form style={{display:'flex'}} onSubmit>
                 <textarea
                    style={{width:'100%', borderRadius:'5px'}}
                    onChange={onTextArea}
                    value={commentvalue}
                    placeholder="write your comment here"
                 >
                 </textarea>
                 <br/>
                 <Button style={{width:'10%',height:'52px'}} onClick={onSubmit}>Submit</Button>
             </form>


        </div>
    )
}

export default Comment
