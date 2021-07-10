import { Button } from "react-bootstrap";

export default function Boton(props) {
    return (
        <Button variant={ props.variante }> { props.texto } </Button>
    )
}