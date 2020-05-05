import React from "react"
import { Layout, Menu,Icon } from 'antd';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { Sider, Content } = Layout
        const { SubMenu } = Menu;
        return (
            <React.Fragment>
                <Layout>
                    <Sider>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >

                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        Submenu1
                                    </span>
                                        }
                                >
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                SubMenu2
                                </span>
                                }
                            >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Content
                        style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        Content will be displayed here !!
                    </Content>
                </Layout>
            </React.Fragment>
        )
    }
}
export default DashBoard