export default function ItemListContainer(props) {
    return (
        <div className='itemListContainer'>
            <h3>El siguiente texto fue pasado al ItemListContainer mediante props</h3>
            <h4> { props.texto } </h4>


        </div>
    )
}