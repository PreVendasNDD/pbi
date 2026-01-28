import React, { useState } from 'react';
import DataImport from './components/DataImport/DataImport';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import { AppContainer, MainContent } from './styles/AppStyles';

function App() {
  const [data, setData] = useState(null);
  const [visualizations, setVisualizations] = useState([]);
  const [selectedChart, setSelectedChart] = useState(null);

  const handleFileUpload = (uploadedData) => {
    setData(uploadedData);
  };

  const addVisualization = (chartType, config) => {
    const newViz = {
      id: Date.now(),
      type: chartType,
      config: config,
      layout: { i: `${Date.now()}`, x: 0, y: 0, w: 6, h: 8 }
    };
    setVisualizations([...visualizations, newViz]);
  };

  return (
    <AppContainer>
      <Sidebar 
        onSelectChart={setSelectedChart}
        selectedChart={selectedChart}
        data={data}
        onAddVisualization={addVisualization}
      />
      <MainContent>
        {!data ? (
          <DataImport onFileUpload={handleFileUpload} />
        ) : (
          <Dashboard 
            data={data}
            visualizations={visualizations}
            setVisualizations={setVisualizations}
          />
        )}
      </MainContent>
    </AppContainer>
  );
}

export default App;
