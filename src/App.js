function App() {

  const createDigitsButton= () => {
    const digits = [];

    for(let i=1; i<10; ++i){
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits;
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          <span>0</span>
        </div>

        <div className='operators'>
          <button>√x</button>
          <button>x!</button>
          <button>ln(x)</button>
          <button>x<sup>b</sup></button>

          <button>DEL</button>
        </div>

        <div className="digits">
          {createDigitsButton()}
          <button>0</button>
          <button>AC</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
