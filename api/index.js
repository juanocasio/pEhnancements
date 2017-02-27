import express from 'express';
import data from '../src/data';

const router = express.Router();

router.get('/profield', (req, res) => {
  res.send({ profield: data.profield });
});

export default router;