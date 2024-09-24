import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingSite from './components/LoadingSite';
import ErrorLoading from './components/ErrorLoading';
import MiniDogs from './components/MiniDogs';
import Setting from './components/Setting';
import Lang from "./components/Lang";
import Appearance from './components/Appearance';
import Task from './components/Task';
import Presidents from './components/Presidents';
import Airdrop from './components/Airdrop';
import Invite from './components/Invite';

function App() {
  return (
    <div className="App bg-app px-[16px] py-[18px] ">
      <Router>
        <Routes>
          <Route path="/" element={<LoadingSite />} />
          <Route path="errorloading" element={<ErrorLoading />} />
          <Route path="/minidogs" element={<MiniDogs />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/lang" element={<Lang />} />
          <Route path="/appearance" element={<Appearance />} />
          <Route path="/task" element={<Task />} />
          <Route path="/presidents" element={<Presidents />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/invite" element={<Invite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
