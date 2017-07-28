import React from "react";
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="Container ClearFloat">
					<div className="Logo">
						<h2>I<span>peedy</span>.com</h2>
					</div>
					<div className="NavbarRight">
						<ul className="ClearFloat">
							<li><Link to="/">Features</Link></li>
							<li><Link to="/blog">Blog</Link></li>
							<li><Link to="/help">Help</Link></li>
							<li className="Login"><Link to="#">Login</Link></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
