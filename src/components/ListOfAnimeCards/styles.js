import styled, { css } from 'styled-components';
import { SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

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

export const MoreDiv = styled.div`
  position: relative;
    height: 320px;
    width: 210px;
    color: black;
    font-size: 7px;
    margin: 10px;
    background: ${HIGH_COLOR};
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    overflow-y: hidden;
    align-items: center;
    justify-content: center;
    transition: .5s;
    vertical-align: middle;
    &:hover {
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.75);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.75);
    }

`;

export const MoreDivInt = styled.div`
  position: absolute;
  margin-top: 122px;
  margin-left: 72px;
  align-items: center;
  justify-content: center;
`;

