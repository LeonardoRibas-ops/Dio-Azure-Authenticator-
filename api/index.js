const express = require('express');
const app = express();
app.use(express.json());

app.post('/valida-boleto', (req, res) => {
    const { codigo } = req.body;

    if (!codigo || codigo.length !== 47) {
        return res.status(400).json({ error: 'Código inválido' });
    }

    // Simulação da validação e extração
    const valor = codigo.slice(37, 47);
    const vencimento = '2025-05-10'; // lógica simulada

    res.json({ valido: true, valor, vencimento });
});

app.listen(3000, () => console.log('API rodando na porta 3000'));
