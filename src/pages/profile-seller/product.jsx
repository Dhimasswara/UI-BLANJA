import React from 'react'
import profile from '../../assets/profile/profile1.jpg.png'
import './profile-seller.css'
import DataTable from 'react-data-table-component'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import ModalUpdate from '../../components/ModalUpdate/ModalUpdate'
import ModalDelete from '../../components/ModalDelete/ModalDelete'
import ModalCreate from '../../components/ModalCreate/ModalCreate'

import shirt1 from '../../assets/product/shirt1.jpg'
import shirt2 from '../../assets/product/shirt2.jpg'
import shirt3 from '../../assets/product/shirt3.jpg'
import shirt4 from '../../assets/product/shirt4.jpg'
import shirt5 from '../../assets/product/shirt5.jpg'
import shirt6 from '../../assets/product/shirt6.jpg'
import shirt7 from '../../assets/product/shirt7.jpg'
import shirt8 from '../../assets/product/shirt8.jpg'




const Product = () => {

  // Data Tables
  const columns = [
    {
      name: 'Name',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Stock',
      selector: row => row.stock,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Picture',
      selector: row => row.picture,
    },
    {
      name: 'Action',
      selector: row => 
      <div className="action gap-2 d-flex">
        <ModalUpdate/>
        <ModalDelete/>
      </div>,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Kemeja Jeans',
      stock: '2',
      price: 'Rp. 400.000',
      picture: <img src={shirt1} alt=""  style={{width: '50px', height: '50px', objectFit: 'cover', margin: '10px'}}/>

    },
    {
      id: 2,
      title: 'Kemeja Hitam Kotak',
      stock: '1',
      price: 'Rp. 550.000',
      picture: <img src={shirt2} alt=""  style={{width: '50px', height: '50px', objectFit: 'cover', margin: '10px'}}/>
    },
    {
      id: 3,
      title: 'Kaos Olahraga Biru',
      stock: '4',
      price: 'Rp. 350.000',
      picture: <img src={shirt3} alt=""  style={{width: '50px', height: '50px', objectFit: 'cover', margin: '10px'}}/>
    },
    {
      id: 4,
      title: 'Kaos Hijau Polos',
      stock: '2',
      price: 'Rp. 319.000',
      picture: <img src={shirt4} alt=""  style={{width: '50px', height: '50px', objectFit: 'cover', margin: '10px'}}/>
    },
    {
      id: 5,
      title: 'Kaos Putih Polos',
      stock: '2',
      price: 'Rp. 159.000',
      picture: <img src={shirt5} alt=""  style={{width: '50px', height: '50px', objectFit: 'cover', margin: '10px'}}/>
    },
    {
      id: 6,
      title: 'Kemeja Biru Awan',
      stock: '2',
      price: 'Rp. 515.000',
      picture: <img src={shirt6} alt=""  style={{width: '50px', height: '50px', objectFit: 'cover', margin: '10px'}}/>
    },
    {
      id: 7,
      title: 'Jacket Bomber Coklat',
      stock: '2',
      price: 'Rp. 520.000',
      picture: <img src={shirt7} alt=""  style={{width: '50px', height: '50px', objectFit: 'cover', margin: '10px'}}/>
    },
    {
      id: 8,
      title: 'Jacket Kuning',
      stock: '2',
      price: 'Rp. 419.000',
      picture: <img src={shirt8} alt=""  style={{width: '50px', height: '50px', objectFit: 'cover', margin: '10px'}}/>
    },
  ]

  const customStyles = {
    rows: {
      style: {
        minHeight: '52px', // override the row height
      },
    },
    headCells: {
      style: {
        fontWeight: 'bolder',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor: '#ECECEC',
        fontSize: '14px'
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const [product, setProduct] = useState(data)

  const filterHandler = (e) => {
    const newData = data.filter(row => {
      return row.title?.toLowerCase()?.includes(e.target.value?.toLowerCase())
    })
    setProduct(newData)
  }


  return (
    <div className='border border-dark bg-light rounded p-4 __Product m-auto mt-5 mb-5'>

      <p className='fw-bolder fs-4 p-0 m-0'>My Product</p>
      <span className='text-secondary p-0'>Manage your profile information</span>
      <hr className='w-100' />

      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link link-product active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" aria-controls="pills-home" aria-selected="true">All Items</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link link-product" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" aria-controls="pills-profile" aria-selected="false">Sold Out</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link link-product" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" aria-controls="pills-contact" aria-selected="false">Archived</a>
        </li>
      </ul>


      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="tools d-flex justify-content-between align-items-center pb-3 pt-3">
            <div className="addProduct">
              <ModalCreate/>
            </div>
            <div className="search">
              <form class="d-flex">
                <input class="form-control ms-2 ms-md-0" type="text" placeholder="Search" onChange={filterHandler}/>
              </form>
            </div>
          </div>
          <div className="border rounded">
            <DataTable
              columns={columns}
              data={product}
              customStyles={customStyles}
            >
            </DataTable>
          </div>
        </div>


        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
      </div>


    </div>
    
  )
}

export default Product