const PubSub = require('../helper/pub_sub.js');

const Select = function (item) {
  this.item = item
}

Select.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:data', (event) => {
    const allFromFamilies = event.detail;
    this.populate(allFromFamilies);
  });

this.item.addEventListener('change', (events) => {
    const selectedItem = events.target.value;
    PubSub.publish('Select:select', selectedItem);
  });
};

Select.prototype.populate = function (data) {
  data.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.item.appendChild(option);
  });
};

module.exports = Select;
