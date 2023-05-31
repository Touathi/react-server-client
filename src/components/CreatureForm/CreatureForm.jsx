import {useState} from 'react';
import axios from 'axios';

function CreatureForm(props) {
    
    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        
        console.log(
          `submitted!`
        ); 
    
        axios.post('/creature', {
              name: newCreatureName,
              origin: newCreatureOrigin
          }).then((response) => {
            props.fetchCreatures();
            // half of clearing inputs...
            setNewCreatureName('')
            setNewCreatureOrigin('')
          }).catch((err) => {
            console.log(err)
          })


            // Name Input
        const handleNewName= (event) => {
            setNewCreatureName(event.target.value);
        }
        
        // Origin Input
        const handleNewOrigin = (event) => {
            setNewCreatureOrigin(event.target.value);
    }

    return (
        <>
        <h2>
        Add Creature
      </h2>
      <form onSubmit={handleSubmit}>

        {/* Lable for name Input */}
        <label htmlFor="name">Name: </label>
        <input
        id='name'
        value={newCreatureName}
        onChange={handleNewName}/>

        {/* Label for origin Input */}
        <label htmlFor='origin'>Origin: </label>
        <input
        id='origin'
        value={newCreatureOrigin}
        onChange={handleNewOrigin}/>

        <button 
        type='submit'> Add Creature</button>
      </form>
      </>
    )
}
}

export default CreatureForm