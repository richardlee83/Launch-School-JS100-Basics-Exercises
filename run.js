let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy = energy.slice(1).concat(['geothermal']);
console.log(energy);    // [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]