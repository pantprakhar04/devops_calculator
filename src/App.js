import {useState} from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [disable, setDisable] = useState(false);
  const ops = ["^"];

  const squareRoot = () => {
    setCalc(Math.sqrt(calc));
  }

  const naturalLog = () => {
    setCalc(Math.log(calc));
  }

  const factorial = () => {
    let fact = 1;
    for(let i=2; i<=calc; ++i) fact *= i;
    setCalc(fact);
  }

  const powerFunc = () => {
    const [a,b] = calc.split("^");
    setCalc(Math.pow(a,b)); setDisable(false);
  }

  const updateCalc = value => {

    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }

    if(calc.includes("^")) setDisable(true);

    setCalc(calc + value);
  }

  const deleteLast = () => {
    if(calc == '') return;
    const value = calc.slice(0, -1);

    setCalc(value);
  }

  const deleteAll = () => {
    if(calc == '') return;

    setCalc('');
  }

  const createDigitsButton= () => {
    const digits = [];

    for(let i=1; i<10; ++i){
      digits.push(
        <button onClick={() => {updateCalc(i.toString())}} key={i}>{i}</button>
      )
    }
    return digits;
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {calc || "0"}
        </div>

        <div className='operators'>
          <button onClick={squareRoot}>√x</button>
          <button onClick={factorial}>x!</button>
          <button onClick={naturalLog}>ln(x)</button>
          <button disabled={disable} onClick={() => {updateCalc('^')}}>x<sup>b</sup></button>

          <button onClick={deleteLast}>DEL</button>
          
        </div>

        <div className="digits">
          {createDigitsButton()}
          <button onClick={() => {updateCalc('0')}}>0</button>
          <button onClick={deleteAll}>AC</button>
          <button onClick={powerFunc}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
