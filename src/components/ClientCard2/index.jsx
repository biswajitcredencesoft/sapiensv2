import React from 'react';
import './index.css';
import SeerLogo1 from '../../assets/images/client_CUE.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard}  md:h-[500px]  p-10`}>
      <div className="flex items-center justify-center ">
          <img src={SeerLogo1} alt="Logo" className='  cue-form' />
          </div>
        <div className="ClientCardContent mt-8">
           
            <p style={{fontFamily:'Roboto, sans-serif'}} className='text-center text-[#000000] '>"Sapiens v2’s  provides us with a depth of analytical capability, unrivalled by any competitor in the market, enabling us to make critical decisions lightning fast with confidence."</p>
    
            <h5 className='text-center pt-2  text-[#000000] '  style={{fontFamily:'AllroundGothic'}}> 
            <span style={{fontFamily:"roboto"}}>-</span>
              NINA GRAHAM, C.F.O., CUE</h5>
        </div>
    </div>
  )
}

export default ClientCard




