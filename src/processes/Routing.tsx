import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Reports } from '../pages/reports/page';
import Title from 'antd/es/typography/Title';
import { NotFound } from '../pages/not-found/page';


export const Routing = () => {
  return <Switch>

    <Route path='/reports'>
      <Reports />
    </Route>

    <Route exact path='/'>
      <Title>Пока тут пусто :)</Title>
    </Route>

    <NotFound />
  </Switch>
}