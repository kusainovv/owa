import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import { NotFound } from '../pages/not-found/page';
import { AnalyticsCard } from '../pages/reports/analytics/page';
import { StockWarehouseCard } from '../pages/reports/stock_warehouses/page';
import { TransactionListCard } from '../pages/reports/transaction_list/page';


export const Routing = () => {
  return <Switch>

    <Route path='/reports/analytics'>
      <AnalyticsCard />
    </Route>

    <Route path='/reports/stock_warehouses'>
      <StockWarehouseCard />
    </Route>

    <Route path='/reports/transaction_list'>
      <TransactionListCard />
    </Route>

    <Route exact path='/'>
      <Title>Пока тут пусто :)</Title>
    </Route>

    <NotFound />
  </Switch>
}