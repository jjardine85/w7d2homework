const PubSub = require('../helper/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:data', this.data);

  PubSub.subscribe('Select:select', (events) => {
    const selected = events.detail;
    this.publishFamilyDetail(selected);
  });
};

InstrumentFamilies.prototype.publishFamilyDetail = function (selected) {
  const selectedFamily = this.data[selected];
  PubSub.publish('InstrumentFamilies:selection', selectedFamily)
};

module.exports = InstrumentFamilies;
