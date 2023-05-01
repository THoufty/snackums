import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PRODUCT_CART } from '../utils/queries'
import { REMOVE_PRODUCT_FROM_CART } from '../utils/mutations'
import "../components/cssFiles/Cards.css"


const Cart = () => {
	const { loading, data } = useQuery(QUERY_PRODUCT_CART)
	console.log(data)
	const products = data?.productsInTheCart || [];

	const [removeProduct, { error }] = useMutation(REMOVE_PRODUCT_FROM_CART)
	const removeFromCart = async (event) => {
		event.preventDefault()
		//onCick removes productId to User.productInCart
		const productId = event.currentTarget.dataset.productid
		try {
			const { data } = await removeProduct({
				variables: { productId },
			});
			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	return (

		<div>
			<h3>Your Cart!</h3>
		<div className="container">
			<div className="row">
				{products.map((product) => (
					<div key={product.productId} className="col s12 m3">
						<div className="card">
							<div className="card-image">
								<img alt="product" src={`${product.image}`}></img>
								<span className="">{`${product.itemName}`}</span>
							</div>
							<div>
								<span className="">${`${product.priceUsd}`}</span>
							</div>
							<div className="card-content">
								<p>{`${product.quantity}`}</p>
							</div>
							<div>
								<button onClick={removeFromCart} data-productid={`${product.productId}`} className="btn-waves-effect waves-light btn red" href="#"><i className="material-icons">Remove</i></button>
							</div>
						</div>
					</div>
				))}
			</div>
			</div>
		</div>
	);
};

export default Cart;
