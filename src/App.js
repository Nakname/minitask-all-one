import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import ProgramList from './components/ProgramList';
import Sidebar from './components/Sidebar';
import TabHeader from './components/TabHeader';
import UserProgramList from './components/UserProgramList';
import './styles/App.css';

const allPrograms = [
  { id: 1, name: 'Программа 1', data: '12-24 ноября' },
  { id: 2, name: 'Программа 2', data: '12 часов' },
  { id: 3, name: 'Программа 3', data: '12 часов' },
  { id: 4, name: 'Программа 4', data: '20 часов' },
  { id: 5, name: 'Программа 5', data: '15 часов' },
  { id: 6, name: 'Программа 6', data: '10 часов' },
  { id: 7, name: 'Программа 7', data: '8 часов' },
  { id: 8, name: 'Программа 8', data: '9 часов' },
  { id: 9, name: 'Программа 9', data: '11 часов' },
  { id: 10, name: 'Программа 10', data: '13 часов' },
  { id: 11, name: 'Программа 11', data: '14 часов' },
  { id: 12, name: 'Программа 12', data: '16 часов' },
  { id: 13, name: 'Программа 13', data: '2 часa' },
  { id: 14, name: 'Программа 14', data: '3 часa' },
  { id: 15, name: 'Программа 15', data: '16 часов' },
  { id: 16, name: 'Программа 16', data: '15 часов' },
  { id: 17, name: 'Программа 17', data: '17 часов' },
  { id: 18, name: 'Программа 18', data: '5 часов' },
  { id: 19, name: 'Программа 19', data: '5 часов' },
  { id: 20, name: 'Программа 20', data: '7 часов' },
  { id: 21, name: 'Программа 21', data: '8 часов' },
  { id: 22, name: 'Программа 22', data: '5 часов' },
  { id: 23, name: 'Программа 23', data: '7 часов' },
  { id: 24, name: 'Программа 24', data: '7 часов' },
  { id: 25, name: 'Программа 25', data: '8 часов' },
  { id: 26, name: 'Программа 26', data: '9 часов' },
  { id: 27, name: 'Программа 27', data: '9 часов' },
  { id: 28, name: 'Программа 28', data: '12 часов' },
  { id: 29, name: 'Программа 29', data: '15 часов' },
];

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [userPrograms, setUserPrograms] = useState([]);
  const recordsPerPage = 4;

  const programsToShow = activeTab === 'all' ? allPrograms : (userPrograms || []);

  const totalPages = Math.ceil(programsToShow.length / recordsPerPage);

  const currentPrograms = programsToShow.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (page) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleAddToUserPrograms = (program) => {
    if (!userPrograms.some(up => up.id === program.id)) {
      setUserPrograms(prevPrograms => [...prevPrograms, { ...program, status: 'Куплено' }]);
    }
  };

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
            <TabHeader activeTab={activeTab} setActiveTab={handleTabChange} />
            {activeTab === 'all' ? (
              <ProgramList programs={currentPrograms} onAddToUserPrograms={handleAddToUserPrograms} />
            ) : (
              userPrograms.length > 0 ? (
                <UserProgramList programs={currentPrograms} />
              ) : (
                <p className="none-programs">Нет активных программ</p>
              )
            )}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
