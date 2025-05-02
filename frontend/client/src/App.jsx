import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Welcome to SkillGrind</h1>
      <p style={styles.description}>
        A platform to choose your language, pick your learning level, and watch curated YouTube tutorials.
      </p>
      <p style={styles.info}>Coming soon: Login, Course Selection, Level Modules, and Video Learning!</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    height: '100vh',
  },
  heading: {
    color: '#333',
    fontSize: '2.5rem',
  },
  description: {
    fontSize: '1.2rem',
    marginTop: '1rem',
  },
  info: {
    marginTop: '2rem',
    fontStyle: 'italic',
    color: '#777',
  },
};

export default App;
