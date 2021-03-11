import styled, { css } from 'styled-components';

export const List = styled.ul`
  padding-left: 0;
  display: inline;
  overflow: scroll;
  width: 100%;
  overflow-y: hidden;
`;

export const Item = styled.li`
  padding: 0 ;

  ${(props) => props.skeleton && css`
    {
      margin: 20px;
    }
  `}
`;
