const router = require('express');
const app = router();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>HOLA MUNDO UWU</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor inicializado en http://localhost:${PORT}`);
});