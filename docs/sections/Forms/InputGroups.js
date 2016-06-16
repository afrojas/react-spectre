import InputGroups from './InputGroups.example.js';
export default InputGroups;

export const STRING = "  <Container size='960'>\n      <header className='text-center'><h5>input groups</h5></header>\n    <Cols>\n      <Col>\n        <InputGroup>\n          <InputGroupAddon>slack.com/</InputGroupAddon>\n          <FormInput type='text' placeholder='site name' />\n        </InputGroup>\n      </Col>\n      <Col>\n        <InputGroup>\n          <FormInput type='text' placeholder='username' />\n          <InputGroupAddon>@slack.com</InputGroupAddon>\n        </InputGroup>\n      </Col>\n      <Col>\n        <InputGroup>\n          <InputGroupAddon>slack.com/</InputGroupAddon>\n          <FormInput type='text' placeholder='site name' />\n          <Button inputGroup primary>Submit</Button>\n        </InputGroup>\n      </Col>\n    </Cols>\n    <Cols>\n      <Col>\n        <InputGroup>\n          <InputGroupAddon sm>slack.com/</InputGroupAddon>\n          <FormInput sm type='text' placeholder='site name' />\n        </InputGroup>\n      </Col>\n      <Col>\n        <InputGroup>\n          <FormInput lg type='text' placeholder='username' />\n          <InputGroupAddon lg>@slack.com</InputGroupAddon>\n        </InputGroup>\n      </Col>\n      <Col></Col>\n    </Cols>\n  </Container>";