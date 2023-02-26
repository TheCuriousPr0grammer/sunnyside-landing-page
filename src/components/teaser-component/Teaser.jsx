import React from "react";
import "../teaser-component/Teaser.scss";
export default function Teaser({ headline, description, learnMore, classes }) {
	return (
		<>
			{headline ? (
				<div
					className={classes ? "teaser-service wrapper " + classes : "teaser"}
				>
					<h2 className="teaser-headline">{headline}</h2>
					<p className="teaser-description">{description}</p>
					{learnMore ? (
						<h3
							className={
								learnMore
									? "teaser-learn_more " + learnMore
									: "teaser-learn_more "
							}
						>
							<a href="#">Learn more</a>
						</h3>
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
