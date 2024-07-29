import React from 'react';
import "../styles/TabHeader.css";

const TabHeader = ({ activeTab, setActiveTab }) => {

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tab-header">
            <button 
                className={`tab-button ${activeTab === 'all' ? 'active' : ''}`} 
                onClick={() => handleTabClick('all')}
            >
                ВСЕ ПРОГРАММЫ
            </button>
            <button 
                className={`tab-button ${activeTab === 'my' ? 'active' : ''}`} 
                onClick={() => handleTabClick('my')}
            >
                МОИ ПРОГРАММЫ
            </button>
        </div>
    );
};

export default TabHeader;
