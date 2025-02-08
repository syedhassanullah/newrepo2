import React from 'react';

const notFoundStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  content: {
    textAlign: 'center',
    background: '#fff',
    padding: '50px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '6rem',
    color: '#ff6347',
    margin: 0,
  },
  paragraph: {
    fontSize: '1.2rem',
    margin: '20px 0',
    color: '#333',
  },
  backHome: {
    fontSize: '1.2rem',
    color: '#ff6347',
    textDecoration: 'none',
    padding: '10px 20px',
    border: '2px solid #ff6347',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  },
  backHomeHover: {
    backgroundColor: '#ff6347',
    color: 'white',
    borderColor: 'transparent',
  },
};

function NotFound() {
  return (
    <div style={notFoundStyles.container}>
      <div style={notFoundStyles.content}>
        <h1 style={notFoundStyles.heading}>404</h1>
        <p style={notFoundStyles.paragraph}>Oops! The page you're looking for doesn't exist.</p>
        <a href="/" style={notFoundStyles.backHome} onMouseOver={e => e.target.style = notFoundStyles.backHomeHover} onMouseOut={e => e.target.style = notFoundStyles.backHome}>Go Back to Home</a>
      </div>
    </div>
  );
}

export default NotFound;
