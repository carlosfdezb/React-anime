import styled, { css } from 'styled-components';
import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const RelatedBox = styled.div`
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

export const RelatedBoxDesktop = styled.div`
    width:100%;
    margin-top: 5%;
    height: auto;
    padding-top: 10px;
  padding-left: 0;
`;

export const RelatedH1 = styled.h1`
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
    margin-bottom: 30px;
`;

export const List = styled.ul`

  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: hidden;
  margin-left: 3%;
  margin-right: 3%;
`;

export const Item = styled.li`
  padding: 0 ;

  ${(props) => props.skeleton && css`
    {
      margin: 10px;
    }
  `}
`;
