import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollWrapper } from 'utils/ScrollWrapper';
import { Layout } from 'containers/indexContainers';
import { HomePage, PokemonDetailsPage, Status404 } from 'pages/indexPages';

export function NavigationRoutes() {
  return (
    <BrowserRouter>
      <ScrollWrapper>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/details/:pokemonName"
              element={<PokemonDetailsPage />}
            />
            <Route path="*" element={<Status404 />} />
          </Routes>
        </Layout>
      </ScrollWrapper>
    </BrowserRouter>
  );
}
