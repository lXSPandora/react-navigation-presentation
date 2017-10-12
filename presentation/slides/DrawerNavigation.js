import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Layout } from "spectacle";
import styled from "styled-components";

const Text = styled.p`
  font-size: 8;
  text-align: center;
  margin-bottom: 10;
`;

export default class DrawerNavigator extends Component {
  render() {
    return (
      <div>
        <Layout
          style={{
            flexDirection: "row"
          }}
        >
          <Heading alignItems="center" size={3} textColor="tertiary">
            DrawerNavigator
          </Heading>
        </Layout>
        <Text>
          ↪ The DrawerNavigator is a Menu at the side of the screen that allows
          you to put some options and personalize it by the way you want
        </Text>

        <Text>
          The Diference between the StackNavigator and the TabNavigator is the
          way that you make the routing and the methods of configuration.
        </Text>
      </div>
    );
  }
}
