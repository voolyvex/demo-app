import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '1-17-2023'}, {weight: 176, date: '1-18-2023'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  };

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;
