import React, {useState} from 'react';
import {connect} from 'react-redux';
import {CHANGE_NAME} from './redux/user/actions';

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
    changeName: (name) => dispatch(CHANGE_NAME(name))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);