import React, { useState, useEffect } from 'react';
import Emoji from 'react-emojis';
import { Link } from '@reach/router';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { reactLocalStorage } from 'reactjs-localstorage';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { FaCheckCircle } from 'react-icons/fa';
import { EpisodesBox, EpisodesBoxDesktop, EpisodesH1, List, ListDesktop, Item, EpisodeDiv, EpisodeDivDesktop, DivTitleDesktop, NextEpisodeDesktop, EpisodeImg, EpisodeImgDesktop, SortDiv, SortDivDesktop } from './styles';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, HIGH_COLOR, SECONDARY_COLOR } from '../../styles/DarkMode';

export const EpisodesCard = ({ id }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/GetAnimeEpisodes/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setEpisodes(info);
        setLoading(false);
      });

  }, []);
  return (
    <EpisodesBox>
      <EpisodesH1>
        Episodios
        <SortDiv>
          <button type='button' onClick={() => setSort(!sort)}>
            {' '}
            <RiArrowUpDownLine size='32px' color='white' />
          </button>
        </SortDiv>
      </EpisodesH1>

      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <List>
            {/* {
              episodes.map((episode) => (
                episode.episodes.map((detail) => (

                  detail.nextEpisodeDate && (
                    <EpisodeDiv>
                      <Item>
                        <h4>
                          {'Próximo episodio: '}
                          {detail.nextEpisodeDate}
                          {' '}
                          <Emoji emoji='tear-off-calendar' size='24' />
                        </h4>
                      </Item>
                    </EpisodeDiv>
                  )))))
            } */}
            {
              sort ? (episodes.map((episode) => (

                episode.episode && (
                  reactLocalStorage.get(`${id}-${episode.episode}`) ?
                    (
                      <Link to={`/watch/${id}/${episode.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none' }}>
                        <EpisodeDiv watched='true'>
                          <h2>
                            Episodio
                            {' '}
                            {episode.episode}
                          </h2>
                          <EpisodeImg alt='' src={episode.poster} />
                        </EpisodeDiv>
                      </Link>
                    ) :
                    (
                      <Link to={`/watch/${id}/${episode.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none' }}>
                        <EpisodeDiv>

                          <h2>
                            Episodio
                            {' '}
                            {episode.episode}
                          </h2>
                          <EpisodeImg alt='' src={episode.poster} />
                        </EpisodeDiv>
                      </Link>
                    )
                )))) :

                episodes.map((episode) => (

                  episode.episode && (
                    reactLocalStorage.get(`${id}-${episode.episode}`) ?
                      (
                        <Link to={`/watch/${id}/${episode.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none' }}>
                          <EpisodeDiv watched='true'>
                            <h2>
                              Episodio
                              {' '}
                              {episode.episode}
                            </h2>
                            <EpisodeImg alt='' src={episode.poster} />
                          </EpisodeDiv>
                        </Link>
                      ) :
                      (
                        <Link to={`/watch/${id}/${episode.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none' }}>
                          <EpisodeDiv>

                            <h2>
                              Episodio
                              {' '}
                              {episode.episode}
                            </h2>
                            <EpisodeImg alt='' src={episode.poster} />
                          </EpisodeDiv>
                        </Link>
                      )
                  )
                )).reverse()
            }
          </List>
        )
      }

    </EpisodesBox>
  );
};

export const EpisodesCardDesktop = ({ id }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/GetAnimeEpisodes/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setEpisodes(info);
        setLoading(false);
      });

  }, []);
  console.log(episodes);
  return (
    <>
      <button type='button' onClick={() => setSort(!sort)}>
        <SortDivDesktop>
          <RiArrowUpDownLine size='24px' color='white' />
        </SortDivDesktop>
      </button>

      {
        loading ? (
          <ListDesktop>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton height={100} />
              </SkeletonTheme>
            </Item>
          </ListDesktop>
        ) : (
          <ListDesktop>
            {
              episodes.map((episode) => (

                episode.nextEpisodeDate && (
                  <NextEpisodeDesktop>
                    <Item>

                      {'Próximo episodio: '}
                      {episode.nextEpisodeDate}
                      {' '}
                      <Emoji emoji='tear-off-calendar' size='24' />

                    </Item>
                  </NextEpisodeDesktop>
                )))
            }
            {
              sort ? (episodes.map((episode) => (
                episode.episode && (
                  reactLocalStorage.get(`${id}-${episode.episode}`) ?
                    (
                      <Link to={`/watch/${id}/${episode.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none' }}>
                        <EpisodeDivDesktop image={episode.poster}>
                          <DivTitleDesktop>
                            <FaCheckCircle size='32px' />
                          </DivTitleDesktop>

                        </EpisodeDivDesktop>
                      </Link>
                    ) :
                    (
                      <Link to={`/watch/${id}/${episode.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none' }}>
                        <EpisodeDivDesktop image={episode.poster}>
                          <DivTitleDesktop>

                            {episode.episode}
                          </DivTitleDesktop>

                        </EpisodeDivDesktop>
                      </Link>
                    )
                )))) :

                episodes.map((episode) => (

                  episode.episode && (
                    reactLocalStorage.get(`${id}-${episode.episode}`) ?
                      (
                        <Link to={`/watch/${id}/${episode.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none' }}>
                          <EpisodeDivDesktop image={episode.poster}>
                            <DivTitleDesktop>
                              <FaCheckCircle size='32px' />
                            </DivTitleDesktop>

                          </EpisodeDivDesktop>
                        </Link>
                      ) :
                      (
                        <Link to={`/watch/${id}/${episode.episode}/${episodes.length - 1}`} style={{ textDecoration: 'none' }}>
                          <EpisodeDivDesktop image={episode.poster}>
                            <DivTitleDesktop>

                              {episode.episode}
                            </DivTitleDesktop>

                          </EpisodeDivDesktop>
                        </Link>
                      )
                  )
                )).reverse()
            }
          </ListDesktop>
        )
      }
    </>

  );
};
