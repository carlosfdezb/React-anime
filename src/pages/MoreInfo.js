import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdHome, MdInfoOutline, MdStyle, MdFormatListNumbered, MdQueue, MdFavoriteBorder, MdSearch, MdLiveTv } from 'react-icons/md';
import { Helmet } from 'react-helmet';
import { MoreInfoCard, MoreInfoCardDesktop } from '../components/MoreInfoCard';

import { NavBar } from '../components/NavBar';
import { Link } from '../components/NavBar/styles';
import { MarginBottom } from '../components/MarginBottom';

//desktop mode
import { DesktopMenu, DesktopDiv } from '../components/DesktopMenu';
import { DesktopLink, LinkText, HeaderLink, HeaderText, HeaderDesktop } from '../components/DesktopMenu/styles';
import { Logo } from '../components/Logo';

const SIZE = '32px';
export const MoreInfo = ({ id, title }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div>
      <Helmet>
        <title>Más info - ReactAnime</title>
        <meta name='description' content='Con ReactAnime puedes ver todo sobre anime' />
      </Helmet>
      {
        isDesktopOrLaptop ? (
          <>
            <DesktopMenu>
              <Logo />
              <DesktopLink to='/'>
                <MdHome size={SIZE} />
                <LinkText>Inicio</LinkText>
              </DesktopLink>
              <DesktopLink to='/releases'>
                <MdLiveTv size={SIZE} />
                <LinkText>En Emisión</LinkText>
              </DesktopLink>
              <DesktopLink to='/favs'>
                <MdFavoriteBorder size={SIZE} />
                <LinkText>Favoritos</LinkText>
              </DesktopLink>
              <DesktopLink to='/search'>
                <MdSearch size={SIZE} />
                <LinkText>Buscador</LinkText>
              </DesktopLink>
            </DesktopMenu>
            <DesktopDiv>
              <HeaderDesktop>
                <HeaderLink to={`/anime/${id}`}>
                  <MdInfoOutline size={SIZE} />
                  <HeaderText>Anime</HeaderText>
                </HeaderLink>
                <HeaderLink to={`/anime/${id}/info`}>
                  <MdStyle size={SIZE} />
                  <HeaderText>Info</HeaderText>
                </HeaderLink>
                <HeaderLink to={`/anime/${id}/episodes`}>
                  <MdFormatListNumbered size={SIZE} />
                  <HeaderText>Episodios</HeaderText>
                </HeaderLink>
                <HeaderLink to={`/anime/${id}/related`}>
                  <MdQueue size={SIZE} />
                  <HeaderText>Relacionados</HeaderText>
                </HeaderLink>
              </HeaderDesktop>
              <MoreInfoCardDesktop id={id} />
              <MarginBottom />
            </DesktopDiv>
          </>
        ) : (
          <>
            <MoreInfoCard id={id} />
            <MarginBottom />
            <NavBar>
              <Link to='/'><MdHome size={SIZE} /></Link>
              <Link to={`/anime/${id}`}><MdInfoOutline size={SIZE} /></Link>
              <Link to={`/anime/${id}/info`}><MdStyle size={SIZE} /></Link>
              <Link to={`/anime/${id}/episodes`}><MdFormatListNumbered size={SIZE} /></Link>
              <Link to={`/anime/${id}/related`}><MdQueue size={SIZE} /></Link>
            </NavBar>
          </>
        )
      }
    </div>
  );
};
