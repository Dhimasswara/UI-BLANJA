import React from 'react'
import "./Auth.css"
import logo from '../../assets/logo/Vector.png'
import { Link } from 'react-router-dom'
import FormAuth from '../../components/FormAuth/FormAuth'


const AuthLogin = () => {
    return (
        <div className="container text-center box-auth d-grid align-items-center justify-content-center">
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-12 text-center mb-4">
                            <div className="logo-brand mb-4 d-flex align-items-center justify-content-center">
                                <img src={logo} alt="logo-brand" width={"auto"} height={60} />
                                <span className='fw-bolder text-danger ms-3 fs-3'>Blanja</span>
                            </div>
                            <div className="title mb-4">
                                <h5 className='fw-bolder'>Please login with your account</h5>
                            </div>
                        </div>

                        <div className="col-11 col-md-8">
                            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="button signup-customer active" id="pills-Customer-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer"
                                        aria-selected="true">Customer</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="button signup-seller" id="pills-Seller-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller"
                                        aria-selected="false">Seller</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-Customer" role="tabpanel"
                                    aria-labelledby="pills-Customer-tab" tabindex="0">
                                    <form className="pt-4 " >
                                        <FormAuth title={'Email'} type={'email'}></FormAuth>
                                        <FormAuth title={'Password'} type={'password'}></FormAuth>
                                        <button type="submit" className="button create-account mt-4">Login</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
                                    <form className="pt-4">
                                        <FormAuth title={'Email'} type={'email'}></FormAuth>
                                        <FormAuth title={'Password'} type={'password'}></FormAuth>
                                        <button type="submit" className="button create-account mt-4">Login</button>
                                    </form>
                                </div>
                            </div>

                            <div>
                                <p className="mt-5 Register">Don't have a Blanja account? <Link className='text-decoration-none' to={'/register'}>Register</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuthLogin

