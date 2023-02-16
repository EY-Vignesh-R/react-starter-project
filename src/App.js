import Child from './components/Child';

function App() {
  return (
  <div> 
  <Child date={new Date().toString()}/>
  <Child date={new Date().toString()}/>
  <Child date={new Date().toString()}/>
  <Child date={new Date().toString()}/>
  <Child date={new Date().toString()}/>
  </div>
   
  );
}

export default App;
