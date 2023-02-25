import React from "react";
import "./Nav.scss";

export default function Nav() {
	return (
		<div className="nav-wrapper">
			<div className="nav-link">About</div>
			<div className="nav-link">Services</div>
			<div className="nav-link">Projects</div>
			<div className="nav-link contact">Contact</div>
		</div>
	);
}
