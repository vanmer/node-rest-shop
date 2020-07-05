const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'HANDLING GET request to /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'HANDLING POST request to /products'
  });
});

router.get('/:productId', (req, res, next) => {
  const id = re.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    })
  }
});

module.exports = router;
