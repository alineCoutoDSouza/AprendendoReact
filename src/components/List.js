import Item from "./Item";

function List (){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
            <Item marca = 'fiat' ano_lancamento={1985}/>
            <Item marca = 'ferrari' ano_lancamento={1877} />
            <Item marca = 'gol' ano_lancamento={1999} />
            </ul>
        </>
    )
}

export default List;