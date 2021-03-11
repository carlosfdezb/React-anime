import React from 'react';
import { ContainerDiv, MenuDiv, ContentDiv } from './styles';

export const DesktopMenu = ({ children }) => {
  return (
    <ContainerDiv>
      <MenuDiv>
        {children}
      </MenuDiv>

    </ContainerDiv>
  );
};

export const DesktopDiv = ({ children }) => {
  return (
    <ContainerDiv>
      <ContentDiv>
        {children}
      </ContentDiv>
    </ContainerDiv>
  );
};
