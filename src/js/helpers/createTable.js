const createTable = (datas) => {
  const table = document.createElement('table');

  table.innerHTML = `
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Âge</th>
        <th>Couleur des yeux</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      ${datas
        .map(
          (data, index) => `
        <tr key=${index}>
          <td>${data.name.last}</td>
          <td>${data.name.first}</td>
          <td>${data.age}</td>
          <td>${data.eyeColor}</td>
          <td>${data.email}</td>
        </tr>
      `
        )
        .join('')}
    </tbody>
  `;

  return table;
};

export default createTable;
