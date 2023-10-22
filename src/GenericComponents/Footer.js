// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// import {

//   faGithub,
//   faFacebook,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";


// const Footer = () => {
//   return (

//     <footer className="footer">
//       <div className="FooterContainer">
//       <div className="brand Footer_Brand">           <Link to={"/"}>            
//        <div id='heading'><span id="Head3">The</span>
//             <h1 id="Head4">Siren</h1>
//              </div>
//            </Link>
//           <div>
//             {/* <img id='footimg' src="https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148212818.jpg?w=740&t=st=1692263024~exp=1692263624~hmac=6d382a6c87ffe54d234fae1805ca62d0bd56f1615520419d9c7081bcbf51aa3c" alt="img here" height={200} width={200}></img> */}
//             <p style={{color: "white"}}>This instance of user behavior is exactly why your site needs a well-designed website footer. Think of a footer as a safety net for users who haven’t been able to find the information they’re looking for in other sections of your site. By providing a link to your return policy or contact form, for example, you can prevent some visitors from leaving your ecommerce site and never returning.</p>
//           </div>
// </div>
//         <div className="Footer_text">
//         <div className="Footer_Pages">
//           <h3 className="Quick">Quick Link </h3>
//           <ul>
//           <li><Link to={"/"} >Home</Link></li>
//             <li><Link to={"/Bollywood"} >Bollywood</Link></li>
//             <li><Link to={"/Hollywood"} >Hollywood</Link></li>
//             <li><Link to={"/Technology"} >Technology</Link></li>
//             <li><Link to={"/Fitness"} >Fitness</Link></li>
//             <li><Link to={"/Food"} >Food</Link></li>
//           </ul>
//         </div>
//         <div className="FooterContact">
//             <h3 className="contact"> Contact Us </h3>
//             <Link to={"https://www.facebook.com"} target="_blank"><div className="social_child">  <FontAwesomeIcon icon={faFacebook} /></div></Link>
//              <Link to={"https://www.instagram.com/akanksharma111/"} target="_blank" ><div className="social_child">  <FontAwesomeIcon icon={faInstagram} /></div></Link>
//              <Link to={"https://github.com/Akanksha0808-git"} target="_blank"><div className="social_child">  <FontAwesomeIcon icon={faGithub} /></div></Link>
//              <Link to={"https://www.linkedin.com/in/akanksha-sharma-0808ak"} target="_blank"><div className="social_child">   <FontAwesomeIcon icon={faLinkedin} /></div></Link>
//         </div>
//         </div>

//       </div>
//       <div className="CopyRightContainer">
//         <h3>All CopyRight @ 2023 reserved Akanksha With ❤️ </h3>
//       </div>
//     </footer>



//   );
// };

// export default Footer;




// import React from 'react';
//  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {

//   faGithub,
//   faFacebook,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { Link } from 'react-router-dom';
// // import { Footer, Link, button, CDBIcon,div } from 'cdbreact';

// export const Footer = () => {
//   return (
//     <Footer className="shadow">
//       <div display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
//         <div display="flex" justifyContent="between" className="flex-wrap ">
//           <div>
//             <a href="/" className="d-flex align-items-center p-0 text-dark">
//               <img alt="logo" src="logo" width="30px" />
//               <span className="ms-3 h5 font-weight-bold">Devwares</span>
//             </a>
//             <p className="my-3" style={{ width: '250px' }}>
//               We are creating High Quality Resources and tools to Aid developers during the
//               developement of their projects
//             </p>
//           </div>
//           <div>
//             <p className="h5 mb-4" style={{ fontWeight: '600' }}>
//               Devwares
//             </p>
//             <div flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
//               <Link href="/">Resources</Link>
//               <Link href="/">About Us</Link>
//               <Link href="/">Contact</Link>
//               <Link href="/">Blog</Link>
//             </div>
//           </div>
//           <div>
//             <p className="h5 mb-4" style={{ fontWeight: '600' }}>
//               Help
//             </p>
//             <div display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
//               <Link href="/">Support</Link>
//               <Link href="/">Sign Up</Link>
//               <Link href="/">Sign In</Link>
//             </div>
//           </div>
//           <div>
//             <p className="h5 mb-4" style={{ fontWeight: '600' }}>
//               Products
//             </p>
//             <div display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
//               <Link href="/">Windframe</Link>
//               <Link href="/">Loop</Link>
//               <Link href="/">Contrast</Link>
//             </div>
//           </div>
//         </div>
//         <div
//           display="flex"
//           justifyContent="center"
//           style={{ width: '100%' }}
//           className="mx-auto mt-4"
//         >
//          <Link to={"https://www.facebook.com"} target="_blank"><div className="social_child">  <FontAwesomeIcon icon={faFacebook} /></div></Link>
// //              <Link to={"https://www.instagram.com/akanksharma111/"} target="_blank" ><div className="social_child">  <FontAwesomeIcon icon={faInstagram} /></div></Link>
// //              <Link  target="_blank"><div className="social_child">  <FontAwesomeIcon icon={faGithub} /></div></Link>
// //              <Link  target="_blank"><div className="social_child">   <FontAwesomeIcon icon={faLinkedin} /></div></Link>
//         </div>
//         <small className="text-center mt-5">&copy; Devwares, 2023. All rights reserved.</small>
//       </div>
//     </Footer>
//   );
// };
// export default Footer;







import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer">

        <div className="footer-content">
          <div className="footer-description">
            <div id='heading'><span id="Head1">The</span>
              <h1 id="Head2">Siren</h1>
            </div>
            <p>Your go-to source for the latest in entertainment, fitness, food, and technology.</p>

          </div>

          <div className="footer-quick-links">
            <ul>
              <strong style={{ backgroundColor: "grayText" }}>Quick Links</strong>
              <li><Link to={"/"} >Home</Link></li>
              <li><Link to={"/Bollywood"} >Bollywood</Link></li>
              <li><Link to={"/Hollywood"} >Hollywood</Link></li>
              <li><Link to={"/Technology"} >Technology</Link></li>
              <li><Link to={"/Fitness"} >Fitness</Link></li>
              <li><Link to={"/Food"} >Food</Link></li>

            </ul>
          </div>
          <div className="footer-quick-links">
            <ul>
            <strong style={{ backgroundColor: "grayText" }} >About!!</strong>

              <li><Link href="/bollywood"></Link>AboutUs</li>
              <li><Link href="/hollywood">Contact</Link></li>
              <li><Link href="/fitness">Feedback</Link></li>

            </ul>
          </div>
          <div className="footer-social-icons" style={{ height: "50px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <strong style={{ backgroundColor: "grayText" }} >Lets Social!</strong>

            <Link to={"https://www.facebook.com"} className='link'><FontAwesomeIcon icon={faFacebook} className='icon' /></Link>
            <Link  to={"https://www.Twitter.com"}  className='link'><FontAwesomeIcon icon={faTwitter} className='icon' /></Link>
            <Link to={"https://www.linkedin.com/in/akanksha-sharma-0808ak"} className='link'><FontAwesomeIcon icon={faInstagram} className='icon' /></Link>
            <Link to={"https://github.com/Akanksha0808-git"} className='link'><FontAwesomeIcon icon={faGithub} className='icon' /></Link>

          </div>

        </div>

        <div className="footer-copyright" style={{ backgroundColor: "gray", display: "flex", height: "50px", width: "100%", position: "relative", bottom: "0px", alignItems: "center", justifyContent: "center" }}>
          <p>&copy; Akanksha Sharma with love </p>
        </div>
      </div>
    </footer>


  );
};
export default Footer;


