function Register(){
    return (
        <form action="" class="container">
        <h1>Register</h1>
        <div class="input_div">
            <label for="user_id">First name</label>
            <input type="text" id="user_id" />
        </div>
        <div class="input_div">
            <label for="user_id">Last name</label>
            <input type="text" id="user_id" />
        </div>
        <div class="input_div">
            <label for="user_id">Email ID</label>
            <input type="text" id="user_id" />
        </div>
        <div class="input_div">
            <label for="user_id">Address</label>
            <input type="text" id="user_id" />
        </div>
        <div class="input_div">
            <label for="password">Password</label>
            <input type="password" name="" id="password" />
        </div>
        <div class="input_div">
            <label for="password">Re-enter</label>
            <input type="password" name="" id="password" />
        </div>
        <button type="submit">Register</button>
        <p>----------- or -----------</p>
        <span>Already have an account? <a href="./login.html"><b>Login</b> </a> here</span>
    </form>

    )
}
