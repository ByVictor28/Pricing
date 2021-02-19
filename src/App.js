import './App.css';
import Card from './Component/Card/Card';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {Switch, Route,BrowserRouter} from "react-router-dom"
import Form from './Component/Form/Form';
import Navbar from './Component/Navbar/Navbar';


const ListPrices = {  
    data:{
      title:"Free",
      price:"0",
      days:"30",
      description:"This is an example of a long description about a random product",
      list:[
        "this is an example",
        "this is an example",
        "this is an example",
        "this is an example",
        "this is an example",
      ]
    },  
    data1:{
      title:"Premium",
      price:"1000",
      days:"unlimited",
      description:"This is an example of a long description about a random product",
      list:[
        "this is an example",
        "this is an example",
        "this is an example",
        "this is an example",
        "this is an example",
      ]
    },  
    data2:{
      title:"regular",
      price:"500",
      days:"365",
      description:"This is an example of a long description about a random product",
      list:[
        "this is an example",
        "this is an example",
        "this is an example",
        "this is an example",
        "this is an example",
      ]
    }
}

const stripePromise = loadStripe('pk_test_51IMc2XCBLkgxFazZMguyYAc0o3pfdzSlQb8xYYKXbGCvnr7jrLF0aw8KNNmhHeDEAru02AKnMetcMlTt7LDBPFiB00qPGm7x9R');
function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            <div className="Container">
              <Switch>
                <Route path="/store">
                  <div className="Content">
                    <Card data={ListPrices.data}/>
                    <Card data={ListPrices.data1} special/>
                    <Card data={ListPrices.data2}/>
                  </div>
                </Route>
                <Route path="/payment/:name">
                  <Elements stripe={stripePromise}>
                    <Form/>
                  </Elements>
                </Route>
              </Switch>
            </div>
        </div>  
      </BrowserRouter>
  );
}

export default App;
