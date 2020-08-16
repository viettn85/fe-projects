import React from 'react';

export default function Image(props) {
  return (
    <div class="carousel-item">
      <img class="d-block w-100" src={props.link} />
    </div>
  );
}
