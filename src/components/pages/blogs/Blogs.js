import React from 'react';
import Fade from 'react-reveal/Fade';
//react-bootstrap
import { Image, Container, Row, Col } from 'react-bootstrap';
import img9 from '../../../img/imgGallery/img9.jpg';
import img10 from '../../../img/imgGallery/img10.jpg';
import img11 from '../../../img/imgGallery/img11.jpg';


 function Blog() {
  return (
    <div>
        <header id="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto text-center">
          <h1>Blogs</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
        </div>
      </div>
    </div>
  </header>
      
  <section id="blog" class="py-3">
    <Container class="container">
      <Fade bottom>
      <Row >
        <Col >
          <div class="card-columns">
            {/* <Fade bottom> */}
            <div class="card">
              <Image
               src={img9}
              //  src="https://source.unsplash.com/random/300x200" 
               alt="" fluid class=" card-img-top" />
              <div class="card-body">
                <h4 class="card-title">Blog Post One</h4>
                <small class="text-muted">Written by Jeff on 05/20</small>
                <hr />
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                  molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                  exercitationem.
                </p>
              </div>
            </div>
            {/* </Fade> */}

            <div class="card p-3">
              <blockquote class="card-blockquote card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                <footer class="blockquote-footer">
                  <small class="text-muted">Someone Famous in
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
             
            {/* <Fade bottom> */}
            <div class="card">
              <Image src={img10} alt="" fluid class=" card-img-top" />
              <div class="card-body">
                <h4 class="card-title">Blog Post Two</h4>
                <small class="text-muted">Written by Karen on 05/22</small>
                <hr />
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                  molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                  exercitationem.
                </p>
              </div>
            </div>
            {/* </Fade> */}

            <div class="card p-3 bg-danger text-white">
              <blockquote class="card-blockquote card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                <footer class="blockquote-footer">
                  <small class="text-white">Someone Famous in
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>

            {/* <Fade bottom>   */}
            <div class="card">
              <Image src={img11} alt="" fluid class="card-img-top" />
              <div class="card-body">
                <h4 class="card-title">Blog Post Three</h4>
                <small class="text-muted">Written by Harry on 05/23</small>
                <hr />
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                  molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                  exercitationem.
                </p>
              </div>
            </div>
            {/* </Fade> */}

            <div class="card p-3">
              <blockquote class="card-blockquote card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                <footer class="blockquote-footer">
                  <small class="text-muted">Someone Famous in
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
          </div>
        </Col>
      </Row>
      </Fade>
    </Container>
  </section>
    </div>
  )
}

export default Blog;
