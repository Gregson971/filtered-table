import createTable from '../js/helpers/createTable';

describe('createTable', () => {
  const userData = [
    {
      name: { first: 'John', last: 'Doe' },
      age: 30,
      eyeColor: 'blue',
      email: 'john.doe@example.com',
    },
    {
      name: { first: 'Jane', last: 'Doe' },
      age: 25,
      eyeColor: 'brown',
      email: 'jane.doe@example.com',
    },
    {
      name: { first: 'Bob', last: 'Smith' },
      age: 40,
      eyeColor: 'green',
      email: 'bob.smith@example.com',
    },
  ];

  it('should create a table with the correct headers', () => {
    const table = createTable(userData);

    expect(table).toBeDefined();
    expect(table.tagName).toEqual('TABLE');

    const headers = table.querySelectorAll('thead th');
    expect(headers).toHaveLength(5);
    expect(headers[0].textContent).toEqual('Nom');
    expect(headers[1].textContent).toEqual('Prénom');
    expect(headers[2].textContent).toEqual('Âge');
    expect(headers[3].textContent).toEqual('Couleur des yeux');
    expect(headers[4].textContent).toEqual('Email');
  });

  it('should create a table with the correct data', () => {
    const table = createTable(userData);

    const rows = table.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(3);

    const firstRow = rows[0].querySelectorAll('td');
    expect(firstRow).toHaveLength(5);
    expect(firstRow[0].textContent).toEqual('Doe');
    expect(firstRow[1].textContent).toEqual('John');
    expect(firstRow[2].textContent).toEqual('30');
    expect(firstRow[3].textContent).toEqual('blue');
    expect(firstRow[4].textContent).toEqual('john.doe@example.com');
  });
});
