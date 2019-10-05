import React from 'react';
import PageHeader from '../layout/PageHeader';

 function Services() {
  return (
    <div>
      <header id="page-header">
     <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto text-center">
          <h1>Services</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
        </div>
      </div>
    </div>
  </header>

  <section id="services" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-header bg-dark text-white">
              <h3>Service Plan One</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$59.99/Month</h4>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
              <ul class="list-group">
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature One
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Two
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Three
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Four
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Five
                </li>
              </ul>
              <a href="#" class="btn btn-danger btn-block mt-2">Get It</a>
            </div>
            <div class="card-footer text-muted">
              1 Year Plan
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-header bg-dark text-white">
              <h3>Service Plan Two</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$99.99/Month</h4>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
              <ul class="list-group">
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature One
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Two
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Three
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Four
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Five
                </li>
              </ul>
              <a href="#" class="btn btn-danger btn-block mt-2">Get It</a>
            </div>
            <div class="card-footer text-muted">
              1 Year Plan
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-header bg-dark text-white">
              <h3>Service Plan Three</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$129.99/Month</h4>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
              <ul class="list-group">
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature One
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Two
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Three
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Four
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Five
                </li>
              </ul>
              <a href="#" class="btn btn-danger btn-block mt-2">Get It</a>
            </div>
            <div class="card-footer text-muted">
              1 Year Plan
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="faq" class="p-5 bg-dark text-white">
    <div class="container">
      <h1 class="text-center">Frequently Asked Questions</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <div id="accordion">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <a href="#collapseOne" data-toggle="collapse" data-parent="accordion">
                    Question One
                  </a>
                </h5>
              </div>

              <div id="collapseOne" class="collapse">
                <div class="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea officiis distinctio exercitationem dolor minus placeat
                  amet commodi, ab a perspiciatis officia nobis reiciendis numquam totam repudiandae molestias nulla, quod
                  voluptatibus modi rerum laboriosam tenetur. Nihil, soluta eaque? Minima, deserunt.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <a href="#collapseTwo" data-toggle="collapse" data-parent="accordion">
                    Question Two
                  </a>
                </h5>
              </div>

              <div id="collapseTwo" class="collapse">
                <div class="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea officiis distinctio exercitationem dolor minus placeat
                  amet commodi, ab a perspiciatis officia nobis reiciendis numquam totam repudiandae molestias nulla, quod
                  voluptatibus modi rerum laboriosam tenetur. Nihil, soluta eaque? Minima, deserunt.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <a href="#collapseThree" data-toggle="collapse" data-parent="accordion">
                    Question Three
                  </a>
                </h5>
              </div>

              <div id="collapseThree" class="collapse">
                <div class="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea officiis distinctio exercitationem dolor minus placeat
                  amet commodi, ab a perspiciatis officia nobis reiciendis numquam totam repudiandae molestias nulla, quod
                  voluptatibus modi rerum laboriosam tenetur. Nihil, soluta eaque? Minima, deserunt.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div id="accordion">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <a href="#collapseFour" data-toggle="collapse" data-parent="accordion">
                    Question Four
                  </a>
                </h5>
              </div>

              <div id="collapseFour" class="collapse">
                <div class="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea officiis distinctio exercitationem dolor minus placeat
                  amet commodi, ab a perspiciatis officia nobis reiciendis numquam totam repudiandae molestias nulla, quod
                  voluptatibus modi rerum laboriosam tenetur. Nihil, soluta eaque? Minima, deserunt.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <a href="#collapseFive" data-toggle="collapse" data-parent="accordion">
                    Question Five
                  </a>
                </h5>
              </div>

              <div id="collapseFive" class="collapse">
                <div class="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea officiis distinctio exercitationem dolor minus placeat
                  amet commodi, ab a perspiciatis officia nobis reiciendis numquam totam repudiandae molestias nulla, quod
                  voluptatibus modi rerum laboriosam tenetur. Nihil, soluta eaque? Minima, deserunt.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <a href="#collapseSix" data-toggle="collapse" data-parent="accordion">
                    Question Six
                  </a>
                </h5>
              </div>

              <div id="collapseSix" class="collapse">
                <div class="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea officiis distinctio exercitationem dolor minus placeat
                  amet commodi, ab a perspiciatis officia nobis reiciendis numquam totam repudiandae molestias nulla, quod
                  voluptatibus modi rerum laboriosam tenetur. Nihil, soluta eaque? Minima, deserunt.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Services;
