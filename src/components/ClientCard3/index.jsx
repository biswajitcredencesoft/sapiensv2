import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/client_glassons.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard}  md:h-[400px]  p-10 `}>
      <div className="flex items-center justify-center ">
        <img src={SeerLogo} alt="Logo" className='h-8 ' />
        </div>
        <div className="ClientCardContent mt-8">

            <p style={{fontFamily:'Roboto, sans-serif'}} className='text-center text-[#000000] text-sm '>"Our stores were swamped with web returns. Stock Seer swiftly and elegantly enabled us to re-distribute the returns to locations with the greatest sales potential. Furthermore, Sapiens V2’s algorithms forecast sales  with a high degree of confidence thereby enabling us to automate our Minimum Stock Level (MSL), Re-grouping and Initial Order Quantity and Size Allocation processes."</p>
        
            <h5 className='text-center pt-2  text-[#000000] '  style={{fontFamily:'AllroundGothic, sans-serif'}}>
            <span style={{fontFamily:"roboto"}}>-</span>
               CHRIS REID, C.I.O., HALLENSTEIN GLASSON</h5>
        </div>
    </div>
  )
}

export default ClientCard



