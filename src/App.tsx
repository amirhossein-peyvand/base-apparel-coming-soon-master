import { useMediaQuery } from "react-responsive";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

function App() {
  const isGreaterThan800px = useMediaQuery({ query: "(min-width: 800px)" });

  return <>{isGreaterThan800px ? <Desktop /> : <Mobile />}</>;
}

export default App;
