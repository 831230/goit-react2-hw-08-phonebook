// REDUX:
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserGreeting = () => {
  const user = useSelector(selectUser);
  return (
    <>
      {!user.name ? null : (
        <h5>
          Hello: <span>{user.name}</span>
        </h5>
      )}
    </>
  );
};

export default UserGreeting;
