import React from "react";
import logo from "../../images/logo.svg";
import Nav from "../nav/Nav";
import "./Header.scss";
export default function Header() {
	return (
		<div className="teaser">
			<div className="header">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<Nav />
			</div>
			<div className="creative-text">
				<h1>We are creatives</h1>
			</div>
		</div>
	);
}
