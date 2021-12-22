import Navbar from './Navbar.js';
import math from './media/math.jpg';
import banner1 from './media/ucsb_banner.jpg';
import banner2 from './media/ucsb_beach.png';
import placeholder from './media/staff/placeholder.png';
import logo from './media/logo.jpg';

function App() {
  return (
    <div className="App">
        <section className="bg-slate-50">
          <Navbar></Navbar>
          <img className="w-full" src={banner1} alt="UCSB campus"></img>
        </section>
        <About />
        <Events />
        <Staff />
        <Contact />
        <img className="w-full" src={banner2} alt="UCSB beach"></img>
    </div>
  );
}

function About() {
    return (
      <section id="about" className="bg-slate-50">
        <div className="container max-w-screen-xl p-10 mx-auto lg:grid lg:grid-cols-2 lg:gap-8">
          <img className="w-full my-auto rounded-md" src={math} alt="Math Lecture"></img>
          <div className="w-full sm:p-10">
            <h1 className="text-5xl font-bold leading-tight text-slate-800">
                About us.
            </h1>
            
            <p className="mt-10 text-2xl text-slate-700">
              The Association for Women in Math Student Chapter at UCSB is a club dedicated to empowering and unifying a community of mathematicians, both undergraduate and graduate. We support young women and non-binary individuals who feel that they are one of few in this field of study, and we focus on presenting a variety of speakers, events and opportunities to reach all strands of the mathematical community. All genders are welcome at every meeting.
            </p>
          </div>
        </div>
      </section>
    );
}

function Events() {
  return (
    <section id="events" className="bg-slate-200">
      <div className="container p-0 sm:p-10 max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="w-full p-10 sm:p-10">
          <h1 className="text-5xl font-bold leading-tight text-slate-800">
              Events.
          </h1>
          
          <p className="mt-10 text-2xl text-slate-700">
              We meet [weekly?] at [time/day?]. Pizza? Research and industry opportunities? Social events? Cool math stuff? I actually don't know.
          </p>

          <a href="https://www.facebook.com/UCSBAWM/"><p className="text-2xl text-cyan-600 underline">
              Check us out on Facebook.
          </p></a>
        </div>
        <div className="w-full pb-10">
          <div className="overflow-auto">
            <iframe className="mx-auto" title="Facebook Page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUCSBAWM%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Staff() {
  return (
    <section id="staff" className="bg-slate-50 sm:px-10">
      <div className="container max-w-screen-xl mx-auto p-10">
        <div className="text-center text-5xl font-bold text-slate-800">Staff.</div>
        <div className="mx-auto p-10 overflow-auto">
          <div className="flex flex-row flex-nowrap lg:flex-wrap lg:justify-center gap-8">
            <Card img={placeholder} name="Gahl Shemy" position="President" />
            <Card img={placeholder} name="Hannah Li" position="Treasurer" />
            <Card img={placeholder} name="Belinda Lehmann" position="Social Chair" />
            <Card img={placeholder} name="Grace Lemersal" position="Officer" />
            <Card img={placeholder} name="Elise Alvarez-salazar" position="Secretary" />
            <Card img={placeholder} name="Emma Opper" position="???" />
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
      <div className="container max-w-screen-xl p-10 mx-auto lg:grid lg:grid-cols-2 lg:gap-8">
        <img className="w-full my-auto rounded-md" src={logo} alt="AWM Logo written in Chalk"></img>
        <div className="w-full sm:p-10">
          <h1 className="text-5xl font-bold leading-tight text-slate-800">
              Contact.
          </h1>
          
          <p className="mt-10 text-2xl text-slate-700">
            Reach us... On facebook? Is there an email?
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;