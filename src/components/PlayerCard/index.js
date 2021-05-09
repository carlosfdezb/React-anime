import React, { useEffect, useState } from 'react';
import Iframe from 'react-iframe';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { reactLocalStorage } from 'reactjs-localstorage';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { PlayerH1, VideoDiv, VideoDivDesktop, PlayerBox, List, Item, Serverh2, EpisodesH1Desktop, Linked, EpisodesH1, Center, Left, Right } from './styles';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const PlayerCard = ({ id, episode, last }) => {
  const [video, setVideo] = useState([]);
  const [server, setServer] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/GetAnimeServers/${id}/${episode}`)
      .then((res) => res.json())
      .then((info) => {
        console.log(episode);
        setVideo(info.servers);
        reactLocalStorage.set(`${id}-${episode}`, true);
        setLoading(false);
      });

  }, []);

  const changeServer = () => {
    server < Object.entries(video).length - 1 ? setServer(server + 1) : setServer(0);
  };

  return (
    <PlayerBox>
      <PlayerH1>
        {'Episodio '}
        {episode}
      </PlayerH1>
      {
        loading ? (
          <VideoDiv>

            <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
              <Skeleton height={350} />
            </SkeletonTheme>

          </VideoDiv>
        ) : (
          <List>
            {
              video !== undefined && Object.entries(video).length !== 0 ? (
                video[server][0] === 'Umi' || video[server][0] === 'Mega' || video[server][0] === 'Okru' ? (
                  <VideoDiv>
                    <Item>
                      <Iframe
                        id='player'
                        sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
                        width='100%'
                        height='350'
                        url={video[server][1]}
                        frameBorder='0'
                        allowFullScreen
                      />
                    </Item>
                    <Serverh2>{video[server][0]}</Serverh2>
                  </VideoDiv>
                ) : changeServer()) : ''
            }

          </List>

        )
      }
      <EpisodesH1>
        {
          parseInt(episode) - 1 !== 0 ? (
            <Left>
              <Linked href={`/watch/${id}/${parseInt(episode) - 1}/${last}`}>
                <MdKeyboardArrowLeft />
              </Linked>
            </Left>
          ) : ''
        }
        {
          video !== undefined ? <Center onClick={() => changeServer()}>Cambiar Servidor</Center> : <Center>No disponible</Center>
        }
        {
          parseInt(episode) + 1 <= last ? (
            <Right>
              <Linked href={`/watch/${id}/${parseInt(episode) + 1}/${last}`}>
                <MdKeyboardArrowRight />
              </Linked>
            </Right>
          ) : ''
        }
      </EpisodesH1>
    </PlayerBox>

  );
};

export const PlayerCardDesktop = ({ id, episode, last }) => {
  const [video, setVideo] = useState([]);
  const [server, setServer] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/GetAnimeServers/${id}/${episode}`)
      .then((res) => res.json())
      .then((info) => {
        console.log(episode);
        setVideo(info.servers);
        reactLocalStorage.set(`${id}-${episode}`, true);
        setLoading(false);
      });

  }, []);

  const changeServer = () => {
    server < Object.entries(video).length - 1 ? setServer(server + 1) : setServer(0);
  };

  return (
    <>
      {
        loading ? (
          <VideoDivDesktop>

            <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
              <Skeleton height={725} />
            </SkeletonTheme>

          </VideoDivDesktop>
        ) : (
          <List>
            {
              video !== undefined && Object.entries(video).length !== 0 ? (
                video[server][0] === 'Umi' || video[server][0] === 'Mega' || video[server][0] === 'Okru' ? (
                  <VideoDivDesktop>
                    <Item>
                      <Iframe
                        id='player'
                        sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
                        width='100%'
                        height='725px'
                        url={video[server][1]}
                        frameBorder='0'
                        allowFullScreen
                      />
                    </Item>
                    <Serverh2>{video[server][0]}</Serverh2>
                  </VideoDivDesktop>
                ) : changeServer()) : ''
            }

          </List>

        )
      }
      <EpisodesH1Desktop>
        {
          parseInt(episode) - 1 !== 0 ? (
            <Left>
              <Linked href={`/watch/${id}/${parseInt(episode) - 1}/${last}`}>
                <MdKeyboardArrowLeft />
              </Linked>
            </Left>
          ) : ''
        }
        {
          video !== undefined ? <Center onClick={() => changeServer()}>Cambiar Servidor</Center> : <Center>No disponible</Center>
        }
        {
          parseInt(episode) + 1 <= last ? (
            <Right>
              <Linked href={`/watch/${id}/${parseInt(episode) + 1}/${last}`}>
                <MdKeyboardArrowRight />
              </Linked>
            </Right>
          ) : ''
        }
      </EpisodesH1Desktop>
    </>
  );
};
