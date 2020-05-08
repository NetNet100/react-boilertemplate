import React, {useState} from 'react';
import {connect} from 'react-redux';
import {changeName} from './redux/user/actions';
import Grid1 from './components/GridForExam/grid'
import Grid2 from './components/Grid2/grid';
import Grid3 from './components/Grid3/grid';
import NavBar from "./components/NavBar/NavBar";
import {Route, BrowserRouter} from 'react-router-dom';

function App({user, changeName}) {
    const [name, setName] = useState("");
  return (
    <div>
      <h1>{user? user.name: "Error"}</h1>

      <input type="text" id="fname" placeholder="Write a name..." onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={() => changeName(name)}>
        Click me To chane name
      </button>
      {console.log(user.name)}

      <br />
      <br />
    <BrowserRouter>
      <div>
          <NavBar />
          <Route exact path='/Grid1'  component={Grid1} />
          <Route path='/Grid2'  component={Grid2} />
          <Route path='/Grid3'  component={Grid3} />
      </div>
    </BrowserRouter>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => dispatch(changeName(name))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);