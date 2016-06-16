const { Container } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <header className='text-center'><h5>paragraphs</h5></header>
    <p>Lorem ipsum dolor sit amet, <span className='highlight'>consectetur</span> adipiscing elit. Praesent risus leo, <a href='#typography'>dictum in vehicula sit amet</a>, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
    <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>{__codeButton}
  </Container>;

export default SAMPLE;