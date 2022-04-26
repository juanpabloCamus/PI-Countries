const { Router } = require('express');
const server = require('../app');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries');
const activities = require('./activities')

const router = Router();

router.get('/', (req, res) => {
    res.send('home')
})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries);
router.use('/activities', activities);

module.exports = router;
