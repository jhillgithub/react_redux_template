import React from 'react'
import { connect } from "react-redux"

import { incrementCount, decrementCount } from '../actions/countActions'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

@connect((store) => {
  return {
    count: store.counter.count,
    user: store.user.user,
  };
})
export default class Welcome extends React.Component {

  constructor() {
    super()
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount() {
    this.props.dispatch(incrementCount())
  }

  decrementCount() {
    this.props.dispatch(decrementCount())
  }

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title={`Welcome ${this.props.user}!`}
              subtitle={`The Count is ${this.props.count}`}
            />
            <CardText>
              React-Redux Example!
            </CardText>
            <CardActions>
              <RaisedButton
                label="Increment Count!"
                primary={true}
                onClick={this.incrementCount}
              />
              <RaisedButton
                label="Decrement Count!"
                secondary={true}
                onClick={this.decrementCount}
              />
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}
