import styles from "./App.module.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Download } from "./pages/Download/Download";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
