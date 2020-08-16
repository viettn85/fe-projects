import React from 'react';

export default function Testimonial() {
  return (
    <div id="testimonials">
      <h3 className="heading">Testimonials</h3>
      <div className="row padding">
        <div className="col-md-6">
          <div className="card text-center">
            <img src="./images/5.png" alt="" className="card-img-top" />
            <div className="card-body">
              <h4>Micheal Jackson</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem corrupti maxime animi. Ducimus iusto asperiores
                illum magni ipsa eius beatae ratione officia vel porro sit totam
                excepturi tempora, magnam commodi.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <img src="./images/6.png" alt="" className="card-img-top" />
            <div className="card-body">
              <h4>Britney Spears</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem corrupti maxime animi. Ducimus iusto asperiores
                illum magni ipsa eius beatae ratione officia vel porro sit totam
                excepturi tempora, magnam commodi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
