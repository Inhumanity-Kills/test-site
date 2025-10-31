import Icon4 from "../assets/Icon (3).svg";
import Icon5 from "../assets/Icon (4).svg";
import Icon6 from "../assets/Icon (5).svg";
import Icon7 from "../assets/Icon (6).svg";

const users = [
  { id: 1, name: "Members", img: Icon4, num: 2245341 },
  { id: 2, name: "Clubs", img: Icon5, num: 2245341 },
  { id: 3, name: "Event Bookings", img: Icon6, num: 2245341 },
  { id: 3, name: "Payments", img: Icon7, num: 2245341 },
];

const User = ({ user }) => {
  return (
    <>
      <div className="max-h-[43px] items-center flex justify-start gap-[5.34px]">
        {<img src={user.img} />}
        {user.num}
        {user.name}
      </div>
    </>
  );
};

const UserList = () => {
  return (
    <div className="grid grid-cols-2 gap-x-[20.88px] pt-[44.55px] max-[485px]:pt-[21px] max-[485px]:gap-y-[13px]">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
