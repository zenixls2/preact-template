import {h, render, Component} from 'preact';

export default class Child extends Component {
  render({hello, money}) {
    return (
      <div>
        <h1>{hello}</h1>
        <b>{money}</b>
      </div>
    );
  }
}
