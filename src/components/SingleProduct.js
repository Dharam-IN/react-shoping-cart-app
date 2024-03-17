import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from './Rating';
import { CartState } from '../context/Context';

function SingleProduct({product}) {

  const {state: {cart}, dispatch} = CartState();
  console.log(cart)

  console.log(product.inStock)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title style={{minHeight: '50px'}}>{product.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>₹ {product.price.split(".")[0]}</ListGroup.Item>

        {
          product.fastDelivery ? <ListGroup.Item>Fast Delivery</ListGroup.Item> : <ListGroup.Item>4 Day Delivery</ListGroup.Item>
        }

      </ListGroup>
      <Card.Body className='d-flex gap-3 p-0 py-3'>

        {
          cart.some(p => p.id === product.id) ? (
            <Button onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product
              })
            }} variant='danger'>
              Remove Cart
            </Button>
          ) : (
            
            <Button onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: product
              })
            }} variant='success' disabled={!product.inStock}>
            {!product.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
          )
        }
      </Card.Body>
      <Card.Footer>
          <small className="text-muted"><Rating rating={product.ratings}/></small>
        </Card.Footer>
    </Card>
  );
}

export default SingleProduct;