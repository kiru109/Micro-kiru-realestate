import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const LoginComponent = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

   
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            

            const HARD_CODED_USER = 'seller';
            const HARD_CODED_PASSWORD = '1234';
            if (userName === HARD_CODED_USER && password === HARD_CODED_PASSWORD) {
                sessionStorage.setItem('sellerid', 1);
                sessionStorage.setItem('seller',"seller");
                sessionStorage.setItem('Login', "Yes");
                navigate('/Sellerdashboard');
                return;
            }

            const response = await axios.post('http://localhost:8010/login', {
                userName,
                password
            });

            

            if (response.data) {
                const userData = response.data;
                setUser(userData);


                switch (userData.role) {
                    case 'appointment':
                        sessionStorage.setItem('appointmentname', userData.name);
                        sessionStorage.setItem('appointmentid', userData.appointmentId);
                        sessionStorage.setItem('login', "Yes");
                        navigate('/Appointmentdashboard');
                        break;
                    case 'buyer':
                        sessionStorage.setItem('buyername', userData.name);
                        sessionStorage.setItem('buyerid', userData.buyerId);
                        sessionStorage.setItem('login', "Yes");
                        navigate('/Buyerdashboard');
                        break;
                    case 'admin':
                        sessionStorage.setItem('adminname', userData.name);
                        sessionStorage.setItem('adminid', userData.adminId);
                        sessionStorage.setItem('login', "Yes");
                        navigate('/Admindashboard');
                        break;
                    case 'seller':
                        sessionStorage.setItem('sellerid', userData.sellerId);
                        navigate('/SellerTab');
                        break;
                    default:
                        setError('Unknown role');
                        navigate('/SellerTab');
                        break;
                }
            } else {
                setError('Login failed: Invalid username or password');
                navigate('/login');
            }
        } catch (error) {
            setError('Login failed: Invalid username or password');
            navigate('/login');
        }
    };


    return (
        // <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        //     <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        //         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        //         {message && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{message}</div>}
        //         <form onSubmit={handleLogin}>
        //             <div className="mb-4">
        //                 <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
        //                 <div className="relative">
        //                     <FaUserAlt className="absolute top-3 left-3 text-gray-500" />
        //                     <input
        //                         id="userName"
        //                         type="text"
        //                         className="mt-1 block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        //                         value={userName}
        //                         onChange={(e) => setUserName(e.target.value)}
        //                         required
        //                     />
        //                 </div>
        //             </div>
        //             <div className="mb-4">
        //                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        //                 <div className="relative">
        //                     <FaLock className="absolute top-3 left-3 text-gray-500" />
        //                     <input
        //                         id="password"
        //                         type="password"
        //                         className="mt-1 block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        //                         value={password}
        //                         onChange={(e) => setPassword(e.target.value)}
        //                         required
        //                     />
        //                 </div>
        //             </div>
        //             <div className="flex items-center justify-between mb-4">
        //                 <div className="flex items-center">
        //                     <input type="checkbox" id="rememberMe" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
        //                     <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember me</label>
        //                 </div>
        //                 <Link to="#" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
        //             </div>
        //             <button
        //                 type="submit"
        //                 className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        
        //             >
        //                 Login
        //             </button>
        //         </form>
        //     </div>
        // </div>
<MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>


  <MDBCol col='10' md='6'>
    <img src="logo2.jfif" width="600" height="600" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>
  <div className="d-flex flex-row align-items-center justify-content-center">
  <div className="divider d-flex align-items-center my-4">
  <center><h1 className="text-2xl font-bold text-center mb-6">LOGIN</h1></center>
  </div>
  </div>

  <div className="d-flex flex-row align-items-center justify-content-center">
  <div className="divider d-flex align-items-center my-4">
  
              {message && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{message}</div>}
                 <form onSubmit={handleLogin}>
          

          
          <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
                         <div className="relative">
                             <FaUserAlt className="absolute top-3 left-3 text-gray-500" />
                             <input
                                 id="userName"
                                 type="text"
                                 className="mt-1 block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                 value={userName}
                                 onChange={(e) => setUserName(e.target.value)}
                                 required
                             />
                         </div>
                     </div>
                     <div className="mb-4">
                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                         <div className="relative">
                             <FaLock className="absolute top-3 left-3 text-gray-500" />
                             <input
                                 id="password"
                                 type="password"
                                 className="mt-1 block w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 required
                             />
                         </div>
                     </div>

                     <div className="flex items-center justify-between mb-4">
                     <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
 </div>
 <div className='text-center text-md-start mt-4 pt-2'>
            
 <button
                  type="submit"
                       className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
                        
                     >
                         Login
                     </button>
                     
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/Register" className="link-danger">Register</a></p>
         

          </div>

                 </form>
             </div>   
           </div>
           
        </MDBCol>

        </MDBRow>

          

    </MDBContainer>
    );
};

export default LoginComponent;
