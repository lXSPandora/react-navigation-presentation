import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Layout, CodePane, Fill, Image, Text } from "spectacle";
import styled from "styled-components";

export default class StackExample extends Component {
  render() {
    return (
      <div>
        <Heading size={3} textColor="tertiary">
          Example
        </Heading>
        <Image height={600} src={require("../../assets/StackEx.png")} />
      </div>
    );
  }
}
