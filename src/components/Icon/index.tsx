import React from 'react';
import { IconType, IIcon, ILinkIcon } from 'components/Icon/definitions';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LanguageIcon from '@material-ui/icons/Language';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const LinkIcon: React.FunctionComponent<ILinkIcon> = ({
    url,
    target,
    children,
    className,
}) => {
    return (
        <a
            className={className}
            href={url}
            target={target}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

const withLink = (
    component: React.ReactNode,
    { url, className }: ILinkIcon,
) => {
    return (
        <LinkIcon url={url} target="_blank" className={className}>
            {component}
        </LinkIcon>
    );
};

const Facebook: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <FacebookIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const Linkedin: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <LinkedInIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const GitHub: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <GitHubIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const Email: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const getAddress = (emailAddress: string): string => {
        return emailAddress.startsWith('mailto:')
            ? emailAddress
            : `mailto:${emailAddress}`;
    };
    const component = <AlternateEmailIcon className={className} />;

    return url
        ? withLink(component, { url: url && getAddress(url), className })
        : component;
};

const Generic: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <LanguageIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const School: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <SchoolIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const Work: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <WorkIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const Music: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <MusicNoteIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const Baby: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <ChildCareIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const Menu: React.FunctionComponent<ILinkIcon> = ({ url, className }) => {
    const component = <MenuIcon className={className} />;
    return url ? withLink(component, { url, className }) : component;
};

const Icon: React.FunctionComponent<IIcon> = ({ type, url, className }) => {
    const getIcon = (type: IconType): React.ReactNode => {
        switch (type) {
            case IconType.FACEBOOK:
                return <Facebook url={url} className={className} />;
            case IconType.LINKEDIN:
                return <Linkedin url={url} className={className} />;
            case IconType.GITHUB:
                return <GitHub url={url} className={className} />;
            case IconType.EMAIL:
                return <Email url={url} className={className} />;
            case IconType.EDUCATION:
                return <School url={url} className={className} />;
            case IconType.WORK:
                return <Work url={url} className={className} />;
            case IconType.MUSIC:
                return <Music url={url} className={className} />;
            case IconType.BABY:
                return <Baby url={url} className={className} />;
            case IconType.MENU:
                return <Menu url={url} className={className} />;
        }

        return <Generic url={url} className={className} />;
    };

    return <>{getIcon(type)}</>;
};

export default styled(React.memo(Icon))`
    svg {
        transition: color 0.3s ease;
        font-size: ${props => props.theme.fontSizeH3};
    }

    &:hover {
        svg {
            color: ${props => props.theme.colorMidLight};
        }
    }
`;
