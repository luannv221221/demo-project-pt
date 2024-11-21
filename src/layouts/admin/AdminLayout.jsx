import React, { useEffect } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const { Header, Content, Footer, Sider } = Layout;


const menu = [
    { icon: ShopOutlined, lable: 'Quản lý danh mục', route: 'category' },
    { icon: LaptopOutlined, lable: 'Quản lý sản phẩm', route: 'product' },
    { icon: UserOutlined, lable: 'Quản lý danh mục boostrap', route: 'category2' },

]
const items = menu.map((item) => {
    return {
        key: item.route,
        icon: React.createElement(item.icon),
        label: item.lable
    };
});
const AdminLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();

    const handleClickMenu = (e) => {
        console.log('click ', e.key);
        navigate(e.key)
    }
    const isLogin = Cookies.get("role") ? JSON.parse(Cookies.get("role")) : [];
    useEffect(() => {
        // laays tu local 
        if (!isLogin.some((role) => role.roleName === 'ADMIN' || role.roleName === 'SUB_ADMIN')) {
            navigate("/login");
        }
    });

    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("role");
        Cookies.remove("username");
        navigate("/login")
    }
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Button onClick={handleLogout}>Logout</Button>
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                </Breadcrumb>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={300}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                            }}
                            items={items}
                            onClick={handleClickMenu}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        {/* hung compoent render theo route  */}
                        <Outlet></Outlet>

                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default AdminLayout;