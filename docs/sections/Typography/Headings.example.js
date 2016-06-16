const { Container } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <header className='text-center'><h5>headings</h5></header>
    <h1>H1 Title <small className='label'>5rem</small></h1>
    <h2>H2 Title <small className='label'>4rem</small></h2>
    <h3>H3 Title <small className='label'>3rem</small></h3>
    <h4>H4 Title <small className='label'>2.4rem</small></h4>
    <h5>H5 Title <small className='label'>2rem</small></h5>
    <h6>H6 Title <small className='label'>1.6rem</small></h6>{__codeButton}
  </Container>;

export default SAMPLE;