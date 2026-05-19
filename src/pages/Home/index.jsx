import { useState } from 'react'
import './style.css'

function Home() {

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [resultado, setResultado] = useState()

    function somar() {

        setResultado(Number(num1) + Number(num2))

    }

    function subtrair() {

        setResultado(Number(num1) - Number(num2))

    }

    function multiplicar() {

        setResultado(Number(num1) * Number(num2))

    }

    function dividir() {

        setResultado(Number(num1) / Number(num2))

    }

    return (
        <>

            <br />
            <label>Digite um número</label>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <label>Digite outro número</label>
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <br />
            <button onClick={somar}>Somar</button>
            <br />
            <button onClick={subtrair}>Subtrair</button>
            <br />
            <button onClick={multiplicar}>Multiplicar</button>
            <br />
            <button onClick={dividir}>Dividir</button>

            <p>{resultado}</p>

        </>
    )
}
export default Home