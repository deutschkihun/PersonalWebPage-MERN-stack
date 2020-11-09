import React,{} from 'react'
import {Card,Col,Typography,Row,Avatar} from 'antd'
import projects from '../../../data'
import {FundProjectionScreenOutlined} from '@ant-design/icons';
import moment from 'moment'
const {Meta} = Card
const {Title} = Typography;

function ProjectPage() {


    const projectCards = projects.map((project) => {
      const {id,title,img} = project
      return (
        <Col lg={8} md={12} xs={24} style={{paddingBottom:'3rem'}}>     
          <div key={id} style={{ position:'relative'}}>
            <a href={`/project/${id}`}>
              <img style={{ width: '100%'}} alt={title} src={img}/>
            </a>
          </div>
          <br/>
            <Meta
            avatar={
                <Avatar 
                style={{backgroundColor: 'transparent',color:'black'}}
                icon={<FundProjectionScreenOutlined />}
                />
            }
            title={title}
        />
        <span> upload : {moment(project.createdAt).format("MMM Do YY")} </span>
        </Col>
     )})
    


    
    return(
      <div style={{width:'85%',margin:'5rem auto ',justifyContent:'center',fontFamily:'Comic Sans MS, Comic Sans, cursive'}} >
      <Title level={2}>MY PROJECTS LISTS</Title>
      <hr />      
      <Row gutter={[16,16]}>
          {projectCards}
      </Row>
     

      </div >
    )
  
}

export default ProjectPage






