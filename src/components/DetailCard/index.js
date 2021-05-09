import React, { useState, useEffect } from 'react';
import Emoji from 'react-emojis';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from '@reach/router';
import { reactLocalStorage } from 'reactjs-localstorage';
import { BsHeart, BsHeartFill, BsPlayFill } from 'react-icons/bs';
import { FaCalendarAlt, FaCalendarCheck } from 'react-icons/fa';
import { TiStarburst } from 'react-icons/ti';
import { HeaderBox, HeaderBoxDesktop, BadgeDiv, Banner, Poster,
  PosterDesktop, Text, Title, TitleDesktop, Body, Rating, RatingDesktop, TextRight, FlexDiv, Badge, NextEpisode, NextEpisodeDesktop,
  PosterSkeleton, FavDiv, FavDivDesktop, SvgDiv, GradientDiv, GradientImage, BtnFav, EpisodesDiv, InfoDiv, ListDiv, List, Item, EpisodeCard,
  PlayDiv, NumberDiv, PreviewImage, TextEpisodeCard, EpisodesHeader, ShowMore, HeaderDesktop, IconContainer, StatusDiv, InfoBody, BadgeDesktop,
  TypeDiv } from './styles';
import { BASE_URL } from '../../urls/url';

import { BASE_COLOR, HEADER_COLOR, HIGH_COLOR, SECONDARY_COLOR } from '../../styles/DarkMode';

export const DetailCard = ({ id }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/GetAnimeInfo/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info);
        setLoading(false);
      });

  }, []);

  const setFav = (id, title, poster, rating) => {
    let fav = [];
    JSON.stringify(reactLocalStorage.getObject('favs')) !== '{}' ? fav = reactLocalStorage.getObject('favs') : fav = [];
    fav.push({
      id: `anime/${id}` || null,
      title: title || null,
      poster: poster || null,
    });
    reactLocalStorage.setObject('favs', fav);
    setIsFav(!isFav);
  };

  const delFav = (id) => {
    let fav = reactLocalStorage.getObject('favs');
    const index = fav.findIndex((x) => x.id === id);
    fav.splice(index, 1);
    reactLocalStorage.setObject('favs', fav);
    setIsFav(!isFav);
  };

  const favs = reactLocalStorage.getObject('favs');
  return (

    <HeaderBox>
      {
        loading ? (
          <div>
            <Banner>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={90} />
              </SkeletonTheme>
            </Banner>
            <Body>
              <PosterSkeleton>
                <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                  <Skeleton height={200} />
                </SkeletonTheme>
              </PosterSkeleton>
              <TextRight skeleton='true'>
                <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                  <Skeleton count={4} />
                </SkeletonTheme>
              </TextRight>
            </Body>
            <Text skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton count={6} />
              </SkeletonTheme>
            </Text>

          </div>
        ) : info.map((item) => (
          <div>
            <Banner img={item.banner}>
              <FavDiv>
                {
                  Object.entries(favs).length !== 0 && favs.find((fav) => fav.id === `anime/${item.id}`) ? (
                    <button type='button' onClick={() => delFav(item.id)}>
                      <BsHeartFill size='14px' color='white' />
                    </button>
                  ) : (
                    <BtnFav type='button' onClick={() => setFav(item.id, item.title, item.poster)}>
                      {'Agregar a favoritos '}
                      <BsHeart size='14px' color='white' />
                    </BtnFav>
                  )
                }
              </FavDiv>
              {/* {
                item.episodes && (
                  item.episodes[0].nextEpisodeDate && (
                    <NextEpisode>
                      <Emoji emoji='tear-off-calendar' />
                      {
                        item.episodes[0].nextEpisodeDate
                      }
                    </NextEpisode>
                  )
                )
              } */}
              {/* <Rating>
                <Emoji emoji='star' />
                {item.rating}
              </Rating> */}

            </Banner>
            <Body>

              <Poster alt={item.id} src={item.poster} />

              <TextRight>
                <Title alignRight='true'>Título</Title>
                <Text alignRight='true'>{item.title}</Text>
                <Title alignRight='true'>Estado</Title>
                <Text alignRight='true'>{item.debut}</Text>
                <Title alignRight='true'>Tipo</Title>
                <Text alignRight='true'>{item.type}</Text>

              </TextRight>
            </Body>

            <Title>Géneros</Title>
            <BadgeDiv>{item.genres.map((gen) => (<Badge>{gen}</Badge>))}</BadgeDiv>

            <Title>Sinopsis</Title>
            <Text>{item.synopsis}</Text>

          </div>
        ))
      }
    </HeaderBox>

  );
};

export const DetailCardDesktop = ({ id }) => {
  const [info, setInfo] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/GetAnimeInfo/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setInfo(info);
        setLoading(false);
      });

  }, []);

  useEffect(() => {
    window.fetch(`${BASE_URL}/api/v1/GetAnimeEpisodes/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setEpisodes(info);
      });

  }, []);

  console.log(episodes);

  const setFav = (id, title, poster) => {
    let fav = [];
    JSON.stringify(reactLocalStorage.getObject('favs')) !== '{}' ? fav = reactLocalStorage.getObject('favs') : fav = [];
    fav.push({
      id: `anime/${id}` || null,
      title: title || null,
      poster: poster || null,
    });
    reactLocalStorage.setObject('favs', fav);
    setIsFav(!isFav);
  };

  const delFav = (id) => {
    let fav = reactLocalStorage.getObject('favs');
    const index = fav.findIndex((x) => x.id === id);
    fav.splice(index, 1);
    reactLocalStorage.setObject('favs', fav);
    setIsFav(!isFav);
  };

  const favs = reactLocalStorage.getObject('favs');
  return (

    <HeaderBoxDesktop>
      {
        loading ? (
          <div>
            <Banner>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HEADER_COLOR}>
                <Skeleton height='20vw' />
              </SkeletonTheme>
            </Banner>
            <Body>
              <TextRight skeleton='true'>
                <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HEADER_COLOR}>
                  <Skeleton count={4} />
                </SkeletonTheme>
              </TextRight>
              <TextRight skeleton='true'>
                <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HEADER_COLOR}>
                  <Skeleton count={4} />
                </SkeletonTheme>
              </TextRight>
            </Body>
            <Text skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HEADER_COLOR}>
                <Skeleton count={6} />
              </SkeletonTheme>
            </Text>

          </div>
        ) : info && info.map((item) => {
          return (
            <div>
              <Banner img={item.banner}>

                {
                  Object.entries(favs).length !== 0 && favs.find((fav) => `anime/${item.id}` === fav.id) ? (
                    <button type='button' onClick={() => delFav(item.id)}>
                      <FavDivDesktop>
                        <SvgDiv>
                          <BsHeartFill size='1.1vw' color='white' />
                        </SvgDiv>
                      </FavDivDesktop>
                    </button>
                  ) : (
                    <BtnFav type='button' onClick={() => setFav(item.id, item.title, item.poster)}>
                      <FavDivDesktop>
                        {'Agregar a favoritos '}
                        <BsHeart size='1.1vw' color='white' />
                      </FavDivDesktop>
                    </BtnFav>
                  )
                }
                <HeaderDesktop>
                  <TiStarburst color='#69afef' size='3vw' />
                  <IconContainer>
                    {
                      item.debut === 'En emision' ? <FaCalendarAlt size='1vw' /> : <FaCalendarCheck size='1vw' />
                    }
                  </IconContainer>
                  <StatusDiv>
                    {
                      item.debut === 'En emision' ? 'En Emisión' : 'Finalizado'
                    }
                  </StatusDiv>
                  <TitleDesktop>
                    {item.title}
                  </TitleDesktop>
                  <TypeDiv>
                    {item.type}
                  </TypeDiv>

                </HeaderDesktop>
              </Banner>

              <GradientImage img={item.banner}>
                <GradientDiv />
              </GradientImage>
              <FlexDiv>
                <EpisodesDiv>
                  <EpisodesHeader>
                    <h1>Episodios</h1>
                    <Link to={`/${item.id}/episodes`} style={{ color: '#FFF' }}>
                      <ShowMore>
                        Ver más
                      </ShowMore>
                    </Link>
                  </EpisodesHeader>
                  <ListDiv>
                    <List>
                      {
                        episodes && episodes.map((epi) => (
                          <Item>

                            <Link to={`/watch/${item.id.replace('anime/', '')}/${epi.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none', color: '#FFF' }}>
                              <EpisodeCard>
                                <PlayDiv>
                                  <BsPlayFill size='24px' />
                                </PlayDiv>
                                <NumberDiv>
                                  <h2>{epi.episode}</h2>
                                </NumberDiv>
                                <PreviewImage alt='' src={epi.poster} />
                                <TextEpisodeCard>{`${item.title} - Episodio ${epi.episode}`}</TextEpisodeCard>
                              </EpisodeCard>
                            </Link>
                          </Item>
                        ))
                      }
                    </List>
                  </ListDiv>
                </EpisodesDiv>
                <InfoDiv>
                  <h1>Descripción</h1>
                  <InfoBody>
                    <p>{item.synopsis}</p>
                  </InfoBody>

                  {/* {
                    item.episodes && (
                      item.episodes[0].nextEpisodeDate && (
                        <>
                          <h1>Próximo episodio</h1>
                          <InfoBody>
                            <p>{item.episodes[0].nextEpisodeDate}</p>
                          </InfoBody>
                        </>
                      )
                    )
                  } */}

                  <h1>Géneros</h1>
                  <InfoBody>
                    <BadgeDiv>{item.genres.map((gen) => (<BadgeDesktop>{gen}</BadgeDesktop>))}</BadgeDiv>
                  </InfoBody>
                </InfoDiv>
              </FlexDiv>
              <Body>
                <PosterDesktop alt={item.id} src={item.poster} />
              </Body>

            </div>
          );
        })
      }
    </HeaderBoxDesktop>

  );
};
