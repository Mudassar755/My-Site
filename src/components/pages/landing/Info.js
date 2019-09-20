import React from 'react';
import laptop from '../../../img/laptop.png'

function Info() {
  return (
    <section id="info" class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet blanditiis incidunt iusto corrupti illum
            cum laudantium ex sequi amet.</p>
          <a href="about.html" class="btn btn-outline-danger btn-lg">Learn More</a>
        </div>
        <div class="col-md-6">
          <img src={laptop} alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default  Info;