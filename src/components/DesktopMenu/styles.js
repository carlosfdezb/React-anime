import styled, { css } from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { BASE_COLOR, SECONDARY_COLOR, TEXT_COLOR, HIGH_COLOR, HEADER_COLOR } from '../../styles/DarkMode';

export const ContainerDiv = styled.div`
    position: relative;

`;

export const MenuDiv = styled.div`
    position: fixed;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: ${SECONDARY_COLOR};
    z-index: 1000;

`;

export const ContentDiv = styled.div`
    position: absolute;
    right: 0;
    width: calc(100% - 270px);
    margin-left: 270px;
`;

export const HeaderDesktop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    height: auto;
    background-color: ${HEADER_COLOR};
    transform: translateX(-20px);
    display: flex;
    margin-bottom: 20px;
`;

export const DesktopLink = styled(LinkRouter)`
    color: ${HIGH_COLOR};
    font-size: 17px;
    padding: 10px;
    margin-top: 10px;
    margin-left: 20px;
    display: flex;
    height: auto;
    text-decoration: none;
    width: 85%;
    &[aria-current] {
        background-color: ${BASE_COLOR};
        color: ${TEXT_COLOR};
        border-radius: 5px;
    }
`;

export const HeaderLink = styled(LinkRouter)`
    color: ${HIGH_COLOR};
    font-size: 17px;
    padding: 10px;
    margin: 5px;
    display: flex;
    height: auto;
    text-decoration: none;
    width: auto;
    &[aria-current] {
        color: ${TEXT_COLOR};
    }
`;

export const LinkText = styled.p`
    padding-left: 20px;
    padding-top: 5px;
`;

export const HeaderText = styled.p`
    padding-left: 5px;
    padding-top: 5px;
`;
