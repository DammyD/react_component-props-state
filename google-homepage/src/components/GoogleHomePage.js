import React, { useState } from 'react'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import "../styles/google-homepage.css";
import SearchBar from './SearchBar';

const GoogleHomePage = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
        setSearchHistory([...searchHistory, keyword]);
    };
    
  return (
    <div className="container">
        <Header />
        <SearchBar onSearch={handleSearch} />
        {searchKeyword && (
            <div className="search-history">
           {searchKeyword}
            </div>
        )}
        <MainContent />
        <Footer />
    </div>
  );
}

export default GoogleHomePage;