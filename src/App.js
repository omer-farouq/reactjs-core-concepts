import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr. Mahfuz', job: 'singer'},
  {name: 'Eva Rahman', work: 'music'},
  {name: 'Agun', job: 'Amar shopna golo'},
  {name: 'Shuvro Dev', work: 'pathor'}
];

const singleStyle = {
  color: 'purple',
  backgroundColor : "white",
}

function App() {
  const nayoks = ['Ali','Anowar', 'Riyaz', 'Bapparaz', 'OmerSani', 'Kuber', 'Jamir', 'Alamgir']
  return (
    <div className="App">
    {

      nayoks.map(nayok => <li>Name: {nayok}</li>)
    }
      {/* <Person name={nayoks[0]} nayika="mousumi"></Person>
      <Person name={nayoks[1]} nayika="bubli"></Person>
      <Person name={nayoks[2]} nayika="seka"></Person> */}
    {/* {
      nayoks.map(nayok => <Person name={nayok}></Person>)
    } */}

    {
      singers.map(singer => <Person name={singer.name}></Person>)
    }
      <h5>New Component</h5>
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
      <h1>{props.name}</h1>
      <p></p>
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
