function Login(){
    return (
        <form action="" class="container">
            <h1>Login</h1>
            <div class="input_div">
                <label for="user_id">User Id</label>
                <input type="text" id="user_id" />
            </div>
            <div class="input_div">
                <label for="password">Password</label>
                <input type="password" name="" id="password" />
            </div>
            <button type="submit">Login</button>
            <p>----------- or -----------</p>
            <span>Don't have an account? <a href="./register.html"><b>Register</b> </a> here</span>
        </form>
    )
}
    
    
