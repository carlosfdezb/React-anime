import styled, { css } from 'styled-components';
import { BASE_COLOR, SECONDARY_COLOR } from '../../styles/DarkMode';

export const ListDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 5px;
`;

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  overflow: scroll;
  width: 100%;
  overflow-y: hidden;
`;

export const Item = styled.li`
  padding: 0 ;
  margin: 10px;
  ${(props) => props.skeleton && css`
    {
      margin: 10px;
    }
  `}
`;

export const DivH1 = styled.h1`
    margin-top: 10px;
    margin-left: 10px;
`;

export const DivEmoji = styled.div`
    margin-left:15px;
    border-radius: 50px 50px 50px 50px;
    -moz-border-radius: 50px 50px 50px 50px;
    -webkit-border-radius: 50px 50px 50px 50px;
    background-color: white;
    padding: 9px;
    text-align: center;
    height: 50px;
    width: 50px;
`;

export const DivHeader = styled.div`
  display: inline-flex;
`;

export const DivButton = styled.div`
  display: flex;
`;

export const Button = styled.div`
  cursor: pointer;
  height: auto;
  width: auto;
  margin-top: 15px;
  margin: 2px;
  padding: 10px;
  color: white;
  font-size: 17px;
  border-radius: 25px;
  border: 3px solid ${BASE_COLOR};
  

  ${(props) => props.select === 'true' && css`
    {
      background-color: ${BASE_COLOR};
      border: 3px solid ${SECONDARY_COLOR};
      -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.30);
      -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.30);
      box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.30);
    }
  `}

`;
