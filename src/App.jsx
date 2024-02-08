// import { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import { LanguageProvider } from "./data/languages/LanguageProvider";
import { LanguageProvider } from "./data/languages/LanguageProvider";
// import { Text } from "./data/languages/Text";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Header from "./components/Header";
import Home from "./components/pages/Home";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} /> */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Route>
  )
);

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router}></RouterProvider>
    </LanguageProvider>
  );
}

export default App;
