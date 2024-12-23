import React from 'react';
import './SearchBar.css';

function SearchBar() {
  const searchFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const searchFieldsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
  };

  const labelStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '0.9rem',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#ff5a5f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e14b50',
  };

  const headingStyle = {
    color: '#333',
    fontWeight: 'bold',
  };

  const subheadingStyle = {
    color: '#555',
  };

  return (
    <form action="/s" target="_blank" role="search" autoComplete="off" style={searchFormStyle}>
      <h1 style={headingStyle}>Find places to stay on Airbnb</h1>
      <div style={subheadingStyle}>Discover entire homes and rooms perfect for any trip.</div>
      <div style={searchFieldsStyle}>
        <label style={labelStyle}>
          Location
          <input type="text" name="location" placeholder="Anywhere" style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Check in
          <input type="text" name="checkin" placeholder="Add Date" readOnly style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Check out
          <input type="text" name="checkout" placeholder="Add Date" readOnly style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Adults
          <select name="adults" defaultValue="2" style={inputStyle}>
            <option value="1">1</option>
            <option value="2">2</option>
            {/* ...other options... */}
          </select>
        </label>
        <label style={labelStyle}>
          Children
          <select name="children" defaultValue="0" style={inputStyle}>
            <option value="0">0</option>
            {/* ...other options... */}
          </select>
        </label>
      </div>
      <button type="submit" style={{ ...buttonStyle, ':hover': buttonHoverStyle }}>Search</button>
    </form>
  );
}

export default SearchBar;
