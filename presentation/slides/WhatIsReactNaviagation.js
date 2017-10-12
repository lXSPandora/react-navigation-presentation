import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Heading } from "spectacle";

const Text = styled.p`
  text-align: center;
  font-size: 30;
`;

export default class WhatIsReactNavigation extends Component {
  render() {
    return (
      <div>
        <Heading size={3} textColor="tertiary" textFont="primary">
          What is react navigation?
        </Heading>
        <Text>
          React Navigation is a library that allows you to navigate inside your
          react native application using
        </Text>
      </div>
    );
  }
}
