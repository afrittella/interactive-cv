import React from 'react';
import Avatar from 'components/Avatar';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import { history } from 'App';
import Sidebar from 'components/Layout/Sidebar';
import { useSelector } from 'react-redux';
import { selectLinks, selectProfile } from 'store/state/cv/selectors';
import { selectIsSmall } from 'store/state/application/selectors';
import { IMenuItem } from 'components/Menu/Item';
import SocialLinks from 'components/SocialLinks';
import avatar from 'assets/images/logo_small.png';
import { IStyledBase } from 'helpers/definitions';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${props => props.theme.sSize} 0;
`;

const Layout: React.FunctionComponent<IStyledBase> = ({
    children,
    className,
}) => {
    const profile = useSelector(selectProfile);
    const links = useSelector(selectLinks);
    const isSmall = useSelector(selectIsSmall);

    const [isSidebarVisible, setIsVisible] = React.useState<boolean>(false);

    const toggleSidebarVisibility = () => setIsVisible(!isSidebarVisible);

    React.useEffect(() => {
        setIsVisible(!isSmall);
    }, [isSmall]);

    const menuItems: IMenuItem[] = [
        {
            label: 'About',
            url: '/',
        },
        {
            label: 'Experience',
            url: '/experience',
        },
        {
            label: 'Skills',
            url: '/skills',
        },
    ];

    return (
        <div className={className}>
            <Sidebar
                isSmall={!!isSmall}
                isVisible={isSidebarVisible}
                onHamburgerClick={toggleSidebarVisibility}
            >
                {profile && (
                    <>
                        <Header>
                            <Avatar
                                imageUrl={avatar}
                                onClick={() => history.push('/')}
                            />
                            <Logo
                                firstPart={profile.firstName}
                                secondPart={profile.lastName}
                                headline={profile.headline}
                            />
                            {links && <SocialLinks links={links} />}
                        </Header>
                        <Menu
                            items={menuItems}
                            history={history}
                            onSelect={() => setIsVisible(!isSidebarVisible)}
                        />
                    </>
                )}
            </Sidebar>
            {children}
        </div>
    );
};

export default styled(Layout)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;
