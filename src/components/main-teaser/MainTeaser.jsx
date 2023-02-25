import React from "react";
import Transform from "../transform-teaser/Transform";
import "../main-teaser/MainTeaser.scss";
export default function MainTeaser() {
	return (
		// Vreau sa am o componenta de tip - teaser. pasez imaginea de background si randez in partea aia. pasez si textul. pentru cazurile in care exista text si randez conditional.
		<div className="teaser-grid">
			<div className="transform-brand">
				<Transform />
			</div>
			<div className="egg"></div>
			<div className="cup"></div>
			<div className="standout">
				<Transform />
			</div>
			<div className="cherry">
				<Transform />
			</div>
			<div className="orange">
				<Transform />
			</div>
		</div>
	);
}
