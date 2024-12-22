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
	}, []);

	const handlePayBill = async(id) =>{

	}
	return (
		<div className="content_area">
			<div className="bills">

			</div>
			{error ? (
				<p className="error-message">Error fetching bills: {error.message}</p>
			) : bills && bills.length > 0 ? (
				bills.map((bill) => (
					<form key={bill._id} action="">
						<pre><b>Bill start on :</b> {new Date(bill.startDate).toLocaleDateString()}</pre>
						<pre><b>Bill ends on  :</b> {new Date(bill.endDate).toLocaleDateString()}</pre>
						<hr />
						<pre><b>Water usage   :</b> {bill.waterUsed} L</pre>
						<pre><b>Cost per 100L :</b> {bill.costPer100L} Rs</pre>
						<hr />
						<pre><b>Total cost    :</b> {bill.amount} Rs</pre>
						<div className="paymentInp">
							<pre><b>Payment mode  :</b></pre>
							<select name="" id="">
								<option value="">Wallet</option>
							</select>
						</div>
						<button onClick={()=>handlePayBill(bill._id)}>Pay {bill.amount} Rs</button>
					</form>
				))
			) : (
				<h1>There are no due bills</h1>
			)}
		</div>
	);
}

export default Home;