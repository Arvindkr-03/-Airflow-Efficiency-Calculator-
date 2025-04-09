// components/RoomVisualizer.jsx
import React from 'react';

const directionToArrow = {
  north: '⬇',
  south: '⬆',
  east: '⬅',
  west: '➡',
};

const RoomVisualizer = ({ data }) => {
  const { window1, window2, wind } = data;

  return (
    <div className="mt-4 p-4 border rounded shadow bg-white">
      <h3 className="font-medium mb-2">Airflow Direction Visualization</h3>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 text-center text-2xl font-bold">
        <div>{window1 === 'north' && '🪟'}</div>
        <div>{wind === 'north' && <span className="animate-bounce">{directionToArrow['north']}</span>}</div>
        <div>{window2 === 'north' && '🪟'}</div>

        <div>{wind === 'west' && <span className="animate-bounce">{directionToArrow['west']}</span>}</div>
        <div className="border border-gray-300 h-24 flex items-center justify-center">Room</div>
        <div>{wind === 'east' && <span className="animate-bounce">{directionToArrow['east']}</span>}</div>

        <div>{window1 === 'south' && '🪟'}</div>
        <div>{wind === 'south' && <span className="animate-bounce">{directionToArrow['south']}</span>}</div>
        <div>{window2 === 'south' && '🪟'}</div>
      </div>
    </div>
  );
};

export default RoomVisualizer;
