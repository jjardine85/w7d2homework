const PubSub = require('../helper/pub_sub.js');

const InstrumentView = function(container) {
  this.container = container;
};

InstrumentView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selection', (events) => {
    const from = events.detail;
    this.render(from);
  });
};

InstrumentView.prototype.render = function (family) {
  this.container.innerHTML = '';

  const name = this.createElement('h2', family.name);
  this.container.appendChild(name);

  const description = this.createElement('p', family.description);
  this.container.appendChild(description);

  const title = this.createElement('h3', 'Instruments include:');
  this.container.appendChild(title);

  const list = this.createInstrumentList(family.instruments);
  this.container.appendChild(list);
};

InstrumentView.prototype.createElement = function (type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
};

InstrumentView.prototype.createInstrumentList = function (instruments) {
  const list = document.createElement('ul');

  instruments.forEach((instrument) => {
    const item = document.createElement('li');
    item.textContent = instrument;
    list.appendChild(item);
  });

  return list;
};

module.exports = InstrumentView;
