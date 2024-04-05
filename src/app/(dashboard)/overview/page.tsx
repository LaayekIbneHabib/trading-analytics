"use client";
import { Stack, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/state/counter/counterSlice";

const Overview = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <Stack>
        <Button colorScheme="teal" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button colorScheme="teal" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by 10
        </Button>
      </Stack>
    </div>
  );
};

export default Overview;
