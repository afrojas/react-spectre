const { Container, Table } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container id='tables' size='960'>
    <header className='text-center'><h4>tables</h4></header>
    <section className='notes'>
        <p><strong>Tables</strong> include default styles for tables and data sets.</p>
    </section>
    <Table striped hover>
      <thead>
        <tr>
          <th>name</th>
          <th>duration</th>
          <th>genre</th>
          <th>release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>2h 22min</td>
          <td>Crime, Drama</td>
          <td>14 October 1994 <span className='label'>USA</span></td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>2h 55min</td>
          <td>Crime, Drama</td>
          <td>24 March 1972 <span className='label'>USA</span></td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>3h 15min</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994 <span className='label'>USA</span></td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>2h 7min</td>
          <td>Crime, Drama, Mystery</td>
          <td>24 March 1972 <span className='label'>USA</span></td>
        </tr>
      </tbody>
    </Table>{__codeButton}
  </Container>;

export default SAMPLE;