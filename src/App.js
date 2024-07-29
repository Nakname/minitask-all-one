import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProgramList from './components/ProgramList';
import Sidebar from './components/Sidebar';
import TabHeader from './components/TabHeader';
import UserProgramList from './components/UserProgramList';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <section className="profile-header">
          <header className="header">
            <h2>Иванов Иван</h2>
          </header>
        </section>
        <div classname="inner-wrapper">
          <div className="sidebar-section">
            <Sidebar className="sidebar" />
          </div>
          <section className="content-section">
            <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'all' ? <ProgramList /> : <UserProgramList />}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
