const InstrumentFamilies = require('./models/instrument_families.js')
const InstrumentView = require('./views/instrument_view.js');
const Select = require('./views/select.js');
const instrumentFamilyData = require('./data/instrument_family_data.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectIt = document.querySelector('select#instrument-families');
  const familiesDropdown = new Select(selectIt);
  familiesDropdown.bindEvents();

  const all = document.querySelector('div#instrument-family');
  const instrumentView = new InstrumentView(all);
  instrumentView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();
});
