import React from 'react';

import { Nav } from './styles';

export const NavBar = ({ children }) => {
  return (
    <Nav>
      {children}
    </Nav>
  );
};
