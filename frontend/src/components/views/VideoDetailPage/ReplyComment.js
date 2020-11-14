import React,{useState,useEffect} from 'react'
import SingleComment from './SingleComment';

function ReplyComment(props) {
   
   const [OpenReplyComments, setOpenReplyComments] = useState(false)
   const [ChildCommentNumber, setChildCommentNumber] = useState(0)

   useEffect(() => {
     
    let commentNumber = 0;

    props.CommentLists.map((comment) => {
        if( comment.responseTo === props.parentCommentId ) {
            commentNumber ++
        }
    })
    setChildCommentNumber(commentNumber)

}, [props.CommentLists])
  

    const renderReplyComment = (parentCommentId) => 
    props.CommentLists.map((comment,index) => (
        <React.Fragment>
        {
            comment.responseTo === props.parentCommentId && 
            <div key={index} style={{width:'80%',marginLeft:'40px'}}>
            <SingleComment refreshfunction={props.refreshfunction} comment={comment} key={index} videoId={props.videoId}/>
            <ReplyComment refreshfunction={props.refreshfunction} CommentLists={props.CommentLists} parentCommentId={comment._id} videoId={props.videoId} />
            </div>
        }
    </React.Fragment>
    ))

    const onHandleChange = () => {
        setOpenReplyComments(!OpenReplyComments)    
    }

    return (
        <div>
            {ChildCommentNumber > 0 &&
               <p style={{fontSize:'14px', margin:0,color:'gray'}} onClick={onHandleChange}>
                  View {ChildCommentNumber} replies
               </p>
            }

            {OpenReplyComments && 
                renderReplyComment(props.parentCommentId)
            }
            
        </div>
    )
}

export default ReplyComment