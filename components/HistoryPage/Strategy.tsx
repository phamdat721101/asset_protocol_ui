import Down from "@/icons/Down";

const Strategy = () => {
  return (
    <>
      <div className="flex gap-[18px] py-6">
        <span className="text-xl text-gray-800 font-semibold">
          Strategy Management
        </span>
        <span className="px-3 bg-blue-100 font-medium text-blue-600 text-base leading-7 rounded-[7px]">
          Current Strategy
        </span>
        <span className="px-3 bg-[#E0E9F4] font-medium text-[#90A3BF] text-base leading-7 rounded-[7px]">
          Historical Strategy
        </span>
      </div>
      <div className="flex justify-between">
        <div className="w-[18%]">
          <span className="font-normal text-sm text-gray-800 leading-normal">
            Strategy Status
          </span>
          <div className="flex items-center justify-between mt-1 w-full h-[52px] px-3 bg-white flex font-normal text-base text-gray-800 border border-[#C3D4E9] rounded-lg">
            <span>All</span>
            <Down />
          </div>
        </div>
        <div className="w-[18%]">
          <span className="font-normal text-sm text-gray-800 leading-normal">
            Trading Currency
          </span>
          <div className="flex items-center justify-between mt-1 w-full h-[52px] px-3 bg-white flex font-normal text-base text-gray-800 border border-[#C3D4E9] rounded-lg">
            <span>All</span>
            <Down />
          </div>
        </div>
        <div className="w-[18%]">
          <span className="font-normal text-sm text-gray-800 leading-normal">
            Pricing Currency
          </span>
          <div className="flex items-center justify-between mt-1 w-full h-[52px] px-3 bg-white flex font-normal text-base text-gray-800 border border-[#C3D4E9] rounded-lg">
            <span>All</span>
            <Down />
          </div>
        </div>
        <div>
          <span className="font-normal text-sm text-gray-800 leading-normal">
            Date
          </span>
          <div className="flex gap-2.5">
            <div className="flex items-center justify-between mt-1 w-[210px] h-[52px] px-3 bg-white flex font-normal text-base text-gray-800 border border-[#C3D4E9] rounded-lg">
              <span>Start day</span>
              <Down />
            </div>
            <div className="flex items-center justify-between mt-1 w-[210px] h-[52px] px-3 bg-white flex font-normal text-base text-gray-800 border border-[#C3D4E9] rounded-lg">
              <span>End day</span>
              <Down />
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <table className="w-full bg-white text-left  border border-[#C3D4E9]">
          <thead className="text-base	font-medium	text-gray-800 tracking-tight">
            <tr>
              <th className="pl-1.5 py-6 border-b border-b-[#C3D4E9]">Date</th>
              <th className="py-6 border-b border-b-[#C3D4E9]">Trading pair</th>
              <th className="py-6 border-b border-b-[#C3D4E9]">
                Strategy Type
              </th>
              <th className="py-6 border-b border-b-[#C3D4E9]">
                Annualized Yield
              </th>
              <th className="py-6 border-b border-b-[#C3D4E9]">
                Investment Amount
              </th>
              <th className="py-6 border-b border-b-[#C3D4E9]">Total Income</th>
              <th className="py-6 border-b border-b-[#C3D4E9]">
                {"Number of runs/time"}
              </th>
              <th className="py-6 border-b border-b-[#C3D4E9]">
                Strategy Status
              </th>
              <th className="pr-1.5 py-6 text-right border-b border-b-[#C3D4E9]">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-1.5 py-6 border-b border-b-[#C3D4E9]">Date</td>
              <td className="py-6 border-b border-b-[#C3D4E9]">Trading pair</td>
              <td className="py-6 border-b border-b-[#C3D4E9]">
                Strategy Type
              </td>
              <td className="py-6 border-b border-b-[#C3D4E9]">
                Annualized Yield
              </td>
              <td className="py-6 border-b border-b-[#C3D4E9]">
                Investment Amount
              </td>
              <td className="py-6 border-b border-b-[#C3D4E9]">Total Income</td>
              <td className="py-6 border-b border-b-[#C3D4E9]">
                {"Number of runs/time"}
              </td>
              <td className="py-6 border-b border-b-[#C3D4E9]">
                Strategy Status
              </td>
              <td className="pr-1.5 py-6 text-right border-b border-b-[#C3D4E9]">
                Operation
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Strategy;
