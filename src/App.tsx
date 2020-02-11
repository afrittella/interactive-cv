import React from 'react';
import { getCV } from 'data/operations';
import { createBrowserHistory } from 'history';
import { useDispatch, useSelector } from 'react-redux';

import RouterWrapper from './components/Wrapper/Router';
import useScreenSize from 'helpers/hooks/useScreenSize';
import { setIsSmall } from 'store/state/application/actions';
import { selectIsFetching } from 'store/state/application/selectors';
import { selectCVState } from 'store/state/cv/selectors';
import LoadingPage from 'pages/loading';
import Routes from 'routes';
import Layout from 'components/Layout';

export const history = createBrowserHistory();

const App: React.FC = () => {
    const dispatch = useDispatch();

    const isFetching = useSelector(selectIsFetching);
    const cv = useSelector(selectCVState);

    const isSmall = useScreenSize();

    React.useEffect(() => {
        dispatch(setIsSmall({ isSmall }));
    }, [isSmall, dispatch]);

    React.useEffect(() => {
        const username = process.env.REACT_APP_USERNAME;

        if (username) {
            dispatch(getCV(username));
        } else {
            throw new Error('Username not found');
        }
    }, [dispatch]);

    return isFetching || !cv ? (
        <LoadingPage />
    ) : (
        <RouterWrapper history={history}>
            <Layout>
                <Routes />
            </Layout>
        </RouterWrapper>
    );
};

export default App;
