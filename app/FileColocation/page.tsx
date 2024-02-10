import React from 'react'
import LineChart from './line-chart'


const BarChart = () => {
    return <h1>BarChart</h1>
}

const page = () => {
  return (
      <div>
          File Colovcation
      
          {/* unless we specify the components in this return like below , it wont be shown in the page  */}
          {/* <BarChart />
          <LineChart /> */}
          
      </div>
  )
}

export default page