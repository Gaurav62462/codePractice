export const connectToJDoodle = (code, callback) => {
    const socket = new WebSocket('wss://api.jdoodle.com/v1');
    
    socket.onopen = () => {
      socket.send(JSON.stringify({
        clientId: process.env.REACT_APP_CLIENT_ID,
        clientSecret: process.env.REACT_APP_CLIENT_SECRET,
        script: code,
        language: 'nodejs',
        versionIndex: '0'
      }));
    };
    
    socket.onmessage = (event) => {
      const result = JSON.parse(event.data);
      callback(result);
      socket.close();
    };
  };