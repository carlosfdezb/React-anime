import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdHome, MdFavoriteBorder, MdSearch, MdLiveTv } from 'react-icons/md';
import { ListOfFavs, ListOfFavsDesktop } from '../components/ListOfFavs';
import { MarginBottom } from '../components/MarginBottom';

//Smartphone mode
import { NavBar } from '../components/NavBar';
import { Link } from '../components/NavBar/styles';

//desktop mode
import { DesktopMenu, DesktopDiv } from '../components/DesktopMenu';
import { DesktopLink, LinkText } from '../components/DesktopMenu/styles';
import { Logo } from '../components/Logo';

const SIZE = '32px';
export const Favs = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  return (
    <div>
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
              <ListOfFavsDesktop />
              <MarginBottom />

            </DesktopDiv>
          </>
        ) : (
          <>
            <ListOfFavs />
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
