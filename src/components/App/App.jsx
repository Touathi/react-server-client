import {useState, useEffect} from 'react';
import axios from 'axios';
import CreatureList from '../CreatureList/CreatureList';
import CreatureForm from '../CreatureForm/CreatureForm';

function App () {
 
  const [creatureList, setCreatureList] = useState( [] );


  // axios GET
  const fetchCreatures = () => {
    axios.get('/creature')
    .then ( response => {
      console.log(response.data);
      setCreatureList(response.data);
    })
    .catch ( err => {
      console.log(err);
    })
  }

  useEffect( () => {
    fetchCreatures();
  }, []) // run once and never again


  

  return (
    <div>
      <CreatureForm 
      fetchCreatures={fetchCreatures}/>
      <CreatureList 
        creatureList={creatureList}/>
    </div>
  );
  }


export default App
