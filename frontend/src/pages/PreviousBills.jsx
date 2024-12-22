import { useEffect, useState } from "react";
import axios from "axios";

function PreviousBills() {
  const [bills, setBills] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBillIndex , setSelectedBillIndex] = useState(null)

  useEffect(() => {
    const fetchPaidBills = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/bills/paidbills/676661a08c1d5741ed40946f"
        );
        setBills(response.data);
      } catch (error) {
        setError(error); // Store the error for display
        console.error("Error fetching bills:", error);
      }
    };

    fetchPaidBills();
  }, []); 

  function handleViewBill(index){
    setSelectedBillIndex(index)
  }
  return (
    <div className="content_area">
      {error ? (
        <p className="error-message">Error fetching bills: {error.message}</p>
      ) : bills.length > 0 ? (
        <ul>
          {bills.map((bill, index) => (
            <li key={bill._id}>
              {bill.paymentDate && (
                <button onClick={()=>handleViewBill(index)}>Paid on: {new Date(bill.paymentDate).toLocaleDateString()}</button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no previous bills.</p>
      )}

    
    {selectedBillIndex !== null && bills[selectedBillIndex] &&(
        <div className="moodle"> 
            <div className="moodle_content">
                <pre><b>Bill start on :</b> {new Date(bills[selectedBillIndex].startDate).toLocaleDateString()}</pre>
                <pre><b>Bill ends on  :</b> {new Date(bills[selectedBillIndex].endDate).toLocaleDateString()}</pre>
                <hr />
                <pre><b>Water usage   :</b> {bills[selectedBillIndex].waterUsed} L</pre>
                <pre><b>Cost per 100L :</b> {bills[selectedBillIndex].costPer100L} Rs</pre>
                <hr />
                <pre><b>Total cost    :</b> {bills[selectedBillIndex].amount} Rs</pre>
            </div>
            <button>Close</button>
        </div>
    )}
      
    </div>
  );
}

export default PreviousBills;