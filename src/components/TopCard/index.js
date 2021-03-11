import React from 'react';
import { Link } from '@reach/router';
import { Container, NumberDiv, ImgDiv, DivTitle } from './styles';

export const TopCard = ({ poster, title, number, section }) => {
  const url = title.toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll(':', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('!', '')
    .replaceAll('.', '')
    .replaceAll(';', '');
  return (
    <div>
      {
        section === 'Esperados' ? (
          <Container>
            <NumberDiv>
              {number}
            </NumberDiv>
            <ImgDiv poster={poster}>
              <DivTitle>
                {title}
              </DivTitle>
            </ImgDiv>
          </Container>
        ) : (
          <Link to={`/anime/${url}`} style={{ color: '#FFF' }}>
            <Container>
              <NumberDiv>
                {number}
              </NumberDiv>
              <ImgDiv poster={poster}>
                <DivTitle>
                  {title}
                </DivTitle>
              </ImgDiv>
            </Container>
          </Link>
        )
      }
    </div>

  );
};
