import {h, render, Component} from 'preact';
import Child from './child';

export default class Test extends Component {
  render({text}) {
    return (
      <div>
        <Child hello="Hello World" money={3000}/>
        <p>{text}</p>
      </div>
    )
  }
}
