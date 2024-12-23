import { useEffect, useState } from "react";
import "../assets/home.css";
import axios from "axios";

function Home() {
	const [bills, setBills] = useState([]);
	const [error, setError] = useState(null); // State for error handling

	useEffect(() => {
		const fetchUnpaidBills = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/api/bills/unpaidbills/676661a08c1d5741ed40946f"
				);
				setBills(response.data);
			} catch (error) {
				setError(error); 
				console.error("Error fetching bills:", error);
			}
		};

		fetchUnpaidBills();
	}, [bills]);

	const handlePayBill = async(id, amount) =>{
		const data = {
			paymentMode : "wallet"
		}

		axios 
			.put(`http://localhost:3001/api/bills/${id}`, data)
			.then((res) =>{
				alert("successfully paid the bill")
			})
			.catch(error =>{
				if(error.response.data.message){
					alert(error.response.data.message)
				}
				// console.log(error.response.data.message)
			})
	}
	return (
		<div className="content_area">
			<div className="bills">

			</div>
			{error ? (
				<p className="error-message">Error fetching bills: {error.message}</p>
			) : bills && bills.length > 0 ? (
				bills.map((bill) => (
					<div key={bill._id} className="form">
						<pre><b>Bill start on :</b> {new Date(bill.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</pre>
						<pre><b>Bill ends on  :</b> {new Date(bill.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</pre>
						<hr />
						<pre><b>Water usage   :</b> {bill.waterUsed} L</pre>
						<pre><b>Cost per 100L :</b> {bill.costPer100L} Rs</pre>
						<hr />
						<pre><b>Total cost    :</b> {bill.amount} Rs</pre>
						<div className="paymentInp">
							<pre><b>Payment mode  :</b></pre>
							<select name="paymentMod" id="">
								<option value="wallet">Wallet</option>
								<option value="UPI">UPI</option>
								<option value="netBanking">Net-Banking</option>
							</select>
						</div>
						<button onClick={()=>handlePayBill(bill._id, bill.amount )}>Pay {bill.amount} Rs</button>
					</div>
				))
			) : (
				<h1>There are no due bills</h1>
			)}
		</div>
	);
}

export default Home;