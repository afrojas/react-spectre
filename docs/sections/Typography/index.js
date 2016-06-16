const { Container } = ReactSpectre;
import SideBySideWrapper from '../SideBySideWrapper';
import Headings, { STRING as HEADINGS_STRING } from './Headings';
import Paragraphs, { STRING as PARAGRAPHS_STRING } from './Paragraphs';
import AsianFonts, { STRING as ASIAN_FONTS_STRING } from './AsianFonts';
import Blockquote, { STRING as BLOCKQUOTE_STRING } from './Blockquote';
import Lists, { STRING as LISTS_STRING } from './Lists';

export default (
  <span>
    <Container id='typography' size='960'>
      <header className='text-center'><h4>typography</h4></header>
      <section className='notes'>
        <p><strong>Typography</strong> sets default styles for headings, paragraphs, blockquote, lists and code elements. </p>
      </section>
    </Container>
    <SideBySideWrapper exampleComponent={Headings} exampleString={HEADINGS_STRING} />
    <SideBySideWrapper exampleComponent={Paragraphs} exampleString={PARAGRAPHS_STRING} />
    <SideBySideWrapper exampleComponent={AsianFonts} exampleString={ASIAN_FONTS_STRING} />
    <SideBySideWrapper exampleComponent={Blockquote} exampleString={BLOCKQUOTE_STRING} />
    <SideBySideWrapper exampleComponent={Lists} exampleString={LISTS_STRING} />
  </span>
);