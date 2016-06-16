const { Container, Col, Form, FormGroup, FormLabel, FormInput, FormRadio, FormSelect, FormSwitch, FormCheckbox, Button } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <Form horizontal>
      <FormGroup>
        <Col xs='3'>
          <FormLabel for='input-example-4'>Name</FormLabel>
        </Col>
        <Col xs='9'>
          <FormInput type='text' id='input-example-4' placeholder='Name' />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col xs='3'>
          <FormLabel for='input-example-5'>Email</FormLabel>
        </Col>
        <Col xs='9'>
          <FormInput type='email' id='input-example-5' placeholder='Email' />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col xs='3'>
          <FormLabel>Gender</FormLabel>
        </Col>
        <Col xs='9'>
          <FormRadio name='gender'>Male</FormRadio>
          <FormRadio name='gender' checked>Female</FormRadio>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col xs='3'></Col>
        <Col xs='9'>
          <FormSelect>
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
          </FormSelect>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col xs='3'></Col>
        <Col xs='9'>
          <FormSwitch>Send me emails with news and tips</FormSwitch>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col xs='3'>
          <FormLabel for='input-example-6'>Message</FormLabel>
        </Col>
        <Col xs='9'>
          <FormInput textarea id='input-example-6' placeholder='Textarea' row='3' />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col xs='3'></Col>
        <Col xs='9'>
          <FormCheckbox>Remember me</FormCheckbox>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col xs='3'></Col>
        <Col xs='9'>
          <Button primary>Submit</Button>
          <Button link type='reset'>Cancel</Button>
        </Col>
      </FormGroup>
    </Form>{__codeButton}
  </Container>;

export default SAMPLE;