import styled from 'styled-components';
import { BASE_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../../styles/DarkMode';

export const SearchBoxDesktop = styled.div`
    width: 100%;
    height: auto;
    background-color: ${BASE_COLOR};
    color: black;
    border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    padding-bottom: 10px;
    padding-top: 10px;
`;

export const SearchDivDesktop = styled.div`
-webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    margin-left: 20px;
    margin-right: 30px;
    margin-top: 10px;
    border-radius: 55px;
    height: 60px;
    width: auto;
    background-color: ${SECONDARY_COLOR};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchInputDesktop = styled.input`
    margin-left: 10px;
    outline: none;
    font-size: 20px;
    border: 0px;
    height: 100%;
    width: 85%;
    background-color: ${SECONDARY_COLOR};
    color: ${TEXT_COLOR};
`;

export const SearchH1Desktop = styled.h3`
    margin: 10px;
    text-align: center;
    font-style: italic;
    color: ${TEXT_COLOR};
`;

