const { Container, Cols, Col, FormInput, FormSelect } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
      <header className='text-center'><h5>input sizes</h5></header>
    <Cols>
      <Col><FormInput sm type='text' placeholder='Name' /></Col>
      <Col><FormInput lg type='text' placeholder='Name' /></Col>
      <Col>
        <FormSelect sm>
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </FormSelect>
        <FormSelect lg>
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </FormSelect>
      </Col>
    </Cols>{__codeButton}
  </Container>;

export default SAMPLE;