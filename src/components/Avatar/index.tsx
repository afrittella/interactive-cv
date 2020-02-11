import React from 'react';
import { IStyledBase, TCallback } from 'helpers/definitions';
import styled from 'styled-components';

interface IAvatarProps extends IStyledBase {
    imageUrl: string;
    onClick?: TCallback;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
    imageUrl,
    onClick = () => {},
    className,
}) => {
    const handleClick = (ev: React.MouseEvent) => {
        ev.preventDefault();
        onClick();
    };

    return (
        <div
            className={className}
            style={{ backgroundImage: `url('${imageUrl}` }}
        >
            <a href="/" onClick={handleClick}>
                {' '}
            </a>
        </div>
    );
};

export default styled(React.memo(Avatar))`
    border-radius: 50%;
    width: 90px;
    height: 90px;
    background-color: ${props => props.theme.colorMedium};
    background-position: center center;
    background-size: cover;
    border: 2px solid ${props => props.theme.colorMidLight};
    margin-bottom: ${props => props.theme.sSize};

    a {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 50%;
    }
`;
