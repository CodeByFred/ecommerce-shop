import "./App.scss";
import Overlay from "./components/Overlay/Overlay";
import Subtitle from "./components/Subtitle/Subtitle";
import Title from "./components/Title/Title";

function App() {
  return (
    <main>
      <Overlay>
        <Title>Not What You'd Expect</Title>
        <Subtitle>because normal is boring... (and trademarked)</Subtitle>
      </Overlay>
    </main>
  );
}

export default App;
