const { Container, Cols, Col, FormInput, InputGroup, InputGroupAddon, Button } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
      <header className='text-center'><h5>input groups</h5></header>
    <Cols>
      <Col>
        <InputGroup>
          <InputGroupAddon>slack.com/</InputGroupAddon>
          <FormInput type='text' placeholder='site name' />
        </InputGroup>
      </Col>
      <Col>
        <InputGroup>
          <FormInput type='text' placeholder='username' />
          <InputGroupAddon>@slack.com</InputGroupAddon>
        </InputGroup>
      </Col>
      <Col>
        <InputGroup>
          <InputGroupAddon>slack.com/</InputGroupAddon>
          <FormInput type='text' placeholder='site name' />
          <Button inputGroup primary>Submit</Button>
        </InputGroup>
      </Col>
    </Cols>
    <Cols>
      <Col>
        <InputGroup>
          <InputGroupAddon sm>slack.com/</InputGroupAddon>
          <FormInput sm type='text' placeholder='site name' />
        </InputGroup>
      </Col>
      <Col>
        <InputGroup>
          <FormInput lg type='text' placeholder='username' />
          <InputGroupAddon lg>@slack.com</InputGroupAddon>
        </InputGroup>
      </Col>
      <Col></Col>
    </Cols>{__codeButton}
  </Container>;

export default SAMPLE;