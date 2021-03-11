import styled, { css } from 'styled-components';
import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const BrowseBox = styled.div`
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

export const BrowseH1 = styled.div`
    display:flex;
    position: relative;
    align-items:center;
    justify-content: center;
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    color: white;
    padding: 5px;
    font-weight: bold;
    background: ${BASE_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
`;

export const Button = styled.div`
    display:flex;
    position: relative;
    align-items:center;
    justify-content: center;
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 50px;
    text-align: center;
    font-size: 25px;
    color: white;
    padding: 5px;
    font-weight: bold;
    background: ${SECONDARY_COLOR};
    
    &:active {
      -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
      -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
      box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
      background: ${HIGH_COLOR};
    }
`;

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: hidden;
  margin-top: 20px;
  padding-right: 20px;
`;

export const Item = styled.li`
  padding: 0 ;
  ${(props) => props.skeleton && css`
    {
      margin: 10px;
    }
  `}
`;
