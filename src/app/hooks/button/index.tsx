import { useDispatch, useSelector } from "react-redux";
import { setLoading, setDisabled } from "@/state/button/buttonSlice";
import { RootState } from "@/state/store";

export const useButtonState = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.button.isLoading);
  const isDisabled = useSelector((state: RootState) => state.button.isDisabled);

  const toggleButtonState = () => {
    dispatch(setLoading(true));
    dispatch(setDisabled(false));
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setDisabled(true));
      setTimeout(() => dispatch(setDisabled(false)), 2000);
    }, 2000);
  };

  return { isLoading, isDisabled, toggleButtonState };
};
