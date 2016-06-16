const { Container } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container id='getting-started' size='960'>
    <header className='text-center'><h3>getting started</h3></header>
    <section className='notes'>
      <h5>Install with NPM</h5>
      <pre className='code lang-html'><span className='tag'>$</span> npm install <span className='atv'>react-spectre</span>
      </pre>
    </section>{__codeButton}
  </Container>;

export default SAMPLE;