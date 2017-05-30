import {h, render, Component} from 'preact';
import {Router} from 'preact-router';
import {Link} from 'preact-router/match';
import createHashHistory from 'history/createHashHistory';
import Child from './child';
import Test from './test';

const Main = () => (
  <div>
    <nav>
      <Link activeClassName="active" href="/test">Test</Link>
      <Link activeClassName="active" href="/child/2000">Hello</Link>
    </nav>
    <Router history={createHashHistory()}>
      <Child path="/child/:money" hello="Hello World"/>
      <Test path="/test" text="xdd" />
    </Router>
  </div>
)



render(<Main />, document.body);
