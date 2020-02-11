import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-open-sans';
import 'typeface-roboto-condensed';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReduxWrapper from 'components/Wrapper/Redux';
import ThemeWrapper from 'components/Wrapper/Theme';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

ReactDOM.render(
    <ReduxWrapper>
        <ThemeWrapper>
            <App />
        </ThemeWrapper>
    </ReduxWrapper>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
