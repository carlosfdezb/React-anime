import React from 'react';
import { NewsDiv, ImageDiv, TitleDiv, NewsH1, DateDiv, NewsP, FooterDiv, LeftDiv, LogoImg, Link } from './styles';

export const NewsCard = ({ image, link, title, date, description }) => {
  return (
    <NewsDiv>
      <ImageDiv image={image}>
        <DateDiv>
          <p>{date}</p>
        </DateDiv>
        <TitleDiv>
          <NewsH1>{title.toUpperCase()}</NewsH1>
        </TitleDiv>
      </ImageDiv>

      <NewsP>{description}</NewsP>
      <Link href={link}>
        <FooterDiv>
          <LeftDiv>
            <p>
              leer noticia completa
            </p>
          </LeftDiv>

          <LogoImg alt='' src='https://somoskudasai.com/wp-content/themes/somoskudasai/resources/assets/img/logo-somoskudasai.png' />
        </FooterDiv>
      </Link>
    </NewsDiv>
  );
};
