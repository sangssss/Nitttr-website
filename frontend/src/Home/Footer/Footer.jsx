import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    
      <footer class="footer">
  	 <div class="footercontainer">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h2>Contact Us</h2>
  	 			<ul>
  	 				<li><p>For any queries</p></li>
  	 				<li><p>9841514138 / 9944395452</p></li>
  	 				<li><p>Mail: engss2024@it.ssn.edu.in</p></li>

  	 			</ul>
  	 		</div>
  	 		
  	 		<div class="footerhead">
  	 			{/* <h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div> */}
                <h1>Sri Sivasubramaniya Nadar College of Engineering</h1>
                <h3>Rajiv Gandhi Salai , OMR , Kalavakam</h3>
                <h3>Pin: 603110</h3>
                <h3>+91 44 2441 1656 / 2441 6474</h3>
  	 		</div>
			   <div class="footer-col">
			   <div class='social-links'>
			   <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
			</div>
  	 		</div>
            <div className="footerbtm">
     

            </div>
  	 	</div>
  	 </div>
  </footer>

 
  )
}

export default Footer
