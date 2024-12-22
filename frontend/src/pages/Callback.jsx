import Navbar from "../components/Navbar";
import "../assets/callback.css"

function Callback(){
    return(
            <div className="content_area">
                <form action="">
                    <div className="input_div">
                        <label for="">Name : </label>
                        <input type="text"/>
                    </div>
                    <div className="input_div">
                        <label for="">Phone No : </label>
                        <input type="tel"/>
                    </div>
                    <div className="input_div">
                        <label for="">Address : </label>
                        <input type="text"/>
                    </div>
                    <div className="input_div">
                        <label for="">Select the Problem : </label>
                        <select name="" id="">
                            <option value="">Water issue</option>
                            <option value="">Water leakage</option>
                            <option value="">Billing issue</option>
                            <option value="">Payment issue</option>
                            <option value="">Pipe problem</option>
                        </select>
                    </div>
                    <label for="">Problem description :</label>
                    <textarea name="" id="" rows="4"></textarea>

                    <button>Request callback</button>
                </form>
            </div>
    );
}

export default Callback;