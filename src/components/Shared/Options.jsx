import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
export const Options = ({handleDeleteJob}) => {
  return (
    <div className="bg-white w-20 flex flex-col rounded-md absolute top-10 right-4">

      <div className="flex p-2 justify-start items-center gap-2 text-black text-xs tracking-wide hover:bg-gray-300 rounded-md">
        <MdOutlineModeEdit className="text-sm"/>
        <button>Edit</button>
      </div>

      <div className="flex p-2 justify-start items-center gap-2 text-black text-xs tracking-wide hover:bg-gray-300 rounded-md">
        <RiDeleteBinLine className="text-red-600 text-sm"/>
        <button onClick={handleDeleteJob}>Delete</button>
      </div>

    </div>
  );
};
