// objective: replace the placeholder values ("loading") with actual data values for each order, using JS to interact with the DOM, by using the document.querySelector() to select the HTML element to manipulate

const order1 = document.querySelector('[data-key="order1"]');
const biscuitsCount1 = order1.querySelector('.biscuits .count');
const donutsCount1 = order1.querySelector('.donuts .count');
const pancakesCount1 = order1.querySelector('.pancakes .count');
const status1 = order1.querySelector('.status dd');

biscuitsCount1.textContent = order1.dataset.biscuits;
donutsCount1.textContent = order1.dataset.donuts;
pancakesCount1.textContent = order1.dataset.pancakes;
status1.textContent = order1.dataset.delivered === "true" ? "Delivered" : "Pending";

const order2 = document.querySelector('[data-key="order2"]');
const biscuitsCount2 = order2.querySelector('.biscuits .count');
const donutsCount2 = order2.querySelector('.donuts .count');
const pancakesCount2 = order2.querySelector('.pancakes .count');
const status2 = order2.querySelector('.status dd');

biscuitsCount2.textContent = order2.dataset.biscuits;
donutsCount2.textContent = order2.dataset.donuts;
pancakesCount2.textContent = order2.dataset.pancakes;
status2.textContent = order2.dataset.delivered === "true" ? "Delivered" : "Pending";

const order3 = document.querySelector('[data-key="order3"]');
const biscuitsCount3 = order3.querySelector('.biscuits .count');
const donutsCount3 = order3.querySelector('.donuts .count');
const pancakesCount3 = order3.querySelector('.pancakes .count');
const status3 = order3.querySelector('.status dd');

biscuitsCount3.textContent = order3.dataset.biscuits;
donutsCount3.textContent = order3.dataset.donuts;
pancakesCount3.textContent = order3.dataset.pancakes;
status3.textContent = order3.dataset.delivered === "true" ? "Delivered" : "Pending";

