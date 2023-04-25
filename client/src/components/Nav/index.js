import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const styles = {
	navGreen: {
		backgroundColor: 'green',
	},

	navGreenUl: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		listStyle: 'none',
		margin: 0,
		padding: 0,
	},

	navGreenLi: {
		padding: '0 1rem',
	},

	navGreenA: {
		color: 'white',
		textDecoration: 'none',
	},
}


function Nav() {


	function showNavigation() {

		if (Auth.loggedIn()) {
			return (
				<nav style={styles.navGreen}>
					<div className="nav-wrapper">
						<ul id="nav-mobile" className="right hide-on-med-and-down" style={styles.navGreenUl}>
							<li style={styles.navGreenLi}>
								<Link to="/Mexico">Mexico</Link>
							</li>
							<li style={styles.navGreenLi}>
								<Link to="/Germany">Germany</Link>
							</li>
							<li style={styles.navGreenLi}>
								<Link to="/Japan">Japan</Link>
							</li>
							<li style={styles.navGreenLi}>
								<Link to="/Australia">Australia</Link>
							</li>
							<li>
								<Link to="/Cart">Cart</Link>
							</li>
							<li style={styles.navGreenLi}>
								<a href="/" onClick={() => Auth.logout()}>
									Logout
								</a>
							</li>
						</ul>
					</div>
				</nav>
			);
		} else {
			return (
				<nav style={styles.navGreen}>
					<div className="nav-wrapper">
						<ul id="nav-mobile" className="right hide-on-med-and-down" style={styles.navGreenUl}>
							<li>
								<Link to="/Mexico">Mexico</Link>
							</li>
							<li>
								<Link to="/Germany">Germany</Link>
							</li>
							<li>
								<Link to="/Japan">Japan</Link>
							</li>
							<li>
								<Link to="/Australia">Australia</Link>
							</li>
							<li>
								<Link to="/signup">Signup</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
						</ul>
					</div>
				</nav>
			);
		}
	}

	return (
		<header className="flex-row px-1">
			<h1>
				Snackums! 🐶
			</h1>

			<nav>
				{showNavigation()}
			</nav>
		</header>
	);
}

export default Nav;
