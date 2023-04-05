import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Breadcrumb, Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

function App() {
  return (
    <Router>
      <Layout style={{
        minHeight: '100vh'
      }}>
        <Header className="header">
          <h2 style={{ 
            margin: '0',
            color: 'white' 
          }}>owa</h2>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0' }}>
            <Sider width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={[
                  {
                    icon: '',
                    label: <Link to={'/reports'}>Отчёты</Link>,
                    key: ''
                  }
                ]}
              />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Switch>
                  <Route path='/reports'>
                    report
                  </Route>

                  <Route exact path='/'>
                    test
                  </Route>

                  <h1>not found</h1>
                </Switch>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
