const { Container, ButtonGroup, Button } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container id='elements' size='960'>
    <section className='notes text-center'>
      <ul className='tab inline-flex'>
        <li className='tab-item active'>
          <a href='#elements'>elements</a>
        </li>
        <li className='tab-item'>
          <a href='#layout'>layout</a>
        </li>
        <li className='tab-item'>
          <a href='#components'>components</a>
        </li>
        <li className='tab-item'>
          <a href='#utilities'>utilities</a>
        </li>
      </ul>
    </section>
    <section className='notes text-center'>
      <ButtonGroup>
        <Button primary href='#typography'>typography</Button>
        <Button primary href='#tables'>tables</Button>
        <Button primary href='#buttons'>buttons</Button>
        <Button primary href='#forms'>forms</Button>
        <Button primary href='#media'>media</Button>
      </ButtonGroup>
    </section>{__codeButton}
  </Container>;

export default SAMPLE;