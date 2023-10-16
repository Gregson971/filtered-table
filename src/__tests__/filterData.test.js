import filterData from '../js/helpers/filterData';

describe('filterData', () => {
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

  beforeEach(() => {
    const urlParams = new URLSearchParams('?eyeColor=blue&ageRange=25-35');
    Object.defineProperty(window, 'location', {
      value: {
        search: urlParams.toString(),
      },
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: '',
      },
    });
  });

  it('should filter by eye color and age range', () => {
    const filteredData = filterData(userData);

    expect(filteredData).toHaveLength(1);
    expect(filteredData[0].name.first).toEqual('John');
  });

  it('should return all data if no filters are applied', () => {
    window.location.search = '';

    const filteredData = filterData(userData);

    expect(filteredData).toHaveLength(3);
  });
});
