import Tables from './Tables.example.js';
export default Tables;

export const STRING = "  <Container id='tables' size='960'>\n    <header className='text-center'><h4>tables</h4></header>\n    <section className='notes'>\n        <p><strong>Tables</strong> include default styles for tables and data sets.</p>\n    </section>\n    <Table striped hover>\n      <thead>\n        <tr>\n          <th>name</th>\n          <th>duration</th>\n          <th>genre</th>\n          <th>release date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The Shawshank Redemption</td>\n          <td>2h 22min</td>\n          <td>Crime, Drama</td>\n          <td>14 October 1994 <span className='label'>USA</span></td>\n        </tr>\n        <tr>\n          <td>The Godfather</td>\n          <td>2h 55min</td>\n          <td>Crime, Drama</td>\n          <td>24 March 1972 <span className='label'>USA</span></td>\n        </tr>\n        <tr>\n          <td>Schindler's List</td>\n          <td>3h 15min</td>\n          <td>Biography, Drama, History</td>\n          <td>4 February 1994 <span className='label'>USA</span></td>\n        </tr>\n        <tr>\n          <td>Se7en</td>\n          <td>2h 7min</td>\n          <td>Crime, Drama, Mystery</td>\n          <td>24 March 1972 <span className='label'>USA</span></td>\n        </tr>\n      </tbody>\n    </Table>\n  </Container>";