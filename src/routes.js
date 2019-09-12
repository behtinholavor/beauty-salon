import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Salao from './pages/salao';
import Servicos from './pages/servicos';
import Precos from './pages/precos';
import Sobre from './pages/sobre';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/salao" component={Salao} />
            <Route exact path="/servicos" component={Servicos} />
            <Route exact path="/precos" component={Precos} />
            <Route exact path="/sobre" component={Sobre} />

        </Switch>
    </BrowserRouter>
);

export default Routes;