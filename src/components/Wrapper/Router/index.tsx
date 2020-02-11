import React from 'react';
import { History } from 'history';
import { Router } from 'react-router';

export interface IRouterProps {
    history: History;
}

const RouterWrapper: React.FunctionComponent<IRouterProps> = ({
    history,
    children,
}) => {
    return <Router history={history}>{children}</Router>;
};

export default RouterWrapper;
