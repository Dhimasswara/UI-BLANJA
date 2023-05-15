import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCartShopping, faFilter, faMessage } from '@fortawesome/free-solid-svg-icons'
import admin from '../../assets/admin/admin.png'
import logo from '../../assets/logo/Vector.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        // <nav className="navbar navbar-expand-lg bg-light shadow">
        //     <div className="container">
        //         <a className="navbar-brand" href={'/#'}>
        //             <img src={logo} alt="" />
        //             <span className='fw-bolder text-danger ms-3'>Blanja</span>
        //         </a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <form className="ms-lg-5 mt-lg-0 mt-2 d-flex align-items-center __form-control" role="search">
        //                 <input className="form-control me-2 __form-search" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className='mx-2 btn border'><FontAwesomeIcon icon={faFilter} ></FontAwesomeIcon> </button>
        //             </form>
        //             <div className="navigation ms-auto d-flex gap-5 justify-content-center align-items-center py-lg-0 py-3">
        //                 <a><FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon> </a>
        //                 <a><FontAwesomeIcon icon={faBell} ></FontAwesomeIcon> </a>
        //                 <a><FontAwesomeIcon icon={faMessage} ></FontAwesomeIcon> </a>
        //                 <a>
        //                     <div className="btn-group">
        //                         <a className="dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" width={50} height={50} style={{cursor: 'pointer'}}>
        //                             <img src={admin} alt="" width={35} height={35} className='rounded-circle'/>
        //                         </a>
        //                         <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
        //                             <li><button className="dropdown-item" type="button">Action</button></li>
        //                             <li><button className="dropdown-item" type="button">Another action</button></li>
        //                             <li><button className="dropdown-item" type="button">Something else here</button></li>
        //                         </ul>
        //                     </div>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-lg bg-light shadow">
            <div className="container">
                <a className="navbar-brand" href={'/#'}>
                    <img src={logo} alt="" />
                    <span className='fw-bolder text-danger ms-3'>Blanja</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="ms-lg-5 mt-lg-0 mt-2 d-flex align-items-center __form-control" role="search">
                        <input className="form-control me-2 __form-search" type="search" placeholder="Search" aria-label="Search" />
                        <button className='mx-2 btn border'><FontAwesomeIcon icon={faFilter} ></FontAwesomeIcon> </button>
                    </form>
                    <div className="navigation ms-auto d-flex gap-3 justify-content-center align-items-center py-lg-0 py-3">
                        <Link to={'/login'} className='btn btn-danger' style={{borderRadius: '50px', width: '120px'}}>Login</Link>
                        <Link to={'/register'} className='btn btn-outline-secondary' style={{borderRadius: '50px', width: '120px'}}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar