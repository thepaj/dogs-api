import { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './component/Search';
import DogContainer from './component/DogContainer';

function App() {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState('');
  const [numberOfImages, setNumberOfImages] = useState('');

  const breedListAllURL = 'https://dog.ceo/api/breeds/list/all';

  useEffect(() => {
    getAllBreeds();
  }, [])

  const getAllBreeds = async () => {
    axios 
      .get(breedListAllURL)
      .then(res => {
        setBreeds(Object.keys(res.data.message));
      })
      .catch(err => console.log(err));
  }

  const handleNumberChange = (event) => {
    setNumberOfImages(event.target.value);
  }

  const handleOptionChange = (event) => {
    setBreed(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let URL = `https://dog.ceo/api/breed/${breed}/images/random/${numberOfImages}`;
    console.log(URL);
    axios
      .get(URL)
      .then(res => {
        setDogs(res.data.message);
      })
      .catch(err => console.log(`handleBreedClick: ${err}`));
  }
  
    return (
      <div className="app">
        <h1>Dog API</h1>
        <Search 
          breeds={breeds} 
          value={numberOfImages} 
          onInputChange={(e) => handleNumberChange(e)} 
          handleOptionChange={handleOptionChange} 
          handleSubmit={(e) => handleSubmit(e)} />
        <DogContainer dogs={dogs} />
      </div>
    );
}


export default App;
