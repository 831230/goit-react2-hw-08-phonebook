import useAuth from "../../hooks/useAuth";

import UserData from "../UserData/UserData";


const UserGreeting = () => {
  const {  user } = useAuth();
  return (
    <>
      {!user.name ? null : (
        <><h5>
          Hello: <span>{user.name}</span>
        </h5>
        <UserData/></>
      )}
    </>
  );
};

export default UserGreeting;
