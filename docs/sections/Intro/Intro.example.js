const { Section, Container, Label, ButtonGroup, Button } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Section className='bg-grey'>
    <Container id='overview' className='grid-hero' size='960'>
      <header className='text-center'><h3>React-Spectre</h3></header>
      <section>
        <p><strong>React-Spectre</strong> is a lightweight, responsive and modern CSS framework for faster and extensible development.</p>
        <ul>
          <li>lightweight and clean starting point for your project and prototype</li>
          <li>flexbox, responsive and mobile-friendly layout</li>
          <li>carefully designed elements</li>
          <li>built in useful components and utilities</li>
          <li>responsive email templates <Label primary>soon</Label></li>
        </ul>
      </section>
      <section className='notes text-center'>
        <ButtonGroup>
          <Button href='https://github.com/picturepan2/spectre' target='_blank' primary>GitHub Repo</Button>
          <Button href='#getting-started' primary>Documentation</Button>
        </ButtonGroup>
      </section>{__codeButton}
    </Container>
  </Section>;

export default SAMPLE;