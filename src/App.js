import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

// const number = 5555;
// const singers = [
//   {name: 'Dr. Mahfuz', job: 'singer'},
//   {name: 'Eva Rahman', work: 'music'},
//   {name: 'Agun', job: 'Amar shopna golo'},
//   {name: 'Shuvro Dev', work: 'pathor'}
// ];

// const singleStyle = {
//   color: 'purple',
//   backgroundColor : "white",
// }

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  )     
}








// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
  
//   useEffect( () =>{

//     fetch("https://restcountries.com/v3.1/all")
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   },[])
//   return (
//     <div>
//       <h1>Visiting Every Countries of the world!!!</h1>
//       <h2>Available Countries: </h2>
//       {
//         countries.map( country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }





// function Counter(){
//   const [count, setCount] = useState(66);
//   const increaseCount = () => setCount(count + 1);
//   const decreaseCount = () => setCount(count - 1);
  
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
//   console.log(count);
//   return (
//     <div>
//       <h1>Count: {count} </h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }


// const nayoks = ['Ali','Anowar', 'Riyaz', 'Bapparaz', 'OmerSani', 'Kuber', 'Jamir', 'Alamgir']
//   return (
//     <div className="App">
//     {

//       nayoks.map(nayok => <li>Name: {nayok}</li>)
//     }
//       <Person name={nayoks[0]} nayika="mousumi"></Person>
//       <Person name={nayoks[1]} nayika="bubli"></Person>
//       <Person name={nayoks[2]} nayika="seka"></Person>
//     {
//       nayoks.map(nayok => <Person name={nayok}></Person>)
//     }

//     {
//       singers.map(singer => <Person name={singer.name}></Person>)
//     }
//       <h5>New Component</h5>
//       <Friend name="Imran" phone="013333"></Friend>
//       <Friend name="Abdul Kadir" phone="0393939"></Friend>
//       <Friend name="FAhim" phone="0138883"></Friend>
// function Person(props) {
//   // console.log(props);
//   return (
//     <div className="container">
//       <h1>{props.name}</h1>
//       <p></p>
//     </div>
//   );
// }

// function Friend(props) {
//   return (
//     <div className='container2'>
//       <h1>Name: {props.name}</h1>
//       <p>Phone: {props.phone}</p>
//     </div>
//   )
// }
export default App;
