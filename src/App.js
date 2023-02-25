import Header from "./components/header/Header";
import MainTeaser from "./components/main-teaser/MainTeaser";

import "./styles/reset.scss";
import "./styles/variables.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<MainTeaser />
		</div>
	);
}

export default App;
