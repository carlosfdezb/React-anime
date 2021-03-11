import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { BrowseBox, BrowseH1, List, Item, Button } from './styles';
import { AnimeCard } from '../AnimeCard';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url);
      const json = data.concat(await response.json());
      setData(json);
      setLoading(false);
      console.log(data);
    }
    fetchUrl();
  }, [url]);
  return [data, loading];
}
export { useFetch };

const ListOfBrowseDesktop = ({ gen }) => {
  useEffect(() => {
    console.log('rendered!');
    console.log('searchTerm!', searchTerm);
  });

  const [searchTerm, setSearchTerm] = useState(1);
  const [data, loading] = useFetch(
    `${BASE_URL}/api/v1/getByCategorie/${gen}/${searchTerm}`,
  );

  const titulo = gen.toUpperCase().replaceAll('-', ' ');

  return (
    <>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <List>
            {
              !loading && data && data.map((g) => <Item><AnimeCard {...g} searchSize='true' /></Item>)
            }
          </List>
        )
      }

      <Button onClick={() => setSearchTerm(searchTerm + 1)}>Cargar Más</Button>
    </>
  );
};

export default ListOfBrowseDesktop;
