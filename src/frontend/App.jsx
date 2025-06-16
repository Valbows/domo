import React, { useState } from 'react';

const App = () => {
  return (
    <div style={{
      backgroundColor: '#282c34',
      minHeight: '100vh',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    }}>
      <div style={{
        display: 'flex',
        height: '100vh'
      }}>
        {/* Main Content Area */}
        <div style={{
          width: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#3a3f47',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: '500',
            border: '2px dashed #61dafb',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '600px'
          }}>
            Video Player Area
          </div>
        </div>

        {/* Sidebar */}
        <div style={{
          width: '30%',
          backgroundColor: '#21252b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          borderLeft: '1px solid #3a3f47'
        }}>
          <div style={{
            backgroundColor: '#3a3f47',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: '500',
            border: '2px dashed #98d982',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}>
            AI Avatar Sidebar
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;