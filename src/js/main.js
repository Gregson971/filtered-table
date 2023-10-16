import createTable from './helpers/createTable.js';
import filterData from './helpers/filterData.js';
import updateURLParams from './helpers/updateURLParams.js';

import usersData from '../data/datas.json';

import '../css/style.scss';

function main() {
  const usersContainer = document.getElementById('container');
  const eyeColorFilter = document.getElementById('eyeColorFilter');
  const ageRangeFilter = document.getElementById('ageRangeFilter');
  const applyFiltersButton = document.getElementById('applyFilters');

  const filteredData = filterData(usersData);
  const table = createTable(filteredData);

  usersContainer.appendChild(table);

  // Écoutez l'événement du bouton pour appliquer les filtres et mettre à jour l'URL
  applyFiltersButton.addEventListener('click', () => {
    updateURLParams(eyeColorFilter, ageRangeFilter);
    const filteredData = filterData(usersData);
    const table = createTable(filteredData);
    usersContainer.innerHTML = '';
    usersContainer.appendChild(table);
  });
}

// Appeler la fonction principale lorsque le document est prêt
document.addEventListener('DOMContentLoaded', main);
