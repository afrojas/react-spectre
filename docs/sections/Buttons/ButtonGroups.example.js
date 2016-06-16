const { Container, Cols, Col, Button, ButtonGroup } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <header className='text-center'><h5>button groups</h5></header>
    <Cols>
      <Col>
        <ButtonGroup>
          <Button>first button</Button>
          <Button>second button</Button>
          <Button>third button</Button>
        </ButtonGroup>
      </Col>
      <Col>
        <ButtonGroup block>
          <Button primary>first button</Button>
          <Button primary>second button</Button>
          <Button primary>third button</Button>
        </ButtonGroup>
      </Col>
    </Cols>
    <Cols>
      <Col>
        <ButtonGroup>
          <Button sm>first button</Button>
          <Button sm>second button</Button>
          <Button sm>third button</Button>
        </ButtonGroup>
      </Col>
    </Cols>{__codeButton}
  </Container>;

export default SAMPLE;