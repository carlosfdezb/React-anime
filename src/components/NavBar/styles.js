import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

import { SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const Nav = styled.nav`
    align-items: center;
    background: ${SECONDARY_COLOR};
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left: 0;
    margin: 0 auto;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 1000;
`;
export const Link = styled(LinkRouter)`
    align-items:center;
    color: ${HIGH_COLOR};
    display: inline-flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    &[aria-current] {
        color: #888;

        &:after {
            ${fadeIn({ time: '0.5s' })};
            content: '·';
            position: absolute;
            bottom: 0;
            font-size: 34px;
            line-height: 15px;
        }
    }
`;
