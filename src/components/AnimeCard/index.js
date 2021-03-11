import React from 'react';
import Emoji from 'react-emojis';
import { Link } from '@reach/router';
import { DivBox, DivTitle } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';

export const AnimeCard = ({ sectionHome, id, title, poster, rating, episode, animeId, episodes, searchSize, relatedTitle = '' }) => {
  const [show, element] = useNearScreen();

  return (
    <Link
      to={
        episode ? `watch/${animeId}/${episode}` : `/${id}`
      }
      ref={element}
    >
      {
        show && (
          <DivBox cover={poster} searchSize={searchSize}>
            <DivTitle>
              <h1>{title}</h1>
              {
                episode && (
                  <h2>
                    Episodio
                    {' '}
                    {episode}
                  </h2>
                )
              }
              {
                relatedTitle ? (
                  <h2>
                    {relatedTitle}
                  </h2>
                ) : rating && (
                  <h2>
                    <Emoji emoji='star' />
                    {rating}
                  </h2>
                )
              }
              {
                episodes && (
                  <h2>
                    <Emoji emoji='tear-off-calendar' />
                    {
                      episodes[0].nextEpisodeDate ?
                        episodes[0].nextEpisodeDate :
                        ' Sin confirmar'
                    }
                  </h2>
                )
              }

            </DivTitle>

          </DivBox>
        )
      }
    </Link>
  );
};
