import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
const ProductCard = ({product}) => {
  return (
    <>
     <Link to={`product/${product.id}`} className='text-dark text-decoration-none'>
        <Card className='custom-card'>
            <Card.Img variant='top' className='py-3 cadr-img' src={product.image} />
            <Card.Body className='text-center'>
                <Card.Title className='fs-6'>{product.title.slice(0,30)}</Card.Title>
                <Card.Text className='text-capitalize text-decoration-none fs-6'>
                    {product.category}
                </Card.Text>
                <h5>${product.price}</h5>
                <div className='py-2 d-flex justify-content-center fs-6'>
                <ReactStars
                    count = {5}
                    value = {product.rating.rate}
                    isHalf = {true}
                    edit={false}
                    emptyIcon={<i className='far fa-start'></i>}
                    halfIcon={<i className='fa fa-star-half-alt'></i>}
                    fullIcon={<i className='fa fa-star'></i>}
                    activeColor="#ffd700">
                </ReactStars>
                
                {`${product.rating.count}`}
                </div>
            </Card.Body>
        </Card>
     </Link> 
    </>
  )
}

export default ProductCard
