import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, LoginOutlined, UserOutlined, BookOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';

const Layout = () => {
  const [current, setCurrent] = useState('home');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      label: <Link to="/">Home</Link>,
      key: 'home',
      icon: <HomeOutlined />
    },
    {
      label: <Link to="/catalog">Book Catalog</Link>,
      key: 'catalog',
      icon: <BookOutlined />
    },
    !currentUser ? {
      label: <Link to="/login">Login</Link>,
      key: 'login',
      icon: <LoginOutlined />
    } : null,
    !currentUser ? {
      label: <Link to="/register">Register</Link>,
      key: 'register',
      icon: <UserOutlined />
    } : null,
    currentUser ? {
      label: 'My Account',
      key: 'account',
      icon: <UserOutlined />,
      children: [
        {
          label: <Link to="/checkout">Cart</Link>,
          key: 'cart',
          icon: <ShoppingCartOutlined />
        },
        {
          label: 'Logout',
          key: 'logout',
          onClick: () => {
            logout();
            navigate('/');
            setCurrent('home');
          }
        }
      ]
    } : null
  ].filter(Boolean);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="app">
      <Menu 
        onClick={onClick} 
        selectedKeys={[current]} 
        mode="horizontal" 
        items={menuItems}
        style={{ padding: '0 20px' }}
      />
      <main>
        <Outlet />  {/* This is where your page content will render */}
      </main>
    </div>
  );
};

export default Layout;