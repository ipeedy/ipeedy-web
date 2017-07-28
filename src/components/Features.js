import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Button from './Button.js';
import DialogExampleSimple from './Dialog.js';

import jeffSheldon from '../img/jeff-sheldon-2556.jpg';
import eatersCollective from '../img/eaters-collective-129481.jpg';
import clemOnoJeghuo from '../img/clem-onojeghuo-174739.jpg';
import sayHello from '../img/say-hello@2x.png';
import '../css/Features.css';

class Features extends React.Component {
	render() {
		return (
      <MuiThemeProvider>
        <div>
          {/* Header */}
          <div className="Header">
            <div className="Triangle_1" />
            <div className="Triangle_2" />
            <div className="Container ClearFloat">
              <img src={sayHello} alt="" />
              <div className="layout">
                <h1>Ipeedy</h1>
                <h3>Market for the people, by the people.</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                <button>Learn more</button>
              </div>
            </div>
          </div>
          <div><DialogExampleSimple /></div>
          {/* Features List */}
          <div className="Content">
            <div className="Reatures One ClearFloat">
              <img src={jeffSheldon} alt="" />
              <div>
                <h1>LIVE MODERATED TESTING</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Illo quae voluptatum accusantium aliquam ipsum debitis aut, 
                  recusandae molestiae, nihil praesentium, numquam earum corporis 
                  magnam suscipit pariatur fuga placeat beatae, architecto.
                </p>
                <span><em>
                  Lorem ipsum dolor sit amet, consectetur adipisicing 
                  elit. Adipisci eos iste veritatis animi, enim quisquam sequi 
                  esse in optio?</em>
                </span>
              </div>
            </div>
            <div className="Reatures Two ClearFloat">
              <img src={eatersCollective} alt="" />
              <div>
                <h1>LIVE MODERATED TESTING</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Illo quae voluptatum accusantium aliquam ipsum debitis aut, 
                  recusandae molestiae, nihil praesentium, numquam earum 
                  corporis magnam suscipit pariatur fuga placeat beatae, 
                  architecto.
                </p>
                <span><em>
                  Lorem ipsum dolor sit amet, consectetur adipisicing 
                  elit. Adipisci eos iste veritatis animi, enim quisquam sequi 
                  esse in optio?</em>
                </span>
              </div>
            </div>
            <div className="Reatures Three ClearFloat">
              <img src={clemOnoJeghuo} alt="" />
              <div>
                <h1>LIVE MODERATED TESTING</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Illo quae voluptatum accusantium aliquam ipsum debitis aut, 
                  recusandae molestiae, nihil praesentium, numquam earum 
                  corporis magnam suscipit pariatur fuga placeat beatae, 
                  architecto.
                </p>
                <span><em>Lorem ipsum dolor sit amet, consectetur adipisicing 
                  elit. Adipisci eos iste veritatis animi, enim quisquam sequi 
                  esse in optio?</em>
                </span>
              </div>
            </div>
            <div className="Download">
              <div className="ParallelogramOne" />
              <div className="ParallelogramTwo" />
              <div className="Container">
                <h3>Ipeedy</h3>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Harum eveniet reiciendis nostrum nesciunt sapiente.
                </p>
                <Button />
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
      </MuiThemeProvider>
		);
	}
}

export default Features;
