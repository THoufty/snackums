import { useQuery, } from '@apollo/client';
import { QUERY_PRODUCT_CART } from '../utils/queries'

const Cart = () => {
    const { loading, data } = useQuery(QUERY_PRODUCT_CART, {
        variables: { userId }
    })
    console.log(loading)
    const products = data?.cart || [];
removeFunky()

    return (


		<div className="container">
			<div className="row">
				{products.map((product) => (
					<div className="col s12 m3">
						<div className="card">
							<div className="card-image">
								<img alt="product" src={`${product.image}`}></img>
								<span className="">{`${product.itemName}`}</span>
								<button onClick={removeFunky} className="btn-floating halfway-fab waves-effect waves-light red" href="#"><i class="material-icons">Remove</i></button>
							</div>
							<div className="card-content">
								<p>{`${product.quantity}`}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cart;
