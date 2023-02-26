import Gallery from "./components/gallery-section/Gallery";
import Header from "./components/header/Header";
import MainTeaser from "./components/main-teaser/MainTeaser";
import Testimonials from "./components/testimonials-section/Testimonials";

import "./styles/reset.scss";
import "./styles/variables.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<MainTeaser />
			<Testimonials />
			<Gallery />
		</div>
	);
}

export default App;
