import React from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from 'store/state/cv/selectors';
import Main from 'components/Layout/Main';
import { selectIsSmall } from 'store/state/application/selectors';
import { Panel } from 'components/Panel';

const HomePage: React.FunctionComponent = () => {
    const profile = useSelector(selectProfile);
    const isSmall = useSelector(selectIsSmall);

    return (
        <Main
            isSmall={isSmall}
            title="About"
            content={
                profile ? (
                    <Panel isSmall={isSmall}>
                        <p>{profile.bio}</p>
                    </Panel>
                ) : (
                    ''
                )
            }
        />
    );
};

export default HomePage;
