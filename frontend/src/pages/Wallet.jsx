
import "../assets/wallet.css";
import { useEffect, useState } from "react"; // Import useState
import axios from "axios";
// import { data } from "react-router-dom";

function Wallet() {
  const [walletData, setWalletData] = useState(null); // Use useState to manage data
  const [input, updateInput] = useState("")

  useEffect(() => {
    axios
        .get("http://localhost:3001/api/wallet/676661a08c1d5741ed40946f")
        .then((response) => {
            setWalletData(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
  }, [walletData]);
  
  const handleAddBalance = () => {

    const credit = parseInt(input)
    if(credit > 5000){
        alert("You cannot add more than 5000rs to your wallet")
    }

    const data = {
      user_id: "676661a08c1d5741ed40946f",
      credit: credit,
    };
    
    axios
      .post("http://localhost:3001/api/wallet/", data)
      .then((response) => {

        setWalletData(response);
        updateInput("");
      })
      .catch((error) => {
        console.error(error);
        
      });
  };
  

  return (
    <div className="content_area">
        <div className="data">
            <div className="wallet_balance">
                <span> <b>Your current wallet Balance :</b></span>
                <span className="amount">{walletData && walletData.length > 0 ? walletData[0].balance : 0} Rs</span> 
            </div>
            <div className="form">
                <span>Minimum amount is 100 rs</span>
                <input 
                type="number" 
                value={input} 
                onChange={(e)=>updateInput(e.target.value)} 
                placeholder="Enter the amout here" />
                <button onClick = {handleAddBalance}>Add {input}</button>
            </div>
        </div>


        <div className="table">
            <div className="thead">
                <span>Transaction date</span>
                <span>Credit</span>
                <span>Debit</span>
                <span>Balance</span>
            </div>
            <div className="transactions_table"> 
                <table >
                    <tbody>
                    {walletData && walletData.length > 0 ? (
                        walletData.map((stmt, index) => (
                        <tr key={index}>
                            <td>
                            {new Date(stmt.transactionDate).toLocaleDateString()} 
                            </td>
                            <td>{stmt.credit}</td>
                            <td>{stmt.debit}</td>
                            <td>{stmt.balance}</td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan="4">No transaction data found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default Wallet;