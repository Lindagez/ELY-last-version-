const fetchDataButton = document.getElementById('fetch-data-button');
const fetchDataButton2 = document.getElementById('fetch-data-button');
const fetchDataButton3 = document.getElementById('fetch-data-button');
const dataContainer = document.getElementById('data-container');
const dataContainer2 = document.getElementById('data-container');
const dataContainer3 = document.getElementById('data-container');

fetchDataButton.addEventListener('click', () => {
  // Send an API request to the server
  fetch('http://localhost:5000/api/products/')
    .then(response => response.json())
    .then(data => {
      // Display the data in the HTML
      const dataHtml = `<p>Users : ${JSON.stringify(data)}</p>`;

      dataContainer.innerHTML = dataHtml;
      
    })
    .catch(error => {
      // Display an error message in the HTML
      const errorHtml = `<p>Error: ${error.message}</p>`;
      dataContainer.innerHTML = errorHtml;
    });
});

// fetchDataButton2.addEventListener('click', () => {
//     // Send an API request to the server
//     fetch('http://localhost:5000/api/users/')
//       .then(response => response.json())
//       .then(data => {
//         // Display the data in the HTML
//         const dataHtml = `<p>Products : ${JSON.stringify(data)}</p>`;
//         dataContainer2.innerHTML = dataHtml;
//       })
//       .catch(error => {
//         // Display an error message in the HTML
//         const errorHtml = `<p>Error: ${error.message}</p>`;
//         dataContainer2.innerHTML = errorHtml;
//       });
//   });

//   fetchDataButton3.addEventListener('click', () => {
//     // Send an API request to the server


//     fetch(`http://localhost:5000/api/users/{id}`,{method: 'GET'})
//       .then(response => response.json())
//       .then(data => {
//         // Display the data in the HTML
//         const dataHtml = `<p>Users By ID : ${JSON.stringify(data)}</p>`;
//         dataContainer3.innerHTML = dataHtml;
//       })
//       .catch(error => {
//         // Display an error message in the HTML
//         const errorHtml = `<p>Error: ${error.message}</p>`;
//         dataContainer3.innerHTML = errorHtml;
//       });
//   });