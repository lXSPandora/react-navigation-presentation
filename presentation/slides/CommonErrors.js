import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Layout } from "spectacle";
import styled from "styled-components";

const Text = styled.p`
  font-size: 8;
  text-align: center;
  margin-bottom: 10;
`;

export default class CommonErrors extends Component {
  render() {
    return (
      <div>
        <Layout
          style={{
            flexDirection: "row"
          }}
        >
          <Heading alignItems="center" size={3} textColor="tertiary">
            Common errors
          </Heading>
        </Layout>
        <Text>↪ When the stack full the app crashes</Text>
      </div>
    );
  }
}
