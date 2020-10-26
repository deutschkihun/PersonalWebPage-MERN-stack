import Axios from 'axios'
import React,{useState,useEffect} from 'react'

function SideVideo() {
    
    
    const [SideVideo, setSideVideo] = useState([])
    
    useEffect(() => {
      

        Axios.get('/api/video/getVideo')
            .then(response => {
                if(response.data.success){
                    console.log(response.data.video)
                    setSideVideo(response.data.video)
                }else{
                    alert('fail to get side video')
                }
            })
    }, [])
    

    const renderCards = SideVideo.map((sidevideo,index) => {
        var minutes = Math.floor(sidevideo.duration / 60);
        var seconds = Math.floor(sidevideo.duration - minutes * 60);

        return <div key={index} style={{display:'flex',marginBottom:'1rem', padding:'3rem 1rem'}}>
        <div style={{width:'60%',marginRight:'1rem'}}>
        <a href={`${sidevideo._id}`} style={{color:'blue'}} >
            <img style={{width:'100%', height:'100%'}} src={`http://localhost:5000/${sidevideo.thumbnail}`} alt="thumbnail"/>
        </a>
        </div>
        
        <div style={{width:'100%'}}>
            <a href={`${sidevideo._id}`} style={{color:'gray'}}>
                <span style={{fontSize:'1rem', color:'black'}}>{sidevideo.title}</span><br />
                <span>{sidevideo.writer.name}</span><br />
                <span>{sidevideo.views} view</span><br />
                <span>runtime [{minutes} : {seconds}]</span>
            </a>
        </div>
    </div>
    })
    
    return (

        <React.Fragment>
            {renderCards}
        </React.Fragment>
    )
}

export default SideVideo
