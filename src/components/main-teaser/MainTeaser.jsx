import React from "react";
import Teaser from "../teaser-component/Teaser";
import "../main-teaser/MainTeaser.scss";
export default function MainTeaser() {
	let transformHeadline = "Transform your brand";
	let transformDescription =
		"	We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.";
	let standoutHeadline = "Stand out to the right audience";
	let standoutDescription = `Using a collaborative formula of designers, researchers, photographers,videographers, and copywriters, we’ll build and extend your brand in digital places.`;
	let graphicDesignHeadline = "Graphic Design";
	let graphicDesignDescription = `Great design makes you memorable. We deliver
		artwork that underscores your brand message and captures potential clients’
		attention.`;
	let photographyHeadline = "Photography";
	let photographyDescription = `Photography Increase your credibility by getting the most
		stunning, high-quality photos that improve your business image.`;
	return (
		// Vreau sa am o componenta de tip - teaser. pasez imaginea de background si randez in partea aia. pasez si textul. pentru cazurile in care exista text si randez conditional.
		<div className="teaser-grid">
			<div className="transform-brand">
				<Teaser
					headline={transformHeadline}
					description={transformDescription}
					learnMore={true}
				/>
			</div>
			<div className="egg">
				<Teaser />
			</div>
			<div className="cup">
				<Teaser />
			</div>
			<div className="standout">
				<Teaser
					headline={standoutHeadline}
					description={standoutDescription}
					learnMore={true}
				/>
			</div>
			<div className="graphicDesign">
				<Teaser
					headline={graphicDesignHeadline}
					description={graphicDesignDescription}
					classes="graphicDesign"
				/>
			</div>
			<div className="photography">
				<Teaser
					headline={photographyHeadline}
					description={photographyDescription}
					classes="photographyService"
				/>
			</div>
		</div>
	);
}
