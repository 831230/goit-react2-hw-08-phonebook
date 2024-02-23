import { useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/operations";

const FetchErrorView = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Something went wrong, please try again:</h2>
      <button className="refresh-btn" onClick={() => dispatch(fetchContacts())}>
        Refresh
      </button>
    </>
  );
};

export default FetchErrorView;
