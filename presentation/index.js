// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import TheEnd from "./slides/TheEnd";
import WhatIsReactNavigation from "./slides/WhatIsReactNaviagation";
import StackNavigator from "./slides/StackNavigator";
import StackExample from "./slides/StackExample";
import TabNavigator from "./slides/TabNavigator";
import TabExample from "./slides/TabExample";
import RouterEx from "../assets/RouterEx.png";
import Router from "./slides/Router";
import RouterExample from "./slides/RouterExample";
import AsyncStorage from "./slides/AsyncStorageAndNavigation";
import CommonErrors from "./slides/CommonErrors";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reactNavigation: require("../assets/react-nav.svg"),
  github: require("../assets/github.svg"),
  twitter: require("../assets/twitter.svg"),
  stack: require("../assets/Stack.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#e2e2e2",
    secondary: "#1F2022",
    tertiary: "rgb(111, 89, 159)",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["fade"]} bgColor="#e2e2e2">
          <Image src={images.reactNavigation} />
          <Heading size={1} fit lineHeight={1} textColor="black">
            React-Navigation
          </Heading>
          <Text margin="10px 0 0" textColor="rgb(111, 89, 159)" size={3}>
            The Right way to navigate
          </Text>
          <Text
            textColor="accent"
            style={{ textAlign: "center", fontSize: 25, marginTop: 50 }}
          >
            Luiz Fernando Sousa Camargo
          </Text>
          <Layout style={{ margin: 50, justifyContent: "space-between" }}>
            <Fill>
              <Link href="https://twitter.com/luiz_bones" target="_blank">
                <Image src={images.twitter} style={{ height: 50 }} />
                <Text
                  textColor="tertiary"
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    justifyContent: "center"
                  }}
                >
                  @luiz.bones
                </Text>
              </Link>
            </Fill>
            <Fill>
              <Link href="https://github.com/lXSPandora" target="_blank">
                <Image src={images.github} style={{ height: 50 }} />
                <Text
                  textColor="tertiary"
                  style={{ textAlign: "center", fontSize: 18 }}
                >
                  lXSPandora
                </Text>
              </Link>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]}>
          <WhatIsReactNavigation />
        </Slide>
        <Slide transition={["fade"]}>
          <StackNavigator />
        </Slide>
        <Slide transition={["fade"]}>
          <StackExample />
        </Slide>
        <Slide transition={["fade"]}>
          <TabNavigator />
        </Slide>
        <Slide transition={["fade"]}>
          <TabExample />
        </Slide>
        <Slide transition={["fade"]}>
          <Router />
        </Slide>
        <Slide transition={["fade"]}>
          <RouterExample />
        </Slide>
        <Slide transition={["fade"]}>
          <CommonErrors />
        </Slide>
        <Slide transition={["fade"]}>
          <AsyncStorage />
        </Slide>
      </Deck>
    );
  }
}
