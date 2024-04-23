"use client";

// external
import { Grid, GridItem } from "@chakra-ui/react";

const GridLayout = ({ children }: any) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      templateRows={{
        base: "repeat(7, 1fr)",
        md: "repeat(4, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
    >
      <GridItem
        m={1}
        minH={{ base: "17.5rem", xl: "20rem" }}
        gridRow={{ base: "1 / 2", md: "1 / 2", lg: "1 / 2" }}
      >
        {children?.[0]}
      </GridItem>
      <GridItem
        m={1}
        minH={{ base: "17.5rem", xl: "20rem" }}
        gridRow={{ base: "2 / 4", md: "1 / 2", lg: "1 / 2" }}
      >
        {children?.[1]}
      </GridItem>
      <GridItem
        m={1}
        minH={{ base: "17.5rem", xl: "20rem" }}
        gridRow={{ base: "4 / 5", md: "2 / 3", lg: "2 / 3" }}
      >
        {children?.[2]}
      </GridItem>
      <GridItem
        m={1}
        minH={{ base: "17.5rem", xl: "20rem" }}
        gridRow={{ base: "5 / 6", md: "2 / 3", lg: "2 / 3" }}
      >
        {children?.[3]}
      </GridItem>
      <GridItem
        m={1}
        minH={{ base: "35rem", xl: "40rem" }}
        gridRow={{ base: "6 / 8", md: "3 / 5", lg: "1 / 3" }}
        gridColumn={{ base: "1 / 3", md: "1 / 3", lg: "3 / 5" }}
      >
        {children?.[4]}
      </GridItem>
    </Grid>
  );
};

export default GridLayout;
