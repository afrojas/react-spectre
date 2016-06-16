const { Container } = ReactSpectre;

const SAMPLE = ({ __codeButton }) =>
  <Container size='960'>
    <header className='text-center'><h5>optimized for asian fonts</h5></header>
    <p className='lead'>你好, こんにちは, 안녕하세요</p>
    <h6>Chinese (Simplified)</h6>
    <p>革命不是请客吃饭，不是做文章，不是绘画绣花，不能那样雅致，那样从容不迫，“文质彬彬”，那样“温良恭俭让”。革命就是暴动，是一个阶级推翻一个阶级的暴烈的行动。</p>
    <h6>Japanese</h6>
    <p>祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。おごれる人も久しからず。ただ春の夜の夢のごとし。たけき者も遂にはほろびぬ、ひとへ&zwnj;&#8203;に風の前の塵に同じ。</p>
    <h6>Korean</h6>
    <p>나라말이 중국과 달라, 한문・한자와 서로 통하지 아니하므로, 어리석은 백성들이 말하고자 하는 바가 있어도, 끝내 제 뜻을 펴지 못하는 사람이 많다. 내가 이를 불쌍히 여겨, 새로 스물 여덟 글자를 만드니, 사람마다 하여금 쉽게 익혀, 날마다 씀에 편하게 하고자 할 따름이다.</p>{__codeButton}
  </Container>;

export default SAMPLE;