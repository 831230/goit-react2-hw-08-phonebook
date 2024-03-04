import { useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/operations";

import Button from "@mui/material/Button";

const FetchErrorView = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Something went wrong, please try again:</h2>
      <Button variant="contained" onClick={() => dispatch(fetchContacts())}>
        Refresh
      </Button>
    </>
  );
};

export default FetchErrorView;
