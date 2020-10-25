import React,{useState} from 'react'
import Dropzone from 'react-dropzone'
import {Typography,Button,Form,message,Input,Icon} from 'antd'
import Axios from 'axios'
const {Title} = Typography;
const {TextArea} = Input;


function VideoUploadPage(props) {

    const [VideoTitle, setVideoTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [FilePath, setFilePath] = useState("")
    const [Duration, setDuration] = useState("")
    const [ThumbnailPath, setThumbnailPath] = useState("")



    const onTitleChange = (event) => {
        setVideoTitle(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescription(event.currentTarget.value)
    }



    const onDrop = (files) => {
        
        let formData = new FormData();
        const config = { 
            header : {'content-type' : 'multipart/form-data'}
        }
        formData.append("file",files[0])  // get first file = get only one file 
        console.log(files)

        Axios.post('/api/video/uploadfiles',formData,config)
            .then(response => {
                if(response.data.success){
                    console.log(response.data)
                    setFilePath(response.data.url)
                
          
            let variable = { 
                url:response.data.url,
                fileName:response.data.fileName
            }

        Axios.post('/api/video/thumbnail',variable)
            .then(response => { 
                if(response.data.success){
                    console.log(response.data)
                    setDuration(response.data.fileDuration)
                    setThumbnailPath(response.data.url)
                } else{
                    alert('fail to make thumbnail')
                }
            })
        }else{
            alert('fail to upload video')
        }
    })
}


    const onSubmit = (event) => {
        event.preventDefault();

        let variable = {
            writer : localStorage.getItem("userId"),
            title : VideoTitle,
            description : Description,
            filePath : FilePath,
            duration : Duration,
            thumbnail : ThumbnailPath
        }

        Axios.post('/api/video/uploadVideo',variable)
            .then(response => {
                if(response.data.success){
                    message.success('successfully upload video')
                    setTimeout(() => {
                        props.history.push('/')
                    },2000)
                }else{
                    alert('fail to upload video')
                }
            })
    }

    return (
        <div style={{maxWidth:'700px',margin:'2rem auto'}}>
            <div style={{ textAlign:'center',marginBottom:'2rem'}}>
                <Title level={2}>Upload video</Title>
            </div>


            <Form onSubmit>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                   
                    {/*Drop zone*/}

                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={10000000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                {...getRootProps()}>
                        
                                <input {...getInputProps()} />
                                <Icon type="plus" style={{ fontSize: '3rem' }} />

                            </div>
                        )}
                    </Dropzone>
                    {/* Thumbnail */}
                    {ThumbnailPath && 
                        <div>
                            <img src={`http://localhost:5000/${ThumbnailPath}`} alt="thumbnail"/>
                        </div>
                    }
                
                </div>

                <br />
                <br />
                <label>Title</label>
                <Input 
                
                    onChange={onTitleChange}
                    value={VideoTitle}
                
                />
                <br />
                <br />
                <label>Description</label>

                <TextArea
                    onChange={onDescriptionChange}
                    value={Description}
                />
                <br />
                <br />

                <Button type="primary" size="large" onClick={onSubmit}>
                    Submit
                </Button>

            </Form>


        </div>
    )
}

export default VideoUploadPage
