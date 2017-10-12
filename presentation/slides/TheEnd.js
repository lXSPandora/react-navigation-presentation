import React, { Component } from "react";
import { Slide, BlockQuote, Quote, Cite, Image, Text } from "spectacle";
import styled from "styled-components";

export default class TheEnd extends Component {
  render() {
    return (
      <div>
        <Quote
          textColor="secondary"
          style={{
            marginBottom: 50
          }}
        >
          The End
        </Quote>
        <Image
          src={require("../../assets/sheldon.gif")}
          style={{
            marginBottom: 50
          }}
        />
        <Text textColor="secondary" textAlign="center">
          Thank You! 🖖🏻
        </Text>
      </div>
    );
  }
}
