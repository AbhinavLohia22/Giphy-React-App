import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SearchContainer.css';
import '../css/styles.css';
import SearchBar from './search components/SearchBar';
import GiphyBlock from './search components/GiphyBlock';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';

const SearchContainer = () => {

  const  intitial_query = 'Greeting';
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState(intitial_query);
  const [offset, setOffset] = useState(0);

  const navigate = useNavigate();
  const handleSearch = (query) => {
    navigate(`/search/${query}`);
    setQuery(query);
    setOffset(0);
    setGifs([]);
  };

  const fetchMoreGifs = async () => {
    try {
      const apiKey = '39wDC9GZ3EI4U5KhdvU5EFvGzVWBvpMz';
      const limit = 16;
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}`;
      const response = await axios.get(url);

      const gifData = response.data.data;
      const gifUrls = gifData.map((gif) => gif.images.fixed_height.url);
      setGifs((prevGifs) => [...prevGifs, ...gifUrls]);
      setOffset((prevOffset) => prevOffset + limit);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  useEffect(() => {
    if (query !== '') {
      fetchMoreGifs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="search-container">
      <SearchBar onSearch={handleSearch} />
      <InfiniteScroll
        dataLength={gifs.length}
        next={fetchMoreGifs}
        hasMore={true}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="giphy-grid"
          columnClassName="grid-card"
        >
          {gifs.map((url, index) => (
            <GiphyBlock key={index} url={url} />
          ))}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};

export default SearchContainer;
