import { Button } from "react-bootstrap";

export default function Boton(props) {
    return (
        <Button variant="info"> { props.texto } </Button>
    )
}