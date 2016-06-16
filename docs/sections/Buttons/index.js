const { Container } = ReactSpectre;
import SideBySideWrapper from '../SideBySideWrapper';
import StandardButtons, { STRING as STANDARD_BUTTONS_STRING } from './StandardButtons';
import ButtonSizes, { STRING as BUTTON_SIZES_STRING } from './ButtonSizes';
import ButtonsWithIcons, { STRING as BUTTONS_WITH_ICONS_STRING } from './ButtonsWithIcons';
import ButtonGroups, { STRING as BUTTON_GROUPS_STRING } from './ButtonGroups';

export default (
  <span>
    <Container id='buttons' size='960'>
      <header className='text-center'><h4>buttons</h4></header>
      <section className='notes'>
        <p><strong>Buttons</strong> include simple button styles for actions in different types and sizes. </p>
      </section>
    </Container>
    <SideBySideWrapper exampleComponent={StandardButtons} exampleString={STANDARD_BUTTONS_STRING} />
    <SideBySideWrapper exampleComponent={ButtonSizes} exampleString={BUTTON_SIZES_STRING} />
    <SideBySideWrapper exampleComponent={ButtonsWithIcons} exampleString={BUTTONS_WITH_ICONS_STRING} />
    <SideBySideWrapper exampleComponent={ButtonGroups} exampleString={BUTTON_GROUPS_STRING} />
  </span>
);