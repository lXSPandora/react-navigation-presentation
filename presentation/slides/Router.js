import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Layout } from "spectacle";
import styled from "styled-components";

const Text = styled.p`
  font-size: 8;
  text-align: center;
  margin-bottom: 10;
`;

export default class Router extends Component {
  render() {
    return (
      <div>
        <Layout
          style={{
            flexDirection: "row"
          }}
        >
          <Heading alignItems="center" size={3} textColor="tertiary">
            React Navigation Router
          </Heading>
        </Layout>
        <Text>
          ↪ The React navigation router is a document that you put all you
          pages/components to be routed and before that you can use them to
          navigate inside your app.
        </Text>
        <Text>→ There are some arguments to pass to the router:</Text>
        <Text>→ Screen: Is the screen/component that you used</Text>
        <Text>→ Initial Route Name: The first route to be named</Text>
      </div>
    );
  }
}
