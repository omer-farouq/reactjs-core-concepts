import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Dr. Mahfuz', job: 'singer'};
const singer2 = {name: 'Eva Rahman', work: 'music'};

const singleStyle = {
  color: 'purple',
  backgroundColor : "white",
}

function App() {
  return (
    <div className="App">
      <Person name="omersani" nayika="mousumi"></Person>
      <Person name="Sakib" nayika="bubli"></Person>
      <Person name="BappRaj" nayika="seka"></Person>
      
      <Friend name="Imran" phone="013333"></Friend>
      <Friend name="Abdul Kadir" phone="0393939"></Friend>
      <Friend name="FAhim" phone="0138883"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  return (
    <div className='container2'>
      <h1>Name: {props.name}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
export default App;
