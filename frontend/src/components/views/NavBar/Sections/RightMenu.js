/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import {message} from 'antd';

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        message.success('successfully logout')
        setTimeout(() =>{
          props.history.push('/login')
      },2000)
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>
        <Menu.Item key="mail">
          <a href="/login">Sign-in</a>
        </Menu.Item>
        {/* <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item> */}
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode} style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>
        <Menu.Item key="app">
          <a href="/video">video upload</a>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

