import Navbar from './Navbar.js';
import math from './media/math.jpg';
import banner1 from './media/ucsb_banner.jpg';
import banner2 from './media/ucsb_beach.png';
import placeholder from './media/Officers/placeholder.png';
import logo from './media/logo.jpg';
import hannahAWM from './media/Officers/hannahAWM.jpeg';
import eliseAWM from './media/Officers/eliseAWM.JPG';
import gahlAWM from './media/Officers/gahlAWM.jpeg';
import emmaAWM from './media/Officers/emmaAWM.jpeg';

function App() {
  return (
    <div className="App">
        <section className="bg-slate-50">
          <Navbar />
          <img className="object-cover object-top w-full h-40 md:h-60" src={banner1} alt="UCSB campus"></img>
        </section>
        <About/>
        <Events/>
        <Officers/>
        <Contact/>
        <img className="w-full" src={banner2} alt="UCSB beach"></img>
    </div>
  );
}

function About() {
    return (
      <section id="about" className="bg-slate-50">
        <TwoColContainer className="p-10">
          <img className="w-full my-auto rounded-md mb-10 sm:mb-auto" src={math} alt="Math Lecture"></img>
          <div className="w-full sm:p-10">
            <Title>About us.</Title>
            <Body>
              The Association for Women in Math Student Chapter at UCSB is a club dedicated to empowering and unifying a community of mathematicians, both undergraduate and graduate. We support young women and non-binary individuals who feel that they are one of few in this field of study, and we focus on presenting a variety of speakers, events, and opportunities to reach all strands of the mathematical community. All genders are welcome at every meeting.
            </Body>
          </div>
        </TwoColContainer>
      </section>
    );
}

function Events() {
  return (
    <section id="events" className="bg-slate-200">
      <TwoColContainer className="p-0 sm:p-10">
        <div className="w-full p-10 sm:p-10">
          <Title>Events.</Title>
          <Body>
              We meet bi-monthly on Wednesdays from 5-6 PM at South Hall 6635. Pizza at every meeting!
            <ul style= {{ listStyleType: "square" }}>
            <li><strong>January 11:</strong> Personal statement workshop for REUs</li>
            <li>Second Item</li>
            <li>Third Item</li>
            </ul>
          </Body>
          <Link href="https://www.facebook.com/UCSBAWM/">Check us out on Facebook.</Link>
        </div>
        <div className="w-full pb-10">
          <FacebookIFrame/>
        </div>
      </TwoColContainer>
    </section>
  );
}

function Officers() {
  return (
    <section id="Officers" className="bg-slate-50 sm:px-10">
      <div className="container max-w-screen-xl mx-auto sm:p-10 py-10">
        <Title className="text-center">Officers.</Title>
        <div className="mx-auto p-10 overflow-auto">
          <div className="flex flex-row flex-nowrap lg:flex-wrap lg:justify-center gap-8">
            <Card img={eliseAWM} name="Elise Alvarez-Salazar" position="President" />
            <Card img={gahlAWM} name="Gahl Shemy" position="Officer" />
            <Card img={placeholder} name="Sogol Cyrusian" position="Officer" />
            <Card img={hannahAWM} name="Hannah Li" position="Treasurer" />
            <Card img={emmaAWM} name="Emma Opper" position="Media Coordinator" />
            <Card img={placeholder} name="Sam Ream" position="Officer" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card(props){
  return (<div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-fit">
    <img className="object-cover w-full h-56" src={props.img} alt="avatar"></img>
    
    <div className="px-4 w-60 py-5 text-center">
        <h1 className="block text-3xl font-bold text-slate-800">{props.name}</h1>
        <span className="text-xl text-slate-700">{props.position}</span>
    </div>
  </div>);
}

function Contact(){
  return (
    <section id="contact" className="bg-slate-200">
      <TwoColContainer className="p-10">
        <img className="w-full my-auto rounded-md mb-10 sm:mb-auto" src={logo} alt="AWM Logo written in Chalk"></img>
        <div className="w-full sm:p-10">
          <Title>Contact.</Title>
          <Body>
            Reach us at ucsb.awm@gmail.com!
          </Body>
        </div>
      </TwoColContainer>
    </section>
  );
}


const Title = ({className, children}) => (
  <h1 className={"text-5xl font-bold leading-tight text-slate-800 " + className}>{children}</h1>
);

const TwoColContainer = ({className, children}) => (
  <div className={"container max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8 " + className}>
    {children}
  </div>
)

const Body = ({children}) => (
  <p className="mt-6 text-2xl text-slate-700">{children}</p>
)

const Link = ({href, children}) => (
  <a href={href} ><p className="text-2xl text-cyan-600 underline">
    {children}
  </p></a>
)

const FacebookIFrame = ()=>(
  <div className="overflow-auto">
    <iframe className="mx-auto" title="Facebook Page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUCSBAWM%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500"></iframe>
  </div>
);

export default App;
