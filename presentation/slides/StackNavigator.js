import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Layout } from "spectacle";
import styled from "styled-components";

const Text = styled.p`
  font-size: 8;
  text-align: center;
  margin-bottom: 10;
`;

export default class StackNavigator extends Component {
  render() {
    return (
      <div>
        <Layout
          style={{
            flexDirection: "row"
          }}
        >
          <Heading alignItems="center" size={3} textColor="tertiary">
            StackNavigator
          </Heading>
        </Layout>
        <Text>
          ↪ The Stack Navigator uses the concept of Stack to manage the screens.
          Provides a way for your app to transition between screens where each
          new screen is placed on top of a stack.
        </Text>

        <Text>Most used Methods:</Text>
        <Text>
          → navigate() - Navigate to the screen and can be passed some props
        </Text>
        <Text>
          → goBack() - Removes the screens from the top of the stack and you can
          choose the number of pages that will be removed
        </Text>
        <Text>→ reset() - Reset the stack to the desired screen</Text>
      </div>
    );
  }
}
