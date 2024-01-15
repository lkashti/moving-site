import React, { useState, useEffect } from "react";

const ItemTable = () => {
  const TABLE_HEAD = ["Item Name", "Weight", "Width", "Height", "Depth"];
  const inputClass =
    "rounded w-full py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline";
  const [addingNew, setAddingNew] = useState(false);
  const [formData, setFormData] = useState({
    item_name: "",
    weight: 0,
    width: 0,
    height: 0,
    depth: 0,
  });

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

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("item_list"));
    data && setItemList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    sessionStorage.setItem(
      "item_list",
      JSON.stringify([...itemList, formData]),
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.querySelector("#form-controls").classList.remove("hidden");
    setItemList([...itemList, formData]);
    setAddingNew(false);
  };

  return (
    <>
      {!addingNew ? (
        <>
          <div className="mb-5 text-center font-[Poppins] text-2xl font-bold text-gray-700">
            What are we delivering?
          </div>
          <div className="no-scrollbar max-h-[60vh] overflow-auto rounded-lg shadow-md">
            <table className="w-full table-auto bg-gray-100 bg-opacity-60 text-left">
              <thead className="z-auto">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-400 bg-zinc-300/80 px-2 py-4"
                  >
                    <span className="font-bold leading-none text-blue-600 opacity-70">
                      {head}
                    </span>
                  </th>
                ))}
              </thead>
              <tbody>
                {itemList.map(
                  ({ item_name, weight, width, height, depth }, index) => {
                    const classes =
                      "p-4 border-b font-semibold border-blue-400";
                    return (
                      <tr key={index}>
                        <td className={classes}>{item_name}</td>
                        <td className={classes}>{weight}</td>
                        <td className={classes}>{width}</td>
                        <td className={classes}>{height}</td>
                        <td className={classes}>{depth}</td>
                      </tr>
                    );
                  },
                )}
                <tr>
                  <td colSpan="5" className="p-4 font-bold text-blue-600">
                    <button className="underline-offset-2 md:hover:underline"onClick={() => setAddingNew(!addingNew)}>
                      + Add new item
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        document.querySelector("#form-controls").classList.add("hidden") || (
          <>
            <div className="mb-5 text-center font-[Poppins] text-2xl font-bold text-gray-700">
              Fill in item properties or take a picture:
            </div>
            <div className="flex md:flex-row flex-col gap-2">
              <input
                placeholder="Item Name"
                className={inputClass}
                onChange={handleInputChange}
                name="item_name"
                type="text"
              />
              <input
                placeholder="Weight (Kg)"
                className={inputClass}
                onChange={handleInputChange}
                name="weight"
                type="number"
                min="0"
              />
              <input
                placeholder="Width (cm)"
                className={inputClass}
                onChange={handleInputChange}
                name="width"
                type="number"
                min="0"
              />
              <input
                placeholder="Height (cm)"
                className={inputClass}
                onChange={handleInputChange}
                name="height"
                type="number"
                min="0"
              />
              <input
                placeholder="Depth (cm)"
                className={inputClass}
                onChange={handleInputChange}
                name="depth"
                type="number"
                min="0"
              />
              <button
                onClick={handleSubmit}
                className="rounded bg-zinc-200 px-6 py-2 font-[Poppins] font-semibold text-blue-500 ring-1 duration-200 hover:bg-blue-300 hover:text-slate-200 hover:ring-0"
              >
                Add
              </button>
            </div>
          </>
        )
      )}
    </>
  );
};

export default ItemTable;
