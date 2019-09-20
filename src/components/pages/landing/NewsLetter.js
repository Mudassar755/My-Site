import React from 'react'

 function NewsLetter() {
  return (
    <section id="newsletter" class="text-center p-5 bg-dark text-white">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>Sign Up For Our Newsletter</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                asperiores consectetur, quae ducimus voluptates vero repellendus
                architecto maiores recusandae mollitia?
              </p>
              <form class="form-inline justify-content-center">
                <input
                  type="text"
                  class="form-control mb-2 mr-2"
                  placeholder="Enter Name"
                />
                <input
                  type="text"
                  class="form-control mb-2 mr-2"
                  placeholder="Enter Email"
                />
                <button class="btn btn-primary mb-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default NewsLetter;
