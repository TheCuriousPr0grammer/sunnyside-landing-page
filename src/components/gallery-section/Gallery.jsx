import React from "react";
import "./Gallery.scss";
import cone from "../../images/desktop/image-gallery-cone.jpg";
import milkbottles from "../../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../../images/desktop/image-gallery-orange.jpg";
import sugarcubes from "../../images/desktop/image-gallery-sugarcubes.jpg";
export default function Gallery() {
	const gallery = [
		{
			imageURL: milkbottles,
		},
		{
			imageURL: orange,
		},
		{
			imageURL: cone,
		},
		{
			imageURL: sugarcubes,
		},
	];

	return (
		<div className="gallery-wrapper">
			{gallery.map((image) => {
				return <img src={image.imageURL} className="gallery-img" />;
			})}
		</div>
	);
}
