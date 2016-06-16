import Intro from './sections/Intro';
import GettingStarted from './sections/GettingStarted';
import Elements from './sections/Elements';
import Typography from './sections/Typography';
import Tables from './sections/Tables';
import Buttons from './sections/Buttons';
import Forms from './sections/Forms';
import Layout from './sections/Layout';

ReactDOM.render(
  <span>
    {Intro}
    {GettingStarted}
    {Elements}
    {Typography}
    {Tables}
    {Buttons}
    {Forms}
    {Layout}
  </span>,
  document.getElementById('root')
);