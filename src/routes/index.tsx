import React, { FunctionComponent } from 'react';
import LoadingPage from 'pages/loading';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('pages/home'));
const Experience = React.lazy(() => import('pages/jobs'));
const Skills = React.lazy(() => import('pages/skills'));

const Routes: FunctionComponent = () => {
    return (
        <React.Suspense fallback={<LoadingPage />}>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/experience" component={Experience} />
                <Route path="/skills" component={Skills} />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </React.Suspense>
    );
};

export default Routes;
