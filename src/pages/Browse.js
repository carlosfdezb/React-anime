import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdHome, MdFavoriteBorder, MdSearch, MdDashboard, MdLiveTv } from 'react-icons/md';
import { BiNews } from 'react-icons/bi';
import { Helmet } from 'react-helmet';
import { MarginBottom } from '../components/MarginBottom';

import ListOfBrowse from '../components/ListOfBrowse';
import ListOfBrowseDesktop from '../components/ListOfBrowseDesktop';

//smartphone mode
import { NavBar } from '../components/NavBar';
import { Link } from '../components/NavBar/styles';

//desktop mode
import { DesktopMenu, DesktopDiv } from '../components/DesktopMenu';
import { DesktopLink, LinkText, HeaderLink, HeaderText, HeaderDesktop } from '../components/DesktopMenu/styles';
import { Logo } from '../components/Logo';

const SIZE = '32px';
export const Browse = ({ gen }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div>
      <Helmet>
        <title>Catálogo - ReactAnime</title>
        <meta name='description' content='Con ReactAnime puedes ver tus animes favoritos donde quieras' />
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

              <ListOfBrowseDesktop gen={gen} />

            </DesktopDiv>
          </>
        ) : (
          <>
            <ListOfBrowse gen={gen} />

            <MarginBottom />
            <NavBar>
              <Link to='/'><MdHome size={SIZE} /></Link>
              <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
              <Link to='/search'><MdSearch size={SIZE} /></Link>
              {/* <Link to='/news'><BiNews size={SIZE} /></Link> */}
            </NavBar>
          </>
        )
      }

    </div>
  );
};
