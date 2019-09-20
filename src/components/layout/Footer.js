import React from "react";

function Footer() {
  return (
      <footer id="main-footer" class="text-center p-4">
        <div class="container">
          <div class="row">
            <div class="col">
              <p>
                Copyright &copy;
                <span id="year"></span> BrandName
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
