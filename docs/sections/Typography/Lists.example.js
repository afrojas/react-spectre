const { Container, Cols, Col } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <header className='text-center'><h5>Lists</h5></header>
    <Cols>
      <Col size='4'>
        <ul className='list'>
          <li>list item 1</li>
          <li>list item 2
            <ul>
              <li>list item 2.1</li>
              <li>list item 2.2</li>
              <li>list item 2.3</li>
            </ul>
          </li>
          <li>list item 3</li>
        </ul>
      </Col>
      <Col size='4'>
        <ol className='list'>
          <li>list item 1</li>
          <li>list item 2
            <ol>
              <li>list item 2.1</li>
              <li>list item 2.2</li>
              <li>list item 2.3</li>
            </ol>
          </li>
          <li>list item 3</li>
        </ol>
      </Col>
      <Col size='4'>
        <dl className='list'>
          <dt>description list term 1</dt>
          <dd>description list description 1</dd>
          <dt>description list term 2</dt>
          <dd>description list description 2</dd>
          <dt>description list term 3</dt>
          <dd>description list description 3</dd>
        </dl>
      </Col>
    </Cols>{__codeButton}
  </Container>;

export default SAMPLE;