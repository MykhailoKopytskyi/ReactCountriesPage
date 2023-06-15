import "./App.css";
import { useEffect, useState } from 'react';

import Countries from "./components/Countries";
import Pagination from './components/Pagination';
import Search from "./components/Search";



function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [countriesArray, setCountriesArray] = useState( [] );
  const [pageAccumulates] = useState(9);
  const [loaded, setLoaded] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  

  useEffect( () => {
    async function getCountries(url) {
      try {
        console.log("query")
        let data = await fetch( url );
        let countries = await data.json();
        console.log(countries);
        setCountriesArray(countries);
        setLoaded(true)
        return await countries;
      }
      catch(error) {
        console.error(error)
        return false
      }
      
    }
    getCountries("https://restcountries.com/v3.1/all")
  }, [] )





  return (
    <div className="App">

      <Search

        searchValue={searchValue}
        setSearchValue={setSearchValue}
        countriesArray={countriesArray}

      />

     <Countries
        countriesArray={countriesArray}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageAccumulates={pageAccumulates}
        countriesArrayLength={countriesArray.length}
        setLoaded={setLoaded}
        loaded={loaded}

     />

    <Pagination 
     
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        countriesArrayLength={countriesArray.length}
        pageAccumulates={pageAccumulates}
     />
    </div>
  );
}

export default App;
