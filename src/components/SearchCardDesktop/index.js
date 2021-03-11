import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import regeneratorRuntime from 'regenerator-runtime';
import { SearchBoxDesktop, SearchDivDesktop, SearchInputDesktop } from './styles';
import { BASE_URL } from '../../urls/url';
import { AnimeCard } from '../AnimeCard';

import { List, Item, ListDiv } from '../ListOfSearch/styles';
import { TEXT_COLOR } from '../../styles/DarkMode';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchUrl();
  }, [url]);
  return [data, loading];
}
export { useFetch };

const SearchCardDesktop = () => {

  useEffect(() => {
    console.log('rendered!');
    console.log('searchTerm!', searchTerm);
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [data, loading] = useFetch(
    `${BASE_URL}/api/v1/Search/${searchTerm}`,
  );

  return (
    <SearchBoxDesktop>
      <SearchDivDesktop>
        <SearchInputDesktop onChange={(e) => setSearchTerm(e.target.value)} placeholder='Buscar...' />
        <MdSearch size='35px' color={TEXT_COLOR} />
      </SearchDivDesktop>

      <ListDiv>

        <List>
          {

            !loading && (data.search && (data.search.map((category) => <Item key={category.id}><AnimeCard {...category} searchSize='true' /></Item>)))
          }
        </List>
      </ListDiv>
    </SearchBoxDesktop>
  );
};

export default SearchCardDesktop;
