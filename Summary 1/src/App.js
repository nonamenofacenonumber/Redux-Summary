import { useState } from 'react';
import Counter from './components/counter/counter';

function App() {
  
  // const [counterTwo , setCounterTwo ] = useState(0);

  
  return (
    <div className="App">
      <Counter />
      {/* <Counter counter={counterTwo} setCounter={setCounterTwo}/> */}
    </div>
  );
}

export default App;
