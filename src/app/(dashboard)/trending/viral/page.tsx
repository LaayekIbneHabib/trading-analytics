"use client";
import { Grid, GridItem, useColorMode } from "@chakra-ui/react";

const Viral = () => {
  const { colorMode } = useColorMode();
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
      templateRows={{ base: "repeat(4, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={2}
    >
      <GridItem
        p={5}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
        h="15rem"
      >
        1
      </GridItem>
      <GridItem
        p={5}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
        h="15rem"
      >
        2
      </GridItem>
      <GridItem
        p={5}
        h="15rem"
        gridRow={{ base: "2 / 3", lg: "2 / 3" }}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
        height="15rem"
      >
        3
      </GridItem>
      <GridItem
        p={5}
        h="15rem"
        gridRow={{ base: "2 / 3", lg: "2 / 3" }}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
        height="15rem"
      >
        4
      </GridItem>
      <GridItem
        p={5}
        gridRow={{ base: "3 / 5", lg: "1 / 3" }}
        gridColumn={{ base: "1 / 3", lg: "3 / 5" }}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
      >
        5
      </GridItem>
    </Grid>
  );
};

export default Viral;
