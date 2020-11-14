import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode} style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>
    <Menu.Item key="mail" >
      <a href="/">Home</a>
    </Menu.Item>

    <Menu.Item key="career">
      <a href="/career">Career</a>
    </Menu.Item>

       <Menu.Item key="project">
      <a href="/project">Projects</a>
    </Menu.Item>
   
  </Menu>
  )
}

export default LeftMenu