import React from 'react';
import { Router, Route , IndexRoute } from 'react-router';

/**
 * components
 */
 

/**
 * routes
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={BookPanel}/>
    <Route path="/book_create/" component={BookForm} />
    <Route path="/book_update/:id" component={BookForm} />

    <Route path="/authors/" component={AuthorPanel} />
    <Route path="/author_create/" component={AuthorForm} />
    <Route path="/author_update/:id" component={AuthorForm} />

    <Route path="/about" component={About}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);