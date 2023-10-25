// Mettre à jour les paramètres de l'URL en fonction des filtres
const updateURLParams = (eyeColorFilter, ageRangeFilter) => {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);

  if (eyeColorFilter.value) {
    params.set('eyeColor', eyeColorFilter.value);
  } else {
    params.delete('eyeColor');
  }

  if (ageRangeFilter.value) {
    params.set('ageRange', ageRangeFilter.value);
  } else {
    params.delete('ageRange');
  }

  window.history.replaceState({}, '', `${url.pathname}?${params.toString()}`);
};

export default updateURLParams;
