import styled from 'styled-components'
import Input from '../Input'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
color: #FFF;
text-align: center;
padding: 90px 0;
height: 280px;
width: 100%;
`

const Titulo = styled.h2`
color: white;
font-size: 36px;
text-align: center;
width: 100%;
`

const SubTitulo = styled.h3`
font-size: 18px;
font-weight: 500;
margin-bottom: 30px;
color: grey
`

const Resultado = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
cursor: pointer;
p {
    width: 200px;
}
img {
    width: 100px;
}
&:hover {
    border: 1px solid white;
}
`

function Pesquisa() {
    const [livrosPesquisados, setlivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde Começar</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
            <Input
                placeholder="Escreva sua proxima Leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro =>
                        livro.nome.includes(textoDigitado))
                    setlivrosPesquisados(resultadoPesquisa)
                }}>
            </Input>

            {livrosPesquisados.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </Resultado>
            ))}
            
        </PesquisaContainer>
    )
}
export default Pesquisa