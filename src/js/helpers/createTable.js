const createTable = (datas) => {
  const table = document.createElement('table');

  table.appendChild(createTableHeader());
  table.appendChild(createTableBody(datas));

  return table;
};

const createTableHeader = () => {
  const tableHeader = document.createElement('thead');

  tableHeader.innerHTML = `
    <tr>
      <th>Nom</th>
      <th>Prénom</th>
      <th>Âge</th>
      <th>Couleur des yeux</th>
      <th>Email</th>
      <th>Téléphone</th>
      <th>Entreprise</th>
    </tr>
  `;

  return tableHeader;
};

const createTableBody = (datas) => {
  const tableBody = document.createElement('tbody');

  tableBody.innerHTML = datas
    .map(
      (data, index) => `
      <tr key=${index}>
        <td>${data.name.last}</td>
        <td>${data.name.first}</td>
        <td>${data.age}</td>
        <td>${data.eyeColor}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>${data.company}</td>
      </tr>
    `
    )
    .join('');

  return tableBody;
};

export default createTable;
