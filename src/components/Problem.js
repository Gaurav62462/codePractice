import React, { useState,useEffect } from 'react';
import CodeEditor from './CodeEditor';
import { connectToJDoodle } from '../services/jdoodleWebSocket';

const Problem = ({ problem, onSubmit }) => {
  const [code, setCode] = useState(problem.initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setCode(problem.initialCode);
  }, [problem]);

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  console.log(error,code,'errorerror')
  const handleTest = () => {
    console.log(process.env.REACT_APP_CLIENT_ID,'test 1')
    if (code.trim() === '') {
        setError('Code cannot be empty');
        return;
      }
      setError('');
      connectToJDoodle(code, (result) => setOutput(result.output));
  };

  const handleSubmit = () => {
    if (code.trim() === '') {
        setError('Code cannot be empty');
        return;
      }
      setError('');
      onSubmit(problem.initialCode);
      setCode(''); 
      setOutput('');
  };

  return (
    <div>
      <h2>{problem.title}</h2>
      <p>{problem.description}</p>
      <CodeEditor code={code} onChange={handleChange} />
      <button onClick={handleTest}>Test Code</button>
      <button onClick={handleSubmit}>Submit Code</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {output && <pre>{output}</pre>}
    </div>
  );
};

export default Problem;