import React, { Component } from 'react';
import isPalidrome from './isPalindrome/isPalindrome';
import { Col, Input, Row } from 'reactstrap';
import { rowStyle } from './mainStyle';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possiblePalidrome: '',
      palindromeCheckerSays: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const possiblePalidrome = e.target.value;
    let palindromeCheckerSays;
    if (possiblePalidrome.length === 0) {
      palindromeCheckerSays = '';
    } else {
      if (isPalidrome(possiblePalidrome)) {
        palindromeCheckerSays = 'This is a palindrome.';
      } else {
        palindromeCheckerSays = 'This is NOT a palindrome.';
      }
    }
    this.setState({ possiblePalidrome, palindromeCheckerSays });
  }
  render() {
    return (
      <Row style={rowStyle}>
        <Col sm={{ size: 6, offset: 3 }} xs="12">
          <Input
            value={this.state.possiblePalidrome}
            onChange={this.handleChange}
            placeholder="please enter something"
          />
          <p>{this.state.palindromeCheckerSays}</p>
        </Col>
      </Row>
    );
  }
}

export default Main;
