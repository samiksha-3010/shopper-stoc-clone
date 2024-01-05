
// import React, { useState } from 'react'

// const PaginationExample = () => {


//         const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
//   const itemsPerPage = 5;

//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//   return (
//     <div>
//   <ul>
// //         {currentItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <div>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button key={page} onClick={() => handlePageChange(page)}>
//             {page}
//           </button>
//         ))}
//       </div>

//     </div>
//   )
// }

// export default PaginationExample