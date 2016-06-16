const { Container } = ReactSpectre;
import SideBySideWrapper from '../SideBySideWrapper';
import StandardForm, { STRING as STANDARD_FORM_STRING } from './StandardForm';
import HorizontalForm, { STRING as HORIZONTAL_FORM_STRING } from './HorizontalForm';
import InputSizes, { STRING as INPUT_SIZES_STRING } from './InputSizes';
import InputGroups, { STRING as INPUT_GROUPS_STRING } from './InputGroups';

export default (
  <span>
    <Container id='forms' size='960'>
      <header className='text-center'><h4>forms</h4></header>
      <section className='notes'>
        <p><strong>Forms</strong> provide the most common control styles used in forms, including label, input, textarea, select, checkbox, radio and switch.</p>
      </section>
    </Container>
    <SideBySideWrapper exampleComponent={StandardForm} exampleString={STANDARD_FORM_STRING} />
    <SideBySideWrapper exampleComponent={HorizontalForm} exampleString={HORIZONTAL_FORM_STRING} />
    <SideBySideWrapper exampleComponent={InputSizes} exampleString={INPUT_SIZES_STRING} />
    <SideBySideWrapper exampleComponent={InputGroups} exampleString={INPUT_GROUPS_STRING} />
  </span>
);