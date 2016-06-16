const { Container, Form, FormGroup, FormLabel, FormInput, FormRadio, FormSelect, FormSwitch, FormCheckbox, Button } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <Form>
      <FormGroup>
        <FormLabel for='input-example-1'>Name</FormLabel>
        <FormInput danger type='text' id='input-example-1' placeholder='Name' />
      </FormGroup>
      <FormGroup success>
        <FormLabel for='input-example-2'>Email</FormLabel>
        <FormInput type='email' id='input-example-2' placeholder='Email' />
      </FormGroup>
      <FormGroup>
        <FormLabel>Gender</FormLabel>
        <FormRadio name='gender'>Male</FormRadio>
        <FormRadio name='gender' checked>Female</FormRadio>
      </FormGroup>
      <FormGroup>
        <FormSelect>
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </FormSelect>
      </FormGroup>
      <FormGroup>
        <FormSwitch>Send me emails with news and tips</FormSwitch>
      </FormGroup>
      <FormGroup>
        <FormLabel for='input-example-3'>Message</FormLabel>
        <FormInput textarea id='input-example-3' placeholder='Textarea' row='3' />
      </FormGroup>
      <FormGroup>
        <FormCheckbox>Remember me</FormCheckbox>
      </FormGroup>
      <FormGroup>
        <Button primary>Submit</Button>
        <Button link type='reset'>Cancel</Button>
      </FormGroup>
    </Form>{__codeButton}
  </Container>;

export default SAMPLE;