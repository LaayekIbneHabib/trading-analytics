"use client";
import { Stack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/state/counter/counterSlice";
import Btn from "@/app/components/button";

const Overview = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <Stack>
        <Btn
          name="Increment"
          genre="button"
          onClick={() => dispatch(increment())}
        />
        <Btn
          name="Decrement"
          genre="button"
          onClick={() => dispatch(decrement())}
        />
        <Btn
          name="Increment by 10"
          genre="button"
          onClick={() => dispatch(incrementByAmount(10))}
        />
      </Stack>
    </div>
  );
};

export default Overview;
