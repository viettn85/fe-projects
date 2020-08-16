import React from 'react';

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container-fluid padding">
        <h3 className="heading">Portfolio</h3>
        <div className="row no-padding">
          <div className="col-md-6">
            <img src="./images/1.png" alt="portfolio 1" className="portfolio" />
          </div>
          <div className="col-md-6">
            <img src="./images/2.png" alt="portfolio 2" className="portfolio" />
          </div>
          <div className="col-md-6">
            <img src="./images/3.png" alt="portfolio 3" className="portfolio" />
          </div>
          <div className="col-md-6">
            <img src="./images/4.png" alt="portfolio 4" className="portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
}
