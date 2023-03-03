import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
import Home from './Home';
import CharPage from './CharPage';
import Episodes from './Episodes.jsx';

import '../styles/App.css';

function App() {
  const [search, setSearch] = useState('');
  const [searchEpisodes, setSearchEpisodes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    fetchCharacterData();
    fetchEpisodesData();
  }, []);

  useEffect(() => {
    filterResults();
  }, [characterData, episodesData, search]);

  const fetchCharacterData = async () => {
    let allCharacters = [];
    let url = 'https://rickandmortyapi.com/api/character';
    while (url) {
      try {
        const response = await axios.get(url);
        allCharacters = [...allCharacters, ...response.data.results];
        url = response.data.info.next;
      } catch (err) {
        console.error(err);
        break;
      }
    }
    setCharacterData(allCharacters);
  };

  const fetchEpisodesData = async () => {
    let allEpisodes = [];
    let url = 'https://rickandmortyapi.com/api/episode';
    while (url) {
      try {
        const response = await axios.get(url);
        allEpisodes = [...allEpisodes, ...response.data.results];
        url = response.data.info.next;
      } catch (err) {
        console.log(err);
        break;
      }
    }
    setEpisodesData(allEpisodes);
  };

  const filterResults = () => {
    const filteredResults = characterData.filter((character) => {
      return character.name.toLowerCase().includes(search);
    });
    const filteredEpisodes = episodesData.filter((episode) => {
      return episode.name.toLowerCase().includes(search);
    });
    setSearchEpisodes(filteredEpisodes);
    setSearchResults(filteredResults);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout search={search} setSearch={setSearch} />}
        >
          <Route index element={<Home characters={searchResults} />} />
          <Route
            path="/episodes"
            element={<Episodes episodes={searchEpisodes} />}
          />
          <Route
            path="/char/:id"
            element={<CharPage characters={characterData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
