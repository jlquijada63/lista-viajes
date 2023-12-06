
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = JSON.parse(localStorage.getItem("items")) || [];

function App() {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <Logo />
      <Form setItems={setItems} items={items} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App
