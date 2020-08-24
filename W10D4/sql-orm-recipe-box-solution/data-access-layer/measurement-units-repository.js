let MeasurementUnit;
let moduleError;

try {
  const db = require('../models');
  ({ MeasurementUnit } = db);
  if (MeasurementUnit === undefined) {
    moduleError = 'It looks like you need to generate the Recipe model.';
  }
} catch (e) {
  console.error(e);
  if (e.message.includes('Cannot find module')) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/



async function getMeasurementUnits() {
  // Use the findAll method of the MeasurementUnit object to return the
  // measurement units.
  // Use the options for findAll to order them by name
  //
  // Docs: https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
  return await MeasurementUnit.findAll({
    order: ['name']
  });
}



/* Don't change code below this line ******************************************/
module.exports = {
  getMeasurementUnits,
  loadingDbError: moduleError,
};
