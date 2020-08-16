import React from 'react';
import Image from './image.component';

export default function Slider(props) {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          {props.links.length > 0 ? (
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={props.links[0]}
                alt="First slide"
              />
            </div>
          ) : (
            <div></div>
          )}

          {props.links.map((link) => {
            return <Image link={link} />;
          })}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
