const { Container, Cols, Col, Button } = ReactSpectre;

class SideBySideWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { codeOpen: props.codeStartsOpen ? props.codeStartsOpen : false };
  }
  _renderButton() {
    return (
      <Button primary onClick={() => this.setState({ codeOpen: !this.state.codeOpen })} className='float-right'>
        {`${this.state.codeOpen ? 'Hide' : 'Show'} React Code`}
      </Button>
    );
  }
  render() {
    const ExampleComponent = this.props.exampleComponent;
    return (
      <Container>
        <Cols>
          <Col style={{ padding: 0 }}>
            <ExampleComponent __codeButton={this._renderButton()} />
          </Col>
          <Col style={{ padding: 0 }} className={this.state.codeOpen ? '' : 'hide'}>
            <Container size='960'>
              <pre className='code lang-html'>
                {this.props.exampleString}
              </pre>
            </Container>
          </Col>
        </Cols>
      </Container>
    );
  }
}

export default SideBySideWrapper;