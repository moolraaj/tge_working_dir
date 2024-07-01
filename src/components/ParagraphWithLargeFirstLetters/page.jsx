'use client'
import React from 'react';
import './paragraph.css';

const Cap = ({ text }) => {
  const styledText = text?.split(' ')?.map((word, index) => (
    <React.Fragment key={index}>
      <span className="first-letter">{word.charAt(0)}</span>{word.slice(1)}{' '}
    </React.Fragment>
  ));
  return (
   <p>{styledText}</p>
  );
};

export default Cap;
