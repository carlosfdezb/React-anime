import styled, { css } from 'styled-components';

import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const ExtraInfoH1 = styled.p`
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 10px;
    border-radius: 15px;
    text-align: center;
    color: white;
    padding: 5px;
    font-weight: bold;
    background: ${BASE_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    width: 35%;
`;

export const ExtraInfoH1Desktop = styled.p`
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 10px;
    border-radius: 15px;
    text-align: center;
    color: white;
    padding: 5px;
    font-weight: bold;
    width: 35%;
`;

export const ExtraInfoP = styled.p`
    margin-top: 10px;
    margin-right: 30px;
    border-radius: 15px;
    text-align: center;
    color: white;
    padding: 5px;
    font-weight: bold;
    background: ${HIGH_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    width: 55%;
`;

export const InfoBox = styled.div`
    margin-top: 5px;
    display: inline;
  
`;

export const InfoDiv = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
   
`;

export const Text = styled.p`

    margin: 30px;
    line-height: 2;

`;
