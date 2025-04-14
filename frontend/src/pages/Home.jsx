import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [codigo, setCodigo] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleValida = async () => {
        const res = await axios.post('http://localhost:3000/valida-boleto', { codigo });
        setResultado(res.data);
    };

    return (
        <div>
            <input onChange={e => setCodigo(e.target.value)} placeholder="Digite o código" />
            <button onClick={handleValida}>Validar</button>
            {resultado && <pre>{JSON.stringify(resultado, null, 2)}</pre>}
        </div>
    );
}

