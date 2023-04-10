import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const MainLayout = ({ content }: { content: ReactNode }) => {
  return <Layout style={{
    minHeight: '100vh',
  }}>
    <Header className="header">
      <h2 style={{
        margin: '0',
        color: 'white'
      }}>owa</h2>
    </Header>

    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0' }}>
        <Sider width={200} style={{ height: 'fit-content' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            items={[
              {
                icon: '',
                label: 'Отчёты',
                key: '',

                children: ([
                  {
                    href: '/reports/analytics',
                    label: 'Данные аналитики'
                  },
                  {
                    href: '/reports/stock_warehouses',
                    label: 'Отчёт по остаткам и товарам (версия 2)'
                  },
                  {
                    href: '/reports/transaction_list',
                    label: 'Список транзакций (версия 3)'
                  }]).map((report: { href: string, label: string }, idx) => {
                    return {
                      key: idx,
                      label: <Link to={report.href}>{report.label}</Link>,
                    }
                  })
              }
            ]}
          />
        </Sider>
        <Content style={{
          padding: '24px',
          margin: '0 24px',
        }}>
          {content}
        </Content>
      </Layout>
    </Content>
  </Layout>
}