const { Container, Cols, Col, Button, Icon } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <Cols>
      <Col>
        <Button lg primary><Icon name='markunread' /> large</Button>
        <Button primary><Icon name='markunread' /> normal</Button>
        <Button sm primary><Icon name='markunread' /> small</Button>
      </Col>
    </Cols>
    <section className='notes'>
      <p><strong>Icons</strong> can be correctly rendered in each button size. </p>
    </section>{__codeButton}
  </Container>;

export default SAMPLE;