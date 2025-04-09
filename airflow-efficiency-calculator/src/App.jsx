import './index.css';

import React, { useState } from 'react';
import RoomInputForm from './components/RoomInputForm';
import ResultPanel from './components/ResultPanel';
import RoomVisualizer from './components/RoomVisualizer';
import { calculateEfficiency } from './utils/efficiencyLogic';

const App = () => {
  const [result, setResult] = useState(null);

  const handleCalculate = (formData) => {
    const efficiency = calculateEfficiency(formData);
    setResult({ ...formData, efficiency });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Airflow Efficiency Calculator</h1>
      <RoomInputForm onCalculate={handleCalculate} />
      {result && (
        <div className="mt-6 animate-fade-in">
          <ResultPanel efficiency={result.efficiency} />
          <RoomVisualizer data={result} />
        </div>
      )}
    </div>
  );
};

export default App;
