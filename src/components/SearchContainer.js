import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../actions/queryActions';
import '../css/SearchContainer.css';
import SearchBar from './search components/SearchBar';
import axios from 'axios';
import InfiniteScroll from './search components/InfiniteScroll';
import Masonry from './search components/Masonry';


const SearchContainer = () => {

  const [gifs, setGifs] = useState([]);
  const query = useSelector((state) => state.queryReducer.query);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  const navigate = useNavigate();

  const handleSearch = (newQuery) => {
    dispatch(setQuery(newQuery));
    navigate(`/search/${newQuery}`);
    setQuery(newQuery);
    setOffset(0);
    setGifs([]);
  };

  const fetchMoreGifs = async () => {
    try {
      const apiKey = '39wDC9GZ3EI4U5KhdvU5EFvGzVWBvpMz';
      const limit = 16; // 4 columns * 4 rows
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}`;
      const response = await axios.get(url);

      const gifData = response.data.data;
      const gifPosts = gifData.map((gif) => ({
        id: gif.id,
        url: gif.images.fixed_height.url,
      }));
      setGifs((prevGifs) => [...prevGifs, ...gifPosts]);
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

  return (
    <div className="search-container">
      <SearchBar onSearch={handleSearch} />
      <InfiniteScroll
        next={fetchMoreGifs}
        hasMore={true}
      >
        <Masonry posts={gifs} />
      </InfiniteScroll>
    </div>
  );
};

export default SearchContainer;

//ading