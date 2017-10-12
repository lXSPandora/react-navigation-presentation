import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Layout } from "spectacle";
import styled from "styled-components";

const Text = styled.p`
  font-size: 8;
  text-align: center;
  margin-bottom: 10;
`;

export default class TabNavigator extends Component {
  render() {
    return (
      <div>
        <Layout
          style={{
            flexDirection: "row"
          }}
        >
          <Heading alignItems="center" size={3} textColor="tertiary">
            Tab Navigator
          </Heading>
        </Layout>
        <Text>
          ↪ The TabNavigator creates a TabNavigator in the bottom of the screen
          with all the pages that you referenced on the TabNavigator Router
        </Text>
      </div>
    );
  }
}
