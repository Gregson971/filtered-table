const filterData = (userData) => {
  const urlParams = new URLSearchParams(window.location.search);
  const eyeColor = urlParams.get('eyeColor');
  const ageRange = urlParams.get('ageRange');

  if (Boolean(eyeColor) && !Boolean(ageRange)) {
    return userData.filter((user) => user.eyeColor === eyeColor);
  }

  if (Boolean(ageRange) && !Boolean(eyeColor)) {
    const [min, max] = ageRange.split('-');
    return userData.filter((user) => user.age >= min && user.age <= max);
  }

  if (Boolean(eyeColor && ageRange)) {
    const [min, max] = ageRange.split('-');
    return userData.filter((user) => user.eyeColor === eyeColor && user.age >= min && user.age <= max);
  }

  return userData;
};

export default filterData;
