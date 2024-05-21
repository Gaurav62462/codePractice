// src/components/CodeEditor.js
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/javascript/javascript';

const CodeEditor = ({ code, onChange }) => {
  return (
    <CodeMirror
    value={code}
    options={{
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true,
    }}
    onBeforeChange={(editor, data, value) => {
      onChange(value);
    }}
  />
  );
};

export default CodeEditor;