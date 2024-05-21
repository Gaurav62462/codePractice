export const validateCode = async (code, testCases) => {
    try {
      const results = await Promise.all(testCases.map(async (testCase) => {
        const response = await fetch('https://api.jdoodle.com/v1/execute', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientId: process.env.REACT_APP_JDOODLE_CLIENT_ID,
            clientSecret: process.env.REACT_APP_JDOODLE_CLIENT_SECRET,
            script: code.replace(/input/g, JSON.stringify(testCase.input)),
            language: 'nodejs',
            versionIndex: '0'
          })
        });
        const result = await response.json();
        return {
          input: testCase.input,
          expectedOutput: testCase.output,
          actualOutput: result.output,
          passed: result.output.trim() === String(testCase.output).trim()
        };
      }));
      return results;
    } catch (error) {
      console.error('Error validating code:', error);
      return [];
    }
  };