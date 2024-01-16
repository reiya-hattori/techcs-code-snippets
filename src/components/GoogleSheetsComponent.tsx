// src/components/GoogleSheetsComponent.tsx
import React, { useEffect } from 'react';
import { read } from '../helpers/google-sheet';

const GoogleSheetsComponent: React.FC = () => {
  useEffect(() => {
    const tryGoogleSheets = async () => {
      try {
        const readResult = await read('the-spreadsheet-id', 'Sheet1!A:Z');
        console.log('Read Result:', readResult);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    tryGoogleSheets();
  }, []);

  return <div>Google Sheets Component</div>;
};

export default GoogleSheetsComponent;
