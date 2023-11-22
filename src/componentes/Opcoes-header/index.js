import styled from 'styled-components'

const OpcoesGeral = styled.ul`
    display: flex;
`

const OpcoesGeralLi = styled.li`
    min-width: 120px;
    font-size: 20px;
    display: flex ;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    text-transform: uppercase;
`

const textoOpcoes =['Categorais', 'Favoritos', 'Minha Estante', 'Novidades']

function OpcoesHeader() {
    return (
        <OpcoesGeral>
            {textoOpcoes.map((texto) => (
                <OpcoesGeralLi><p>{texto}</p></OpcoesGeralLi>
            ))}
        </OpcoesGeral>
    )
}

export default OpcoesHeader