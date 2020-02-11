import styled from 'styled-components';
import { IWrapperProps, MenuToggleStatus } from './definitions';

export const Wrapper = styled.div<IWrapperProps>`
    cursor: pointer;
    height: 100%;
    position: relative;
    width: 100%;

    @keyframes rotate_in_cw {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(45deg);
        }
    }
    @keyframes rotate_out_cw {
        0% {
            transform: rotate(45deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes rotate_in_ccw {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-45deg);
        }
    }
    @keyframes rotate_out_ccw {
        0% {
            transform: rotate(-45deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes draw_in {
        0% {
            stroke-dashoffset: 100%;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
    @keyframes draw_out {
        0% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: 100%;
        }
    }

    .svg-1 {
        animation: ${props => {
                if (props.status === MenuToggleStatus.OPEN) {
                    return `rotate_in_cw`;
                }

                if (props.status === MenuToggleStatus.DEFAULT) {
                    return `rotate_out_cw`;
                }

                return `none`;
            }}
            0.5s;
        animation-fill-mode: forwards;
        .line-1 {
            animation: ${props => {
                    if (props.status === MenuToggleStatus.OPEN) {
                        return `draw_out`;
                    }

                    if (props.status === MenuToggleStatus.DEFAULT) {
                        return `draw_in`;
                    }

                    return `none`;
                }}
                0.5s;
            animation-fill-mode: forwards;
        }
        .line-3 {
            animation: ${props => {
                    if (props.status === MenuToggleStatus.OPEN) {
                        return `draw_out`;
                    }

                    if (props.status === MenuToggleStatus.DEFAULT) {
                        return `draw_in`;
                    }

                    return `none`;
                }}
                0.5s;
            animation-fill-mode: forwards;
        }
    }
    .svg-2 {
        animation: ${props => {
                if (props.status === MenuToggleStatus.OPEN) {
                    return `rotate_in_ccw`;
                }

                if (props.status === MenuToggleStatus.DEFAULT) {
                    return `rotate_out_ccw`;
                }

                return `none`;
            }}
            0.5s;
        animation-fill-mode: forwards;
    }

    svg {
        height: 100%;
        overflow: visible;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        path {
            stroke: ${props => props.color || ''};
            stroke-dasharray: 100%;
            stroke-linecap: round;
            stroke-miterlimit: 10;
            stroke-width: 20px;
        }
    }
`;
