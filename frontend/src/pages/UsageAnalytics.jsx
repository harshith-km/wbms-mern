import { useEffect, useState } from "react"
import axios from "axios"

function UsageAnalytics(){
    // const [usage, setUsage] = useState(null)
    const [chartData , setChartData] = useState("")

    useEffect(() =>{
        
        axios
            .get("http://localhost:3001/api/bills/usage/676661a08c1d5741ed40946f")
            .then((res) =>{
                setChartData(res.data)
                console.log(chartData)
            })
            .catch(error =>{
                console.log(error.message)
            })
    }, [])

    return(
        <div className="content_area">
            
        </div>
    )
}

export default UsageAnalytics