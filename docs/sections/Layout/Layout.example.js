const { Container, ButtonGroup, Button } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container id='elements' size='960'>
    <section className='notes text-center'>
      <ul className='tab inline-flex'>
        <li className='tab-item'>
          <a href='#elements'>elements</a>
        </li>
        <li className='tab-item active'>
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
        <Button primary href='#grid'>flexbox grid</Button>
        <Button primary href='#responsive'>responsive</Button>
        <Button primary href='#navbar'>navbar</Button>
        <Button primary href='#empty'>empty states</Button>
      </ButtonGroup>
    </section>{__codeButton}
  </Container>;

export default SAMPLE;