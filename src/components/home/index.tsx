import { Button, Container } from "@mui/material"

export default () => {
    return (
        <Container>
            <Button variant="contained" onClick={() => { console.log("Hello World") }}>
                Hello World
            </Button>
        </Container>
    )
}