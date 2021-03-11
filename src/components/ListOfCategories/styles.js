import styled, { css } from 'styled-components';

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
    padding-top: 10px;
    text-align: center;
    height: 50px;
    width: 50px;
`;

export const DivHeader = styled.div`
  display: inline-flex;
`;
