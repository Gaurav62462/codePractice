import React from 'react';

const Progress = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div>
      <h2>Progress</h2>
      <div style={{ width: '100%', backgroundColor: '#ccc' }}>
        <div style={{ width: `${percentage}%`, backgroundColor: 'green', height: '30px' }}></div>
      </div>
      <p>{current} out of {total} problems solved</p>
    </div>
  );
};

export default Progress;
