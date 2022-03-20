
import React from 'react'
import { ReactModal } from '../Modal/ReactModal';
import './Singleproducts.css'
export const Singleproducts = (props) => {
    const { addFunc } = props;
    const { title, image } = props.pd;
    return (

        <div className="col-12 col-md-4 gap-2 mt-3">
            <div className="card px-2 py-3">
                <h3 className='text-center'>{title.slice(0, 25)}</h3>
                <div className='d-flex justify-content-center '>
                    <img className='w-50 img-fluid py-3' src={image} alt="" />
                </div>
                <div className="d-flex pt-2 mx-auto">
                    <button className='btn btn-success me-2' onClick={addFunc}>Add to cart</button>
                    <button className='btn btn-danger me-2'>Delete</button>
                    <ReactModal product={props.pd}></ReactModal>
                </div>
            </div>
        </div>

    )
}
