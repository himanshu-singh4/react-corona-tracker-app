import React, {useEffect, useState} from 'react';
import {fetchData} from './api'
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import Image from './covid-19-4960657_960_720.jpg';

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')


  useEffect(() => {
    const fetchFunc = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    fetchFunc();

  }, [])

  const handleCountryChange = async (country) => {
    
    const fetchedData = await fetchData(country)
    setData(fetchedData)
    setCountry(country)
  }

  return (
    <div className={styles.container}>
      <img src={Image} className={styles.image}/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Charts data={data} country={country}/>
    </div>
  );
}

export default App;
