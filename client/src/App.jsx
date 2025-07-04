import React, { useState } from 'react';
import './App.css'
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  const [reload, setReload] = useState(false);

  return (
    <>
      <ErrorBoundary>
        <h1>
          Bug Tracker
        </h1>
        <BugForm 
          onBugAdded={() => setReload(!reload)}
        />
        <BugList reload={reload}/>
      </ErrorBoundary>
    </>
  )
}

export default App
