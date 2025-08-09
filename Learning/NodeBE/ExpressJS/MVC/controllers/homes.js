const registeredHomes = [];

// GET: Show add-home form
exports.getAddHome = (req, res, next) => {
  res.render('addHome', {
    pageTitle: 'Add Home to Airbnb',
    currentPage: 'addHome'
  });
};

// POST: Add a new home
exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  registeredHomes.push(req.body);

  res.render('homeAdded', {
    pageTitle: 'Home Added Successfully',
    currentPage: 'homeAdded'
  });
};

// GET: List all homes
exports.getHomes = (req, res, next) => {
  console.log('Registered Homes:', registeredHomes);
  res.render('home', {
    registeredHomes,
    pageTitle: 'Airbnb Home',
    currentPage: 'Home'
  });
};

exports.registeredHomes = registeredHomes;
