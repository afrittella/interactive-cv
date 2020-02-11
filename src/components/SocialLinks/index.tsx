import React from 'react';
import { ILinksModel } from 'data/models/link/definitions';
import Icon from 'components/Icon';
import { IconType } from 'components/Icon/definitions';
import { IStyledBase } from 'helpers/definitions';
import styled from 'styled-components';

interface ISocialLinks extends IStyledBase {
    links: ILinksModel;
}

interface ISocialLink {
    type: string | IconType;
    url: string;
}

const SocialLinks: React.FunctionComponent<ISocialLinks> = ({
    links,
    className,
}) => {
    const getLinks = (links: ILinksModel): Array<ISocialLink> => {
        let result: ISocialLink[] = [];

        for (let key in links.links) {
            if (links.links.hasOwnProperty(key)) {
                const url = links.getLink(key) || '';
                result.push({ type: key, url });
            }
        }

        return result;
    };

    return (
        <div className={className}>
            <ul>
                {getLinks(links).map(link => (
                    <li key={link.url}>
                        <Icon
                            url={link.url || ''}
                            type={link.type as IconType}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default styled(React.memo(SocialLinks))`
    margin-top: ${props => props.theme.mSize};
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        li {
            margin: 0 ${props => props.theme.sSize};
        }
    }
`;
