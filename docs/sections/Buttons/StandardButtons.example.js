const { Container, Cols, Col, Button } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <Cols>
        <Col>
            <Button>default button</Button>
            <Button loading>default button</Button>
        </Col>
        <Col>
            <Button primary>primary button</Button>
            <Button primary loading>primary button</Button>
        </Col>
        <Col>
            <Button link>link button</Button>
            <Button link loading>link button</Button>
        </Col>
    </Cols>{__codeButton}
  </Container>;

export default SAMPLE;