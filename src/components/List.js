import Item from "./Item";

function List (){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
            <Item marca = 'fiat'/>
            <Item marca = 'ferrari' />
            <Item marca = 'gol' />
            </ul>
        </>
    )
}

export default List;