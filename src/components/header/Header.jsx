import React from "react";
import logo from "../../../public/images/logo.svg";

export default function Header() {
	return (
		<div className="header">
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<Nav />
		</div>
	);
}
