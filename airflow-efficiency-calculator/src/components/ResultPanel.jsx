// components/ResultPanel.jsx
import React from 'react';

const ResultPanel = ({ efficiency }) => {
  return (
    <div className="p-4 rounded shadow bg-gray-100">
      <h2 className="text-xl font-semibold">Efficiency Result</h2>
      <p className="text-lg mt-2">Airflow Efficiency: <strong>{efficiency}</strong></p>
    </div>
  );
};

export default ResultPanel;
