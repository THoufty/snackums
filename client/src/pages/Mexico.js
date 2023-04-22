import React from 'react';
import { useQuery, } from '@apollo/client';
import { QUERY_PRODUCT_COUNTRY } from '../utils/queries'




const Mexico = () => {

	const { loading, data } = useQuery(QUERY_PRODUCT_COUNTRY, {
		variables: { country: "mexico" }
	})
	console.log(loading)
	const product = data?.products || [];


	return (


		<div className="container">
			<div className="row">
				<div className="col s12 m6">
					<div className="card">
						{product.map((product) => (
							<div>
								<div className="card-image">
									<img alt="product" src={`${product.image}`}></img>
									<span className="card-title">{`${product.item_name}`}</span>
									{/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
								</div>
								<div class="card-content">
									<p>{`${product.description}` }</p>
								</div>
							</div>
						))}

					</div>
				</div>
			</div>
		</div>
	);
};

export default Mexico;
