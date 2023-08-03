import React, { useState } from 'react';
import '../../css/Suggestion.css'
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from './Autocomplete';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const apiKey = '39wDC9GZ3EI4U5KhdvU5EFvGzVWBvpMz';
    const giphyBaseUrl = 'http://api.giphy.com/v1/gifs/search/tags';

    const handleInputChange = async (event) => {
        setQuery(event.target.value);

        try {
            const response = await axios.get(`${giphyBaseUrl}?q=${query}&api_key=${apiKey}`);
            const { data } = response.data;
            const suggestions = data.map((item) => item.name);
            setSuggestions(suggestions);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
        setSuggestions([]);
    };

    const handleSelectSuggestion = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
        onSearch(query);
    };

    return (
        <>
            <form className="input_form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for GIFs..."
                />
                <button type="submit">
                    <SearchIcon />
                </button>

            </form>
            <div className="suggestion">
                {suggestions.length > 0 && (
                    <Autocomplete queryNow={query} suggestions={suggestions} onSelect={handleSelectSuggestion} />
                )}
            </div>
        </>
    );
};

export default SearchBar;

//debounce