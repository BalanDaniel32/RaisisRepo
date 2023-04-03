import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import AllMeetupsPage from './pages/AllMeetups';
import Layout from './components/layout/Layout/Layout.js';
import { FavoritesContextProvider } from './store/favorite-context';
const rootElement = document.getElementById("root");
render(
  <FavoritesContextProvider>
  <BrowserRouter>
  <Layout>
    <Routes>
    <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/new" element={<NewMeetupPage />} />
    </Routes>
    </Layout>
  </BrowserRouter>
  </FavoritesContextProvider>




  ,
  rootElement
);


