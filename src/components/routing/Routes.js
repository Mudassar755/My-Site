import React, {Fragment} from 'react';
import { Switch, Route} from 'react-router-dom';
import About from '../pages/About';
import Blogs from '../pages/blogs/Blogs';
import Blog from '../pages/blogs/Blog';
import Contact from '../pages/contact/Contact';
import CreateBlog from '../pages/blogs/CreateBlog';


const Routes = () => {
  return (
    <Fragment>
      <Switch>
      <Route exact path = '/about' component = {About} />
      <Route exact path = '/contact' component = {Contact} />
      <Route exact path = '/blogs' component = {Blogs} />
      <Route exact path = '/createbblog' component = {CreateBlog} />
      <Route exact path = '/blog/:id' component = {Blog} />
      </Switch>
    </Fragment>
  )
}

export default Routes
