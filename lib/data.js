// const propertyData = [
//     {
//       id: 1,
//       address: "123 Main Street",
//       location: "Umeå A",
//       rentPerMonth: 1200,
//       spaceNumber: "A-101",
//       contractDate: "2022-01-15",
//       available: true,
//       pendingForApproval: false,
//     },
//     {
//       id: 2,
//       address: "456 Skolgatan",
//       location: "Umeå B",
//       rentPerMonth: 900,
//       spaceNumber: "B-205",
//       contractDate: "2021-11-22",
//       available: false,
//       pendingForApproval: false,
//     },
//     {
//       id: 3,
//       address: "789 Ershboda",
//       location: "Umeå C",
//       rentPerMonth: 1500,
//       spaceNumber: "C-301",
//       contractDate: "2023-05-10",
//       available: true,
//       pendingForApproval: false,
//     },
//     {
//       id: 4,
//       address: "111 Ålidhem",
//       location: "Umeå A",
//       rentPerMonth: 800,
//       spaceNumber: "A-202",
//       contractDate: "2022-08-05",
//       available: false,
//       pendingForApproval: false,
//     },
//     {
//       id: 5,
//       address: "222 Stan",
//       location: "Umeå D",
//       rentPerMonth: 1100,
//       spaceNumber: "D-105",
//       contractDate: "2023-03-20",
//       available: true,
//       pendingForApproval: false,
//     },
//     {
//       id: 6,
//       address: "333 Histörigränd",
//       location: "Umeå E",
//       rentPerMonth: 1300,
//       spaceNumber: "E-403",
//       contractDate: "2023-02-18",
//       available: true,
//       pendingForApproval: false,
//     },
//     {
//       id: 7,
//       address: "444 ABC",
//       location: "City F",
//       rentPerMonth: 950,
//       spaceNumber: "F-303",
//       contractDate: "2021-09-12",
//       available: false,
//       pendingForApproval: false,
//     },
//     {
//       id: 8,
//       address: "555 DEF",
//       location: "Umeå G",
//       rentPerMonth: 1200,
//       spaceNumber: "B-402",
//       contractDate: "2022-12-01",
//       available: true,
//       pendingForApproval: false,
//     },
//     {
//       id: 9,
//       address: "666 Umeå I",
//       location: "Umeå I",
//       rentPerMonth: 1400,
//       spaceNumber: "I-101",
//       contractDate: "2023-06-25",
//       available: false,
//       pendingForApproval: false,
//     },
//     {
//       id: 10,
//       address: "777 Umeå",
//       location: "Umeå H",
//       rentPerMonth: 1000,
//       spaceNumber: "A-401",
//       contractDate: "2023-04-05",
//       available: true,
//       pendingForApproval: false,
//     },
//   ];
  
  export const columns = [
    {
      header: "ID",
      field: "id",
    },
    {
      header: "Address",
      field: "address",
    },
    {
      header: "Location",
      field: "location",
    },
    {
      header: "Rent/Month",
      field: "rentPerMonth",
    },
    {
      header: "Space Number",
      field: "spaceNumber",
    },
    {
      header: "Contract Date",
      field: "contractDate",
    },
    {
      header: "Available",
      field: "available",
    },
    // {
    //   Header: "Actions",
    //   field: "actions",
    //   Cell: ({ row }) => (
    //     <div className="flex">
    //       <button
    //         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    //         // onClick={() => handleEdit(row.original.id)}
    //       >
    //         Edit
    //       </button>
    //       <button
    //         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    //         // onClick={() => handleDelete(row.original.id)}
    //       >
    //         Delete
    //       </button>
    //       <button
    //         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    //         // onClick={() => handleSendForApproval(row.original.id)} // Handle send for approval action
    //       >
    //         Send For Approval
    //       </button>
    //     </div>
    //   ),
    // },
  ];
  export default propertyData;
  