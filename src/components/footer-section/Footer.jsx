import React from "react";
import logo from "../../images/logo.svg";
import facebookLogo from "../../images/icon-facebook.svg";
import instagramLogo from "../../images/icon-instagram.svg";
import twitterLogo from "../../images/icon-twitter.svg";
import pinterestLogo from "../../images/icon-pinterest.svg";
import "./Footer.scss";

export default function Footer() {
	const socialImages = [
		{ imageURL: facebookLogo },
		{ imageURL: instagramLogo },
		{ imageURL: twitterLogo },
		{ imageURL: pinterestLogo },
	];

	return (
		<div className="footer-wrapper">
			<img src={logo} alt="logo" className="logo" />
			<div className="footer-links">
				<a href="#">About</a>
				<a href="#">Services</a>
				<a href="#">Projects</a>
			</div>
			<div className="footer-social_links">
				{socialImages.map((image) => {
					return (
						<a href="#">
							<img src={image.imageURL} className="social-icon" alt="social" />
						</a>
					);
				})}
			</div>
		</div>
	);
}
