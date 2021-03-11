/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MdHome, MdFavoriteBorder, MdSearch, MdLiveTv } from 'react-icons/md';
import { Helmet } from 'react-helmet';
import { useClearCache } from 'react-clear-cache-path';
import { ListOfAnimeCards } from '../components/ListOfAnimeCards';
import { ListOfPremiereEpisodes } from '../components/ListoOfPremiereEpisodes';
import { ListOfTop } from '../components/ListOfTop';
import { ListOfCategories } from '../components/ListOfCategories';
import { DivGradient } from '../components/DivGradient';
import { MarginBottom } from '../components/MarginBottom';
import { Logo } from '../components/Logo';

//Smartphone mode
import { NavBar } from '../components/NavBar';
import { Link } from '../components/NavBar/styles';

//desktop mode
import { DesktopMenu, DesktopDiv } from '../components/DesktopMenu';
import { DesktopLink, LinkText } from '../components/DesktopMenu/styles';

const SIZE = '32px';

const HomePage = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  const { isLatestVersion, emptyCacheStorage } = useClearCache();

  return (
    <div>
      <div>
        {!isLatestVersion && (
          <p>
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault();
                emptyCacheStorage();
              }}
            >
              Update version
            </a>
          </p>
        )}
      </div>
      <Helmet>
        <title>ReactAnime - Tus animes favoritos en español</title>
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
              <ListOfPremiereEpisodes title='Últimos Capítulos' />
              <DivGradient />
              <ListOfAnimeCards route='AnimeByState/1/title/1' title='En Emisión' />
              <DivGradient />
              <ListOfTop title='Top 25' />
              <DivGradient />
              <ListOfCategories title='Categorías' />
              <DivGradient />
              <DesktopLink to='/about'>
                <LinkText>Acerca de</LinkText>
              </DesktopLink>
              <MarginBottom />

            </DesktopDiv>
          </>
        ) : (
          <>
            <Logo />
            <ListOfPremiereEpisodes title='Últimos Capítulos' />
            <DivGradient />
            <ListOfAnimeCards route='AnimeByState/1/title/1' title='En Emisión' />
            <DivGradient />
            <ListOfTop title='Top 25' />
            <DivGradient />
            <ListOfCategories title='Categorías' />
            <DivGradient />
            <DesktopLink to='/about'>
              <LinkText>Acerca de</LinkText>
            </DesktopLink>
            <MarginBottom />
            <NavBar>
              <Link to='/'><MdHome size={SIZE} /></Link>
              <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
              {/* <Link to='/browse'><MdDashboard size={SIZE} /></Link> */}
              <Link to='/search'><MdSearch size={SIZE} /></Link>
              {/* <Link to='/news'><BiNews size={SIZE} /></Link> */}
            </NavBar>
          </>
        )
      }

    </div>
  );
};

export default React.memo(HomePage);
