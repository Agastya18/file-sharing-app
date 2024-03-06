import React from 'react'

const ProgressBar = ({progress}) => {
  return (
   
        
            <div className=" mt-3 w-full bg-gray-200 rounded-full">
                <div className=" text-white py-0.2 bg-purple-500 rounded-full" style={{width: `${progress}%`}}>
                {
                  
                  `${Number(progress).toFixed(0)}%`
                }
                </div>
                
                
            </div>
        
   
  )
}

export default ProgressBar