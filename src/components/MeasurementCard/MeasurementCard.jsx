import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'

export default function MeasurementCard (){

    const measurements = [
        {
            measurementName: "Frequency", 
            description: "The event and rate recording method that counts the number of times a behavior happens within a specific time frame."
        },

        {
            measurementName: "Duration", 
            description: "The time length of how long a behavior last."
        },
        
        {
            measurementName: "Latency Recording",
            description: "Measuring the time that it takes for a behavior to occur after a verbal cue or an event"
        }, 

        {
            measurementName: "Interval Recording",
            description: "Measuring when a behavior occurs or doesn't occur during specified time frames."
        }
    ]

    return (
    <>
        <Stack>
            <br />
            <Card className="text-left">
                {measurements.map((measurement) => (
                <>
                    <Card.Header>{measurement.measurementName}</Card.Header>
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </>
                ))}
            </Card>
            <br />
        </Stack>
    </>
    )
}