import React from 'react';
import { Link } from '@reach/router';

import { CatDiv, CatImg1, CatImg2, CatImg3, CatImg4, DivTitle } from './styles';

export const CategoriesCard = ({ genre, value, img1, img2, img3, img4 }) => {
  return (
    <Link to={`/browse/${value}`}>
      <CatDiv>
        <CatImg1 poster={img1} />
        <CatImg2 poster={img2} />
        <CatImg3 poster={img3} />
        <CatImg4 poster={img4} />
        <DivTitle>
          <h1>{genre}</h1>
        </DivTitle>
      </CatDiv>
    </Link>
  );
};
