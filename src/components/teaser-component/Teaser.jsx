import React from "react";
import "../teaser-component/Teaser.scss";
export default function Teaser({ headline, description, learnMore, classes }) {
	return (
		<>
			{headline ? (
				<div className={classes ? "teaser " + classes : "teaser"}>
					<h2 className="teaser-headline">{headline}</h2>
					<p className="teaser-description">{description}</p>
					{learnMore ? (
						<h3 className="transform-learn_more">Learn more</h3>
					) : (
						""
					)}
				</div>
			) : (
				""
			)}
		</>
	);
}
