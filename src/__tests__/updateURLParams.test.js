import updateURLParams from '../js/helpers/updateURLParams';

describe('updateURLParams', () => {
  beforeEach(() => {
    // Mock the window.location object
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://localhost/test',
        pathname: '/test',
        search: '',
      },
    });

    // Mock the window.history object
    Object.defineProperty(window, 'history', {
      value: {
        replaceState: jest.fn(),
      },
    });

    // Mock the URL constructor
    window.URL = jest.fn(() => ({
      search: '',
      pathname: '/test',
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update the eyeColor filter in the URL', () => {
    const eyeColorFilter = { value: 'blue' };
    const ageRangeFilter = { value: '' };

    updateURLParams(eyeColorFilter, ageRangeFilter);

    expect(window.history.replaceState).toHaveBeenCalledTimes(1);
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/test?eyeColor=blue');
  });

  it('should update the ageRange filter in the URL', () => {
    const eyeColorFilter = { value: '' };
    const ageRangeFilter = { value: '25-35' };

    updateURLParams(eyeColorFilter, ageRangeFilter);

    expect(window.history.replaceState).toHaveBeenCalledTimes(1);
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/test?ageRange=25-35');
  });

  it('should remove the ageRange filter from the URL', () => {
    let eyeColorFilter = { value: '' };
    let ageRangeFilter = { value: '25-35' };

    updateURLParams(eyeColorFilter, ageRangeFilter);

    expect(window.history.replaceState).toHaveBeenCalledTimes(1);
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/test?ageRange=25-35');

    jest.clearAllMocks();
    ageRangeFilter = { value: '' };
    updateURLParams(eyeColorFilter, ageRangeFilter);

    expect(window.history.replaceState).toHaveBeenCalledTimes(1);
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/test?');
  });

  it('should remove the eyeColor filter from the URL', () => {
    let eyeColorFilter = { value: 'blue' };
    let ageRangeFilter = { value: '' };

    updateURLParams(eyeColorFilter, ageRangeFilter);

    expect(window.history.replaceState).toHaveBeenCalledTimes(1);
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/test?eyeColor=blue');

    jest.clearAllMocks();
    eyeColorFilter = { value: '' };
    updateURLParams(eyeColorFilter, ageRangeFilter);

    expect(window.history.replaceState).toHaveBeenCalledTimes(1);
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/test?');
  });
});
