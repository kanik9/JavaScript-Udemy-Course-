const costumers = ['Kanik', 'Ashu', 'Ram'];
const active = ['Kanik', 'Ashu'];

// Like Python this does not work.
//const inactiveCostumers = costumers - active; // this return NAN

const inactiveCostumers =_.difference(costumers, active);

console.log(inactiveCostumers);