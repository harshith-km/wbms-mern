// import { useEffect, useState } from "react"
// import axios from "axios"
// import {Bar, Doughnut, Line} from 'react-chartjs-2'

// function UsageAnalytics(){
//     const [chartData , setChartData] = useState("")

//     useEffect(() =>{
        
//         axios
//             .get("http://localhost:3001/api/bills/usage/676661a08c1d5741ed40946f")
//             .then((res) =>{
//                 setChartData(res.data)
//                 console.log(chartData)
//             })
//             .catch(error =>{
//                 console.log(error.message)
//             })
//     }, [])

//     return(
//         <div className="content_area">
//             <Bar
//                 data={{
//                     labels: chartData.map((data) => data.date),
//                     datasets :[
//                         { 
//                             label:"water used",
//                             data : chartData.map((data) => data.waterUsed),
  
//                         }
//                     ],
//                 }}
//             />
//         </div>
//     )
// }

// export default UsageAnalytics





import { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

import "../assets/usageanalytics.css"

function UsageAnalytics() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/bills/usage/676661a08c1d5741ed40946f')
      .then((res) => {
        setChartData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

  return (
    <div className="content_area">
        <div className="barchart">
            {chartData.length > 0 ? (
                <Bar
                data={{
                    labels: chartData.map((data) => data.date),
                    datasets: [
                    {
                        label: 'water used',
                        data: chartData.map((data) => data.waterUsed),
                        // barWidth :1000,
                    },
                    ],
                }}
                />
            ) : (
                <p>No data available for chart</p>
            )}
        </div>
      
    </div>
  );
}

export default UsageAnalytics;