import React from 'react';

const Results = ({ results }) => {
  console.log(results,'kskdkdksdj')

  return (
    <div>
      <h2>Results</h2>
      {results.map((result, index) => (
        <div key={index}>
          <p>Test Case {index + 1}</p>
          <p>Input: {JSON.stringify(result.input)}</p>
          <p>Expected Output: {result.expectedOutput}</p>
          <p>Actual Output: {result.actualOutput}</p>
          <p>Status: {result.passed ? 'Passed' : 'Failed'}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;