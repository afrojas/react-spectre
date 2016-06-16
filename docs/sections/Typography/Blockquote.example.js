const { Container } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <header className='text-center'><h5>blockquote</h5></header>
    <blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <cite>- Source</cite>
    </blockquote>{__codeButton}
  </Container>;

export default SAMPLE;