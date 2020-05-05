import React, { Component } from 'react';
import {Layout,Menu} from "antd"
import {Link} from "react-router-dom"
class Navbar extends Component {
    render() {
        return (
            <div>
                      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/dashboard">App&Geek</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/register">Register</Link></Menu.Item>
      </Menu>
            </div>
        );
    }
}

export default Navbar;
