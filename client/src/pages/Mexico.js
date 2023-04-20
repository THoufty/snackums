import { useQuery } from '@apollo/client';



const Mexico = () => {

	const { loading, data } = useQuery()
	const product = data?.products || [];


	return (


		<div className="container">
			<div class="row">
				<div class="col s12 m6">
					<div class="card">
						{product.map((product) => (
							<div>
								<div class="card-image">
									<img alt="product" src={`${product.image}`}></img>
									<span class="card-title">{`${product.name}`}</span>
									<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
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
