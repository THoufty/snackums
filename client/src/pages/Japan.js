import React from 'react';
import { useQuery, } from '@apollo/client';
import { QUERY_PRODUCT_COUNTRY } from '../utils/queries'
import "../components/cssFiles/Cards.css"

const Japan = () => {
	const { loading, data } = useQuery(QUERY_PRODUCT_COUNTRY, {
		variables: { country: "japan" }
	})
	console.log(loading)
	const products = data?.country || [];


	return (

		<div className="container">
			<div className="row">
				{products.map((product) => (
					<div className="col s12 m3">
						<div className="card">
							<div className="card-image">
								<img alt="product" src={`${product.image}`}></img>
								<span className="">{`${product.itemName}`}</span>
								<button onClick="" className="btn-floating halfway-fab waves-effect waves-light red" href="#"><i class="material-icons">add</i></button>
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

export default Japan;
