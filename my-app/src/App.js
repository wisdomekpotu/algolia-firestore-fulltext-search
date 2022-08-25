import React from 'react';
import "./App.css"
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  PoweredBy,
  Hits,
  Highlight,
} from 'react-instantsearch-hooks-web';


//algolia credentials
const searchClient = algoliasearch(
  process.env.REACT_APP_ALOGLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
);


function Hit ({ hit }) {
  return (
  <article>
    <img src={hit.avatar} alt={hit.username} />
    <h1> <Highlight attribute="username" hit={hit} /> </h1>
    <p><strong>Email:</strong> {hit.email}</p>
    <p><strong>Bio:</strong>  {hit.bio}</p>   
  </article>
  );
}


const App = () => {
  return (
    <div>
    <InstantSearch searchClient={searchClient} indexName='users'>

      <h3 className='title'>Algolia Firebase Search</h3>

      <SearchBox autoFocus placeholder='Search...' className='searchbox'/>

      <PoweredBy className='poweredby'/>

      <Hits hitComponent={Hit} className="hits"/>

      </InstantSearch>
    </div>
  );
}


export default App;