"use client";

// external
import { Grid, GridItem, useColorMode } from "@chakra-ui/react";

const GridLayout = ({ children }: any) => {
  const { colorMode } = useColorMode();
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      templateRows={{
        base: "repeat(6, 1fr)",
        md: "repeat(4, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
    >
      <GridItem
        p={5}
        m={1}
        minH={{ base: "17.5rem", xl: "25rem" }}
        gridRow={{ base: "1 / 2", md: "1 / 2", lg: "1 / 2" }}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
      >
        {children?.[0]}
      </GridItem>
      <GridItem
        p={5}
        m={1}
        minH={{ base: "17.5rem", xl: "25rem" }}
        gridRow={{ base: "2 / 3", md: "1 / 2", lg: "1 / 2" }}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
      >
        {children?.[1]}
      </GridItem>
      <GridItem
        p={5}
        m={1}
        minH={{ base: "17.5rem", xl: "25rem" }}
        gridRow={{ base: "3 / 4", md: "2 / 3", lg: "2 / 3" }}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
      >
        {children?.[2]}
      </GridItem>
      <GridItem
        p={5}
        m={1}
        minH={{ base: "17.5rem", xl: "25rem" }}
        gridRow={{ base: "4 / 5", md: "2 / 3", lg: "2 / 3" }}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
      >
        {children?.[3]}
      </GridItem>
      <GridItem
        p={5}
        m={1}
        gridRow={{ base: "5 / 7", md: "3 / 5", lg: "1 / 3" }}
        gridColumn={{ base: "1 / 3", md: "1 / 3", lg: "3 / 5" }}
        bg={colorMode === "light" ? "gray.200" : "rgba(255, 255, 255, 0.1)"}
      >
        {children?.[4]}
      </GridItem>
    </Grid>
  );
};

export default GridLayout;
