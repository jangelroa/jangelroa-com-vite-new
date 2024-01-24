// import { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import { LanguageProvider } from "./data/languages/LanguageProvider";
import { LanguageProvider } from "./data/languages/LanguageProvider";
import { Text } from "./data/languages/Text";

function App() {
  return (
    <LanguageProvider>
      <h2 className="home-subtitle">
        <Text tid="GROUPS" />
      </h2>
    </LanguageProvider>
  );
}

export default App;
