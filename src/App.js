import logo from './logo.svg';
import './App.css';

function App() {
  const nayok = ['jisan', 'hasan', 'jahin']

  const cinema = [
    { name: 'podma', nayok: 'kabila', naika: "rajjak" },
    { name: 'pod', nayok: 'kabila hossin', naika: "rajjak jilani" }

  ]
  return (


    <div className="App">
      <ul>
        {
          nayok.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* {
        cinemas.map(cinema => console.log(cinema))
      } */}

      <Friend phone="01722222222" addres="Nohakhali"></Friend>
      <Friend phone="01733333333" addres="Dhaka"></Friend>
      <Friend phone="01733333333" addres="Dinajpur"></Friend>
    </div>
  );
}

/* 

   <a href="google.com">Google.com</a>
      <Person name="Jisan" naika="moushumi" job="naika" country="bd"></Person>
      <Person name="Jahin" country="bangladesh"></Person>
      <Person></Person>
      <Person></Person>*/

function Person(props) {
  console.log(props)
  return (
    <div className="Person">
      <h1>Name :{props.name}</h1>
      <p>Country :{props.country}</p>
    </div>

  )
}
/* function Cinema(props) {
  return (
    <div>
      <h2>Nayok : {props.nayok}</h2>
      <h5>Nayok : {props.naika}</h5>
    </div>
  )
} */


function Friend(props) {
  return (
    <div className="Person">
      <h3>Phone :{props.phone}</h3>
      <h5>Address :{props.addres}</h5>
    </div>
  )
}


export default App;
