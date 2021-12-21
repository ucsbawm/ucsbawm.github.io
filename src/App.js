import Navbar from './Navbar.js';
import math from './math.jpg';

function App() {
  return (
    <div className="App">
        <section className="bg-white">
          <Navbar></Navbar>
          
      
          <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/2">
                  <div className="lg:max-w-lg">
                      <h1 className="text-3xl font-bold tracking-wide text-gray-800">
                          Association for Women in Mathematics
                      </h1>
                      
                      <div className="mt-8 space-y-5">
                          <p className="flex items-center -mx-2 text-gray-700">
                              <span className="mx-2">We are a student chapter for the Association for Women in Mathematics. We are a community that supports and provides resources for women interested in math.</span>
                          </p>
                      </div>
                  </div>
              </div>
      
              <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                  <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={math}></img>
              </div>
          </div>
        </section>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUCSBAWM%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500"></iframe>
    </div>
  );
}

export default App;
