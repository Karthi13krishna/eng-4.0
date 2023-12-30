import MEMBERS from "../../utils/member-list";
import BoardMember from "./BoardMember";

const BoardMembers = () => {
  return (
    <div className="mx-auto my-6 flex max-w-screen-lg flex-col items-center gap-2 px-4">
      <h2 className="text-4xl">Our Board Members</h2>
      <div className="mx-auto my-4 flex flex-wrap justify-center gap-8">
        {MEMBERS.map((member) => {
          return <BoardMember key={member.id} name={member.name} img={member.img} />;
        })}
      </div>
    </div>
  );
};

export default BoardMembers;
