import React from 'react';
import CenteredBox from 'components/CenteredBox';
import { CircularProgress } from '@material-ui/core';

const LoadingPage: React.FunctionComponent = () => {
    return (
        <CenteredBox>
            <h3>Just a moment :)</h3>
            <CircularProgress />
        </CenteredBox>
    );
};

export default LoadingPage;
