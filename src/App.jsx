import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import {
  useNavigate,
  useParams,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import "./App.css";
import "./style.css";

const App = () => {
  const navigate = useNavigate();

  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/search/${searchInput}`;
    navigate(url);
  };

  return (
    <PhotoContextProvider>
      <div className="container">
        <Header handleSubmit={handleSubmit} />
        <Routes>
          <Route path="/" element={<Navigate to="/mountain" />} />
          <Route path="/mountain" element={<Item searchTerm="mountain" />} />
          <Route path="/beach" element={<Item searchTerm="beach" />} />
          <Route path="/bird" element={<Item searchTerm="bird" />} />
          <Route path="/food" element={<Item searchTerm="food" />} />
          <Route path="/search/:searchInput" element={<Search />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </PhotoContextProvider>
  );
};
export default App;
