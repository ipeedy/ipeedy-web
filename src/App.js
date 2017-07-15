import React, { Component } from 'react';
import jeffSheldon from './img/jeff-sheldon-2556.jpg';
import eatersCollective from './img/eaters-collective-129481.jpg';
import clemOnoJeghuo from './img/clem-onojeghuo-174739.jpg';
import sayHello from './img/say-hello@2x.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="Navbar">
          <div className="Container ClearFloat">
            <div className="Logo">
              <h2>I<span>peedy</span>.com</h2>
            </div>
            <div className="NavbarRight">
              <ul className="ClearFloat">
                <li>Reatures</li>
                <li>Blog</li>
                <li>Help</li>
                <li className="Login">Login</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="Header">
          <div className="Triangle_1"></div>
          <div className="Triangle_2"></div>
          <div className="Container ClearFloat">
            <img src={sayHello} alt=""/>
            <div className="layout">
              <h1>Ipeedy</h1>
              <h3>Market for the people, by the people.</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
              <button>Learn more</button>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="Content">
          <div className="Reatures One ClearFloat">
            <img src={jeffSheldon} alt=""/>
            <div>
              <h1>LIVE MODERATED TESTING</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quae voluptatum accusantium aliquam ipsum debitis aut, recusandae molestiae, nihil praesentium, numquam earum corporis magnam suscipit pariatur fuga placeat beatae, architecto.</p>
              <span><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos iste veritatis animi, enim quisquam sequi esse in optio?</em></span>
            </div>
          </div>
          <div className="Reatures Two ClearFloat">
            <img src={eatersCollective} alt=""/>
            <div>
              <h1>LIVE MODERATED TESTING</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quae voluptatum accusantium aliquam ipsum debitis aut, recusandae molestiae, nihil praesentium, numquam earum corporis magnam suscipit pariatur fuga placeat beatae, architecto.</p>
              <span><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos iste veritatis animi, enim quisquam sequi esse in optio?</em></span>
            </div>
          </div>
          <div className="Reatures Three ClearFloat">
            <img src={clemOnoJeghuo} alt=""/>
            <div>
              <h1>LIVE MODERATED TESTING</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quae voluptatum accusantium aliquam ipsum debitis aut, recusandae molestiae, nihil praesentium, numquam earum corporis magnam suscipit pariatur fuga placeat beatae, architecto.</p>
              <span><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos iste veritatis animi, enim quisquam sequi esse in optio?</em></span>
            </div>
          </div>
          <div className="Download">
            <div className="ParallelogramOne"></div>
            <div className="ParallelogramTwo"></div>
            <div className="Container">
              <h3>Ipeedy</h3>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eveniet reiciendis nostrum nesciunt sapiente.</p>
              <button>Add to <span>Ipeedy</span></button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="Footer">
          <div className="Container">
            © 2017
            <span> Ipeedy</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
