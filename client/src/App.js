import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Appmixo from "./Components/Appmixo";
import Testimonials from "./Components/Testimonials";

const axios = require('axios');

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
      axios.get('/api')
        .then(function (response) {
          // handle success
          setData(response.data.message);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });


  }, []);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/testimonials" component={Testimonials}></Route>
          <Route exact path="/appmixo" component={Appmixo}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;