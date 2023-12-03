/* eslint-disable no-mixed-spaces-and-tabs */
import Logo from "./components/Logo"
import Form from "./components/Form"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import { useEffect, useState } from "react";



// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Toothpaste", quantity: 2, packed: false },
//   { id: 4, description: "airpods", quantity: 1, packed: false },
//   { id: 5, description: "wallet", quantity: 1, packed: false },
//   { id: 6, description: "shoes", quantity: 2, packed: false },
// ];

const initialItems = localStorage.getItem('items')


function App() {

	const [items, setItems] = useState(JSON.parse(initialItems))

	useEffect(() => { 

		localStorage.setItem('items', JSON.stringify(items))
		
	 }, [items])

	return (
		<div className="container">
			<Logo />
      <Form setItems={setItems}  items={items}/>
			<PackingList items={items} setItems={setItems} />
			<Stats items={items}/>
		</div>
	)
}

export default App
