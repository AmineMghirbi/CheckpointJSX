import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import './style.css';
import imageInSrc from "./imageInSrc.png"
function App() {
  return (
    <Fragment>
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
        <h1 className='title red'>Your name is here</h1>
        <br />
        <img src="/imageInPublic.jpg" ></img>
        <br />
        <img src={imageInSrc} ></img>
      </div>
      <video controls loop autoPlay>
        <source
          src={"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Fragment>

  );
}

export default App;
