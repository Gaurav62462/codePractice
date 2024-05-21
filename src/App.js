import React, { useState } from 'react';
import Problem from './components/Problem';
import Results from './components/Results';
import Progress from './components/Progress';
import { validateCode } from './services/jdoodleRestApi';
import { problems } from './components/problems';

const App = () => {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [submissions, setSubmissions] = useState([]);
  const [results, setResults] = useState([]);

  const handleSubmit = async (code) => {
       const problem = problems[currentProblemIndex];
    const testCases = problem.testCases; // Assume each problem has a testCases array
    const result = await validateCode(code, testCases);
    setResults((prevResults) => [...prevResults, { problem: problem.title, result }]);
    setCurrentProblemIndex(currentProblemIndex + 1);
  };

  if (currentProblemIndex >= problems?.length) {
    return (
      <div>
        <h2>Results</h2>
        {results?.map((result, index) => (
          <div key={index}>
            <h3>{result.problem}</h3>
            {result.result.map((testCase, idx) => (
              <div key={idx}>
                <p>Input: {testCase.input}</p>
                <p>Expected Output: {testCase.expectedOutput}</p>
                <p>Actual Output: {testCase.actualOutput}</p>
                <p>Passed: {testCase.passed ? 'Yes' : 'No'}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Progress current={currentProblemIndex} total={problems.length} />
      {/* <Problem problem={problems[currentProblemIndex]} onSubmit={handleSubmit} /> */}
       <Problem problem={problems[currentProblemIndex]} onSubmit={handleSubmit} />;

    </div>
  );
};

export default App;