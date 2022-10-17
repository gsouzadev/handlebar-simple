// Imports
import express from 'express';
import { engine } from 'express-handlebars';
import chalk from 'chalk';

// Chama o express na constante app e configura a porta
const app = express();
const PORT = 3838;

// Seta as configurações do APP-EXPRESS
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'app/views');
app.use(express.static('app/public'));

// Rota base da API
app.get('/', (req, res) => {

    // Dados da página
    const data = {
        btnlinks : [
            'https://handlebarsjs.com/guide/#what-is-handlebars',
            'https://expressjs.com/pt-br/4x/api.html#express',
            'https://github.com/remy/nodemon#nodemon'
        ]
    }

    // Carrega a View
    res.render('home/index', { btnlinks : data.btnlinks})
})

// Inicia a API 
app.listen(PORT, () => {
    console.log(`\nSeu app está rodando em: ${chalk.bgCyan.black(` http://localhost:${PORT}/ `)}\n`);
})