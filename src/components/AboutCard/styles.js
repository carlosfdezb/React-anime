import styled from 'styled-components';
import { TEXT_COLOR, BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR, HEADER_COLOR } from '../../styles/DarkMode';

export const AboutContainer = styled.div`
    width:96%;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 5%;
    height: auto;
    background-color: ${SECONDARY_COLOR};
    color: black;
    border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    padding-bottom: 20px;
    padding-top: 10px;
`;

export const AboutH1 = styled.h1`
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 50px;
    text-align: center;
    color: white;
    padding: 5px;
    font-weight: bold;
    background: ${BASE_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
`;

export const AboutP = styled.p`
    margin: 20px;
    color: white;
    text-align: justify;
    font-size: 12px;
`;

export const ImportantText = styled.p`
    background: ${HEADER_COLOR};
    color: ${TEXT_COLOR};
    border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    padding: 5px;
    width: auto;
    margin-top: -10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 15px;
`;

export const Link = styled.a`
    color: inherit;
    text-decoration: 'none';
`;
