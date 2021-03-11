import styled from 'styled-components';

import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const List = styled.ul`
    padding-left: 0;
    display: flex;
    overflow: scroll;
    width: 96%;
    overflow-y: hidden;
    margin: 2%;
`;

export const Item = styled.li`
    
  padding: 0 ;
  margin: 10px;
  width: auto;
  height: auto;
`;

export const CardDiv = styled.div`
    padding: 5%;
    width: auto;
    height: auto;
    border-radius: 0px 0px 5px 5px;
    -moz-border-radius: 0px 0px 5px 5px;
    -webkit-border-radius: 0px 0px 5px 5px;
    -webkit-box-shadow: -2px 14px 28px -8px rgba(0,0,0,0.15);
    -moz-box-shadow: -2px 14px 28px -8px rgba(0,0,0,0.15);
    box-shadow: -2px 14px 28px -8px rgba(0,0,0,0.15);
    margin-bottom: 20px;
    background-color: ${HIGH_COLOR};
`;

export const ImgDiv = styled.div`
    padding: 10px;
    width: auto;
    height: auto;
    background: ${BASE_COLOR};
    border-radius: 5px 5px 0px 0px;
    -moz-border-radius: 5px 5px 0px 0px;
    -webkit-border-radius: 5px 5px 0px 0px;
    -webkit-box-shadow: -2px -3px 28px -8px rgba(0,0,0,0.15);
    -moz-box-shadow: -2px -3px 28px -8px rgba(0,0,0,0.15);
    box-shadow: -2px -3px 28px -8px rgba(0,0,0,0.15);
    display: inline-block;
`;

export const CharacterImg = styled.img`
    width: auto;
    height: auto;
`;

export const CardH1 = styled.h2`
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

export const CardP = styled.p`
    margin: 10px;
    text-align: center;
`;
