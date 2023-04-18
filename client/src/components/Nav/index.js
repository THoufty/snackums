import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const styles = {
	btnFloating: {
		borderRadius: '40px',
		width: '203px',
		height: '203px',
		display: 'flex',
	},

	btnFloatingImg: {
		width: '100%',
		height: '100%',
	}
}


function Nav() {


	function showNavigation() {

		if (Auth.loggedIn()) {
			return (
				<nav>
					<div className="nav-wrapper">
						<ul id="nav-mobile" class="right hide-on-med-and-down">
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
				<nav>
					<div className="nav-wrapper">
						<ul id="nav-mobile" class="right hide-on-med-and-down">
							<li>
								<Link to="/signup">Signup</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
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
						</ul>
					</div>
				</nav>
			);
		}
	}

	return (
		<header className="flex-row px-1">
			<h1>
				Sample Application
			</h1>

			<nav>
				{showNavigation()}
			</nav>
		</header>
	);
}

export default Nav;
