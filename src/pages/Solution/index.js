import React from 'react';
import SeerInsights from '../../components/SeerInsights';
import SolutionVideo from '../../components/SolutionVideo';
import './index.css';

const Solution = () => {
  return (
    <div className='SolutionContainer'>
        <SolutionVideo />
        <SeerInsights />
    </div>
  )
}

export default Solution