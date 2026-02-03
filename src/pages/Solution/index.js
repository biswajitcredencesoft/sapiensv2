import React from 'react';
import { Helmet } from 'react-helmet-async';
import SeerInsights from '../../components/SeerInsights';
import SolutionVideo from '../../components/SolutionVideo';
import './index.css';

const Solution = () => {
  return (
    <div className='SolutionContainer'>
      <Helmet>
        <title>Solutions — Sapiens v2</title>
        <meta name="description" content="Sapiens v2 Solutions — AI services to automate retail inventory, forecasting and returns." />
        <link rel="canonical" href="https://sapiensv2.com/solutions" />
        <meta property="og:title" content="Solutions — Sapiens v2" />
        <meta property="og:description" content="Sapiens v2 Solutions — AI services to automate retail inventory, forecasting and returns." />
        <meta property="og:image" content="https://sapiensv2.com/images/uploads/social-share.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        <SolutionVideo />
        <SeerInsights />
    </div>
  )
} 

export default Solution