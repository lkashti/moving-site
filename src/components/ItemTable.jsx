import React, { useState } from "react";

const ItemTable = () => {
  const TABLE_HEAD = ["Item Name", "Weight", "Width", "Height", "Depth"];
  const [addingNew, setAddingNew] = useState(false);
  const [itemList, setItemList] = useState([
    {
      item_name: "Sofa",
      weight: 100,
      width: 80,
      height: 36,
      depth: 36,
    },
    {
      item_name: "Bed",
      weight: 150,
      width: 60,
      height: 24,
      depth: 80,
    },
    {
      item_name: "Table",
      weight: 50,
      width: 40,
      height: 30,
      depth: 40,
    },
    {
      item_name: "Chair",
      weight: 20,
      width: 20,
      height: 36,
      depth: 20,
    },
    {
      item_name: "Desk",
      weight: 75,
      width: 48,
      height: 30,
      depth: 24,
    },
    {
      item_name: "Bookshelf",
      weight: 80,
      width: 36,
      height: 72,
      depth: 12,
    },
    {
      item_name: "Dresser",
      weight: 120,
      width: 60,
      height: 36,
      depth: 24,
    },
    {
      item_name: "Coffee Table",
      weight: 40,
      width: 36,
      height: 18,
      depth: 36,
    },
    {
      item_name: "Wardrobe",
      weight: 200,
      width: 72,
      height: 84,
      depth: 24,
    },
    {
      item_name: "Dining Table",
      weight: 100,
      width: 72,
      height: 30,
      depth: 42,
    },
  ]);

  return (
    <>
      <div className="mb-5 text-center font-[Poppins] text-2xl font-bold text-gray-700">
        What are we delivering?
      </div>
      <div className=" no-scrollbar max-h-96 w-full overflow-auto rounded-lg shadow-md">
        <table className="w-full table-auto bg-gray-100 bg-opacity-30 text-left">
          <thead className="z-auto">
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-400 bg-blue-100 px-2 py-4"
              >
                <span className="font-semibold leading-none text-indigo-600 opacity-70">
                  {head}
                </span>
              </th>
            ))}
          </thead>
          <tbody>
            {itemList.map(
              ({ item_name, weight, width, height, depth }, index) => {
                const isLast = index === itemList.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-400";
                return (
                  <tr key={item_name}>
                    <td className={classes}>{item_name}</td>
                    <td className={classes}>{weight}</td>
                    <td className={classes}>{width}</td>
                    <td className={classes}>{height}</td>
                    <td className={classes}>{depth}</td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemTable;
