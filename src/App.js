import './App.css';
import { connect } from 'react-redux';
import { IncAction } from './Action';
import { DecAction } from './Action';

function App({local_variable , IncAction,DecAction}) {
  return (
    <div className="App">
      <h1>{local_variable}</h1> <br/>
      <button onClick={() =>IncAction(5)}>INCREMENT</button>
      <button onClick={DecAction}>DECREMENT</button>
    </div>
    
  );
}
const mapStateToProps = state =>({
  local_variable : state
 })

export default connect(mapStateToProps ,{IncAction , DecAction})(App);
