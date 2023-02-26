import React from "react";
import "./Testimonial.scss";
export default function Testimonial({
	name,
	clientFunction,
	imageURL,
	testimonialDescription,
}) {
	return (
		<div className="testimonial">
			<div className="testimonial-image">
				<img src={imageURL} alt="" />
			</div>
			<div className="testimonial-text">{testimonialDescription}</div>
			<div className="testimonial-client__name">{name}</div>
			<div className="testimonial-client__function">{clientFunction}</div>
		</div>
	);
}
