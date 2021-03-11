import styled, { css } from 'styled-components';
import { BASE_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../../styles/DarkMode';

export const NewsDiv = styled.div`
    margin: 15px;
    width: auto;
    height: auto;
    background-color: ${SECONDARY_COLOR};
    border-radius: 0px 0px 17px 17px;
    -moz-border-radius: 0px 0px 17px 17px;
    -webkit-border-radius: 0px 0px 17px 17px;
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 30vh;
    position: relative;
    ${(props) => props.image && css`
        {
            background-image: url(${props.image});
            background-size: 111% auto;
        }
    `}
`;

export const DateDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    height: auto;
    width: auto;
    top: 0;
    right: 0;
    border-radius: 20px;
    padding: 6px;
    margin: 5px;
`;

export const TitleDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    height: auto;
    width: 100%;
    bottom: 0;
`;

export const NewsH1 = styled.h1`
    font-size: 18px;
    padding: 18px;
    color: white;
`;

export const NewsP = styled.p`
    color: ${TEXT_COLOR};
    font-size: 12px;
    text-align: justify;
    padding: 10px;
`;

export const FooterDiv = styled.div`
    display:flex;
    position: relative;
    width: 100%;
    height: 30px;
    background-color: black;
    border-radius: 0px 0px 15px 15px;
    -moz-border-radius: 0px 0px 15px 15px;
    -webkit-border-radius: 0px 0px 15px 15px;
    padding: 5px;
    text-align: right;
    align-items: right;
    justify-content: center;
`;

export const LeftDiv = styled.p`
    position: absolute;
    left: 0;
    margin-left: 10px;
`;

export const LogoImg = styled.img`
    position: absolute;
    right: 0;
    height: 20px;
    width: auto;
    margin-right: 5px;
`;

export const Link = styled.a`
    color: inherit;
`;
