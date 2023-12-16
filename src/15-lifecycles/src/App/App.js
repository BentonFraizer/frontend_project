import './App.css';
import { Header } from '../Header/Header';
import { useEffect, useState } from 'react';
import { Season } from '../Season/Season';
import { Spinner } from '../Spinner/Spinner';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.sampleapis.com/simpsons/episodes')
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const groupedByEpisode = data.reduce((result, item) => {
      const season = item.season;

      if (!result[season]) {
        result[season] = [];
      }

      result[season].push(item);
      return result;
    }, {});

    const resultArray = Object.values(groupedByEpisode);
    setGroupedData(resultArray);
  }, [data]);

  return (
    <div className="App">
      <Header />
      {isLoading ? <Spinner /> : groupedData.map((season, index) => <Season key={season[0].id} data={season} index={index} />)}
    </div>
  );
}

export default App;
