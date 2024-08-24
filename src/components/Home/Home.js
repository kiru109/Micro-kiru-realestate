

import React, { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaGoogle, FaGithub } from 'react-icons/fa';
import { FaPlus, FaEdit, FaEye, FaSignInAlt } from 'react-icons/fa';
import "./Home.css";
import Footer from './Footer';


function Home() {
  const [slideIndex, setSlideIndex] = useState(1);
  
  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
      setSlideIndex((prevIndex) => (prevIndex % slides.length) + 1);
    };
    const interval = setInterval(showSlides, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav class="navbar navbar-dark bg-danger">

    <marquee><h6>Be the first to book and get exclusive pre-launch prices!!! </h6></marquee> <br></br>
    <img src="logo2.jfif"  width="50" height="50"MAX></img><h1>Max</h1>

    <div class="input-group">
    {/* <ul><Link to="/cart"><Button />  </Link></ul> */}
   <ul><button><a class="nav-link" href="/Cart"> </a></button> </ul>
    <input type="text" class="form-control" placeholder="Search "></input>
    
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
        
      </button>
      
      <a href="/Login">
      <button class="btn btn-transparent"  type="button">
     
      <i class="bi bi-person-fill-add"  ></i>
         </button>
         </a>
    </div>
    
</nav>
{/* <nav class="navbar navbar-light bg-light navbar navbar-expand sm">
   <div class="navbar-header">
   <a class="navbar-brand" href="#">
      <img src="logo2.jfif"  width="50" height="50"></img>
    </a>
    
   </div> */}
  
  

   
   {/* <ul class="navbar-nav ml-auto">
          <div class="dropdown">
         <span> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Buy       </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"><li>
                                    <a class="dropdown-item" href="/Appartmentsbuy">Appartments</a></li><li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Hotels</a>
                                    </li>
                                    <li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Villas</a>
                                    </li>
                                    <li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">PG</a>
                                    </li>
                                   
                                    
                                </ul></span></div>
                                <div class="dropdown">
         <span> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Rent     </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"><li>
                                    <a class="dropdown-item" href="#">Appartments</a></li><li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Hotels</a>
                                    </li>
                                    <li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Villas</a>
                                    </li>
                                    <li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">PG</a>
                                    </li>
                                   
                                    
                                </ul></span></div>
                                <div class="dropdown">
         <span> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Sell  </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"><li>
                                    <a class="dropdown-item" href="/Appartments">Appartments</a></li><li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Hotels</a>
                                    </li>
                                    <li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Villas</a>
                                    </li>
                                    <li>
                                        
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">PG</a>
                                    </li>
                                   
                                    
                                </ul></span></div>
                                
                                <li class="nav-item"> <a class="nav-link" href="#">HomeLoans</a></li>
         <li class="nav-item"> <a class="nav-link" href="#">Home Interiors </a></li>
         <li class="nav-item"> <a class="nav-link" href="#">Help</a></li>
         <li class="nav-item"> <a class="nav-link" href="/Admin">Admin</a> </li>
         <li class="nav-item"> <a class="nav-link" href="/Appointments">Booking Appointments</a> </li>
         </ul> */}
       
       
  
{/* </nav> */}

      
      <div className="container-fluid bg-white" id="fluid">
        <video autoPlay muted loop id="myVideo" src="/homevid.mp4" type="video/mp4"></video>
      </div>
     
      {/* <div className="row text-dark" id="color2">
        <div className='p-5'>
          <center><h1><b>HOSPITALITY</b></h1></center>
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="numbertext">1 / 2</div>
              <img src="1.png"  width="50" height="50" alt="slide1"></img>
            </div>
            <div className="mySlides fade">
              <div className="numbertext">2 / 2</div>
              <img src="2.png"  width="50" height="50" alt="slide2"></img>
            </div>
          </div>
          <center>
            <div>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </center>
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="logo2.jfif" alt="Max" style={{ height: '100px', width: '100px' }} />
          <h1>THE RESIDENCY HOTELS</h1>
          <p>
            The Residency Towers Coimbatore’s first luxury & trendy Hotel commenced in 1996 won the H & FS Award for
            “Excellence in Hospitality – Business Hotel of the Year” two years later. Chin Chin the Chinese Specialty
            Restaurant that had become hugely popular at The Residency Chennai, debuted equally favorably at Coimbatore
            and remains the City’s favorite fine dining restaurant.
          </p>
          <b>
            <button type="button" className="btn btn-outline-danger btn-lg">View Detail</button>
          </b>
        </div>
        
      </div> */} 
      <div className="container text-dark">
 
  <div className="row text-center mb-4">
    <div className="col-12">
      <h1><b>HOSPITALITY</b></h1>
    </div>
  </div>
  
 
  <div className="row">
  
    <div className="col-lg-6 col-sm-12 p-5">
      <div className="card p-3">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 2</div>
            <img src="1.png"  width="50" height="50" alt="slide1"></img>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 2</div>
            <img src="2.png"  width="50" height="50" alt="slide2"></img>
          </div>
        </div>
        <center>
          <div>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </center>
      </div>
    </div>

   
    <div className="col-lg-6 col-sm-12 p-5">
      <img src="logo2.jfif" alt="Max" style={{ height: '100px', width: '100px' }} />
      <h1>THE RESIDENCY HOTELS</h1>
      <p>
        The Residency Towers Coimbatore’s first luxury & trendy Hotel commenced in 1996 won the H & FS Award for
        “Excellence in Hospitality – Business Hotel of the Year” two years later. Chin Chin the Chinese Specialty
        Restaurant that had become hugely popular at The Residency Chennai, debuted equally favorably at Coimbatore
        and remains the City’s favorite fine dining restaurant.
      </p>
      <b>
        <button type="button" className="btn btn-outline-danger btn-lg">View Detail</button>
      </b>
    </div>
  </div>
</div>


      <div className="container bg-white p-5">
        <center><h1><b>Explore Your Property</b></h1></center>
        <div className="p-5 row">
          <div className="g-grid gap-5 d-flex align-items-center">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://th.bing.com/th/id/OIP.XlhJhA4a0CPUYZPUpzb8ygHaD6?w=800&h=423&rs=1&pid=ImgDetMain" className="card-img-top" alt="press1" />
              <div className="card-body">
                <p className="card-text">Appaswamy 9sends Theni Community WorkingClub.</p>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://th.bing.com/th/id/OIP.2OOPgzcI7lFn4blKXjDUkAAAAA?w=474&h=266&rs=1&pid=ImgDetMain" className="card-img-top" alt="press2" />
              <div className="card-body">
                <p className="card-text">Max Properties 12sends Madurai Gym access</p>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://th.bing.com/th/id/OIP.bouY0RTOaBN5dyr7gKEBJAHaD3?w=900&h=470&rs=1&pid=ImgDetMain" className="card-img-top" alt="press3" />
              <div className="card-body">
                <p className="card-text">Adithya Groups 10sends Coimbatore Community play area</p>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://1.bp.blogspot.com/-T0HayfXVcq0/XOzeJPyjZyI/AAAAAAAA-ws/BQ6bZR0h2c4ojQrkWR07LT8bDpbbGasTwCLcBGAs/s1600/7.jpg" className="card-img-top" alt="press4" />
              <div className="card-body">
                <p className="card-text">Magicbricks property 13sends Chennai community game center.</p>
              </div>
            </div>
          </div>
        </div>
        <center>
          <b><button type="button" className="btn btn-outline-danger btn-lg">View Projects</button></b>
        </center>
      </div>

      {/* Excellence Section */}
      {/* <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Building Images.</h2>
        <div className="flex justify-center">
          <img className="w-full md:w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="World Map with Port Locations" />
          <img className="w-full md:w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://th.bing.com/th/id/OIP.rHmHqq72WKbxAsY1Z5mEmQHaD6?rs=1&pid=ImgDetMain" alt="World Map with Port Locations" />
          <img className="w-full md:w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="World Map with Port Locations" />
      </div>
      </div> */}
      {/* <div className="p-8 bg-gray-100">
  <h2 className="text-3xl font-semibold text-center mb-6">Buy the buildings</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="Image 1" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://th.bing.com/th/id/OIP.rHmHqq72WKbxAsY1Z5mEmQHaD6?rs=1&pid=ImgDetMain" alt="Image 2" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="Image 3" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="Image 4" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="Image 5" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="Image 6" />
    </div>
  </div>
</div> */}
<div className="p-8 bg-gradient-to-br from-red-800 via-red-600 to-red-400">
  <h2 className="text-3xl font-semibold text-center mb-6 text-white">Buy the buildings</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="Image 1" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://th.bing.com/th/id/OIP.rHmHqq72WKbxAsY1Z5mEmQHaD6?rs=1&pid=ImgDetMain" alt="Image 2" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://www.dreamtinyliving.com/wp-content/uploads/2024/02/2-Bedroom-Tiny-House-Design-5mx7.5m-3-1024x519.png" alt="Image 3" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://prohomedecorz.com/wp-content/uploads/2020/06/Small-Cottage-Designs-6.5x8-with-Gable-Roof-2-768x432.jpg" alt="Image 4" />
    </div>
    {/* <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="Image 5" />
    </div>
    <div className="flex justify-center">
      <img className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" src="https://i.ytimg.com/vi/bPlR9NL9x2o/maxresdefault.jpg" alt="Image 6" />
    </div> */}
  </div>
</div>

      {/* Integration Section */}
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Buy your Property.</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <FaGoogle className="text-4xl text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110" />
          <FaGithub className="text-4xl text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110" />
          {/* Add more icons as needed */}
        </div>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition">Connect</button>
      </div>
      <div className="p-8 bg-red-600 text-white text-center">
  <h2 className="text-3xl font-semibold mb-4">Start your Dream Come true.</h2>
  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition mr-4">Explore Properties</button>
  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition">Contact Sales</button>
</div>
      {/* Solutions Section */}
      <div className="p-8 bg-gray-200">
        <h2 className="text-3xl font-semibold mb-6 text-center">MAX</h2>
        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg text-center">
            <img className="w-full h-40 object-cover rounded-t-lg" src="https://th.bing.com/th/id/OIP.JeR5hDThwiFhso6s2qEJkQHaEG?w=640&h=355&rs=1&pid=ImgDetMain" alt="Location" />
            <h3 className="text-xl font-semibold mt-4">Location</h3>
            <p className="text-gray-600 mt-2">Explore our strategic locations.</p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">Browse now</button>
          </div>
          <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg text-center">
            <img className="w-full h-40 object-cover rounded-t-lg" src="https://www.re-thinkingthefuture.com/wp-content/uploads/2019/07/A277-15-Works-of-Oz-Architecture-View-of-exterior-Confluence-300x211.jpg" alt="Operations" />
            <h3 className="text-xl font-semibold mt-4">Upcoming</h3>
            <p className="text-gray-600 mt-2">Discover new appointment.</p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">Browse now</button>
          </div>
        </div>
      </div>

      {/* <div className="p-8 bg-red-600 text-white text-center">
  <h2 className="text-3xl font-semibold mb-4">Start your Dream Come true.</h2>
  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition mr-4">Explore Properties</button>
  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition">Contact Sales</button>
</div> */}

      {/* <div className="p-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Start your Dream Come true.</h2>
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-300 transition mr-4">Explore Properties</button>
        <button className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition">Contact Sales</button>
      </div> */}
      <Footer />
      {/* Footer
      <footer className="bg-gray-800 text-white p-8">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: max@gmail.com</p>
            <p>Phone: +1234567899</p>
            <p>Address: Max appartments madurai vandiyur anna nagar</p>
          </div>
          <div className="md:w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition"><FaTwitter size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition"><FaLinkedin size={24} /></a>
            </div>
          </div>
          <div className="md:w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
            <div className="flex items-center justify-center">
              <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg border border-gray-300" />
              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg hover:bg-yellow-300 transition">Subscribe</button>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default Home;
