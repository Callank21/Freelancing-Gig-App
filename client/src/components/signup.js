export default function Signup() {

    return (

    <section className="formz">
        <div class="containerz" id="containerz">

	        <div class="form-containerz sign-in-containerz">
		        <form action="#">
			        <h1 className="log">Sign Up</h1>
			        
                    <input type="text" placeholder="Name" />
			        <input type="email" placeholder="Email" />
			        <input type="password" placeholder="Password" />
			        <a href="#/">Forgot your password?</a>
			
                    <button>Sign Up</button>
		        </form>
	        </div>

	        <div class="overlay-container">
		        <div class="overlay">
			        <div class="overlay-panel overlay-right">
				        <h1 className="logz">Welcome Back!</h1>
				        <p className="ppp">Enter your personal details and start your journey!!</p>
			        </div>
		        </div>
	        </div>
            
        </div>
    </section>
    
    )
}