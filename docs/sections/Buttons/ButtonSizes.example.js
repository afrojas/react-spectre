const { Container, Cols, Col, Button } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <Cols>
        <Col>
            <Button lg>large button</Button>
            <Button>normal button</Button>
            <Button sm>small button</Button>
        </Col>
        <Col>
            <Button block>block button</Button>
        </Col>
    </Cols>{__codeButton}
  </Container>;

export default SAMPLE;