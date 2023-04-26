import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PRODUCT_COUNTRY,  } from '../utils/queries'
import { ADD_PRODUCT_TO_CART } from '../utils/mutations'
import "../components/cssFiles/Cards.css"


const Germany = () => {
	const quantity = 1
	const cartId = 1

	const { loading, data } = useQuery(QUERY_PRODUCT_COUNTRY, {
		variables: { country: "germany" }
	})
	const products = data?.country || [];
	const [addProduct, { error }] = useMutation(ADD_PRODUCT_TO_CART)
	const addToCart = async (event) => {
		event.preventDefault()
		//onCick adds productId to User.productInCart
		const productId = event.currentTarget.dataset.productid
		try {
			console.log(event.currentTarget)
			const { data } = await addProduct({
				variables: { productId, cartId, quantity },
			});
			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};



	return (

		<div className="container">
			<div className="row">
				{products.map((product) => (
					<div className="col s12 m3">
						<div className="card">
							<div className="card-image">
								<img alt="product" src={`${product.image}`}></img>
								<span className="">{`${product.itemName}`}</span>
								<button onClick={addToCart} data-productid={`${product.id}`}className="btn-floating halfway-fab waves-effect waves-light red" href="#"><i className="material-icons">add</i></button>
							</div>
							<div className="card-content">
								<p>{`${product.description}`}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Germany;
