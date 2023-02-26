import React from "react";
import "./Testimonials.scss";
import EmilyImageURL from "../../images/image-emily.jpg";
import ThomasImageURL from "../../images/image-thomas.jpg";
import JennieImageURL from "../../images/image-jennie.jpg";
import Testimonial from "../testimonial/Testimonial";

export default function Testimonials() {
	const clientTestimonials = [
		{
			imageUrl: EmilyImageURL,
			clientName: "Emily R.",
			clientFunction: "Marketing Director",
			testimonialText:
				"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
		},
		{
			imageUrl: ThomasImageURL,
			clientName: "Thomas S.",
			clientFunction: "Chief Operating Officer",
			testimonialText:
				"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
		},
		{
			imageUrl: JennieImageURL,
			clientName: "Jennie F.",
			clientFunction: "Business Owner",
			testimonialText:
				"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
		},
	];

	return (
		<div>
			<div className="testimonials-section__headline">Client Testimonials</div>
			<div className="testimonials-section__wrapper">
				{clientTestimonials.map((testimonial, index) => {
					return (
						<Testimonial
							key={index}
							name={testimonial.clientName}
							clientFunction={testimonial.clientFunction}
							imageURL={testimonial.imageUrl}
							testimonialDescription={testimonial.testimonialText}
						/>
					);
				})}
			</div>
		</div>
	);
}
