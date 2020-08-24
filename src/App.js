import React from 'react';
import Myheader from './Myheader';
import Mycards from './Mycards';
import Mytables from './Mytables';

function App() {
  return (
    <div >
      <Myheader/>
      <div className="container">
        <div className="row mt-5">
            <Mycards/>
        </div>
        <div className="row mb-4">
          <Mytables/>
        </div>
      </div>
    </div>
  );
}
export default App;
