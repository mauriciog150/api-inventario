const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Rutas
app.use(require('./routes/producto'));
app.use(require('./routes/categorias'));
app.use(require('./routes/users'));
app.use(require('./routes/almacen'));
app.use(require('./routes/ciudad'));
app.use(require('./routes/cliente'));
app.use(require('./routes/compañia'));
app.use(require('./routes/proveedores'));
app.use(require('./routes/roles'));
app.listen(8000);
console.log('Server on port', 8000);