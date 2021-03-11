import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdHome, MdInfoOutline, MdStyle, MdFormatListNumbered, MdQueue, MdFavoriteBorder, MdSearch, MdLiveTv } from 'react-icons/md';
import { BsPlayFill } from 'react-icons/bs';

import { Helmet } from 'react-helmet';
import { PlayerCard, PlayerCardDesktop } from '../components/PlayerCard';

//Smartphone mode
import { NavBar } from '../components/NavBar';
import { Link } from '../components/NavBar/styles';
import { MarginBottom } from '../components/MarginBottom';

//desktop mode
import { DesktopMenu, DesktopDiv } from '../components/DesktopMenu';
import { DesktopLink, LinkText, HeaderLink, HeaderText, HeaderDesktop } from '../components/DesktopMenu/styles';
import { Logo } from '../components/Logo';

const SIZE = '32px';
export const Player = ({ id, episode, last }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div>
      <Helmet>
        <title>Player - ReactAnime</title>
        <meta name='description' content='Reproductor de episodios' />
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
                <HeaderLink to={`/watch/${id}/${episode}/${last}`}>
                  <BsPlayFill size={SIZE} />
                  <HeaderText>
                    Episodio
                    {' '}
                    {episode}
                  </HeaderText>
                </HeaderLink>
                <HeaderLink to={`/anime/${id}/related`}>
                  <MdQueue size={SIZE} />
                  <HeaderText>Relacionados</HeaderText>
                </HeaderLink>
              </HeaderDesktop>
              <PlayerCardDesktop id={id} episode={episode} last={last} />
            </DesktopDiv>
          </>
        ) : (
          <>
            <PlayerCard id={id} episode={episode} last={last} />
            <NavBar>
              <Link to='/'><MdHome size={SIZE} /></Link>
              <Link to={`/anime/${id}`}><MdInfoOutline size={SIZE} /></Link>
              <Link to={`/anime/${id}/info`}><MdStyle size={SIZE} /></Link>
              <Link to={`/anime/${id}/episodes`}><MdFormatListNumbered size={SIZE} /></Link>
              <Link to={`/anime/${id}/related`}><MdQueue size={SIZE} /></Link>
            </NavBar>
            <MarginBottom />
          </>
        )
      }

    </div>
  );
};
