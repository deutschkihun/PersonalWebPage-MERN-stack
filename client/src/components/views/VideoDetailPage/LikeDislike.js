import React,{useEffect,useState} from 'react'
import {Tooltip, Icon} from 'antd';
import Axios from 'axios';




function LikeDislike(props) {

    let variable = {}

    if(props.video){
        variable = { videoId :props.videoId, userId : props.userId}
    }else{
        variable = {commentId : props.commentId,userId : props.userId}
    }


    const [Likes, setLikes] = useState(0)
    const [LikesAction, setLikesAction] = useState(null)
    const [Dislikes, setDislikes] = useState(0)
    const [DislikesAction, setDislikesAction] = useState(null)



    useEffect(() => {

        Axios.post('/api/like/getlikes',variable)
            .then(response => {
                if(response.data.success){
                    setLikes(response.data.like.length)
                    response.data.like.map(like => {
                        if(like.userId === props.userId){
                            setLikesAction('liked')
                        }
                    })
                }else{
                    alert('fail to get like')
                }
            })

        Axios.post('/api/like/getdislikes',variable)
            .then(response => {
                if(response.data.success){
                    setDislikes(response.data.dislike.length)
                    response.data.dislike.map(dislike => {
                        if(dislike.userId === props.userId){
                            setDislikesAction('disliked')
                        } 
                    })
                }else{
                    alert('fail to get dislike')
                }
            })
    }, [])


    
    const onLike = () => { 
        if(LikesAction === null){
         // null mean wasn't clicked
        Axios.post('/api/like/uplike',variable)
            .then(response => {
                if(response.data.success){
                    setLikes(Likes + 1)
                    setLikesAction('liked')

                    if(DislikesAction !== null){
                        setDislikesAction(null)
                        setDislikes(Dislikes-1)
                    }
                }else{
                    alert('fail to uplike')
                }
            })
        } else { 
            Axios.post('/api/like/unlike',variable)
            .then(response => {
                if(response.data.success){
                    setLikesAction(null)
                    setLikes(Likes-1)
                }else{
                    alert('fail to unlike')
                }
            })
        }
      
    }

    const onDislike = () => {

        if (DislikesAction !== null) {
            Axios.post('/api/like/undisLike', variable)
                .then(response => {
                    if (response.data.success) {
                        setDislikes(Dislikes - 1)
                        setDislikesAction(null)
                    } else {
                        alert('Failed to decrease dislike')
                    }
                })

        } else {

            Axios.post('/api/like/updisLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setDislikes(Dislikes + 1)
                        setDislikesAction('disliked')

                        //If dislike button is already clicked
                        if(LikesAction !== null ) {
                            setLikesAction(null)
                            setLikes(Likes - 1)
                        }
                    } else {
                        alert('Failed to increase dislike')
                    }
                })


        }


    }       


    return (
        <div>
           <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon type="like"
                          theme={LikesAction === 'liked' ? 'filled' : 'outlined'} 
                          onClick={onLike}
                    />
                </Tooltip>
                <span style={{paddingLeft:'8px',cursor:'auto'}}>{Likes}</span>
            </span>
            <span>        </span>
            <span key="comment-basic-dislike">
                <Tooltip title="Dislike">
                    <Icon type="dislike"
                          theme={DislikesAction === 'disliked' ? 'filled' : 'outlined'}
                          onClick={onDislike}
                    />
                </Tooltip>
                <span style={{paddingLeft:'8px',cursor:'auto'}}>{Dislikes}</span>
            </span>
        </div>
    )
}

export default LikeDislike
