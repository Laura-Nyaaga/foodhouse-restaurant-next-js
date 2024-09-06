
import Navbar from "./navbar/component/page";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="flex justify-center items-center pt-[200px]">
        <div>
          <h1 className="font-bold text-8xl	">Enjoy Delicious</h1>
          <h1 className="text-8xl font-bold">Food in <b className="text-yellow-500 text-8xl">Helthy Life</b></h1>


          <p className="text-lg text-left w-[500px] py-[50px]">Tandoori masala is an Indian spice blend consulting of a 
            variety of spices Tandoori masala is an Indian spice blend
            consisting of a variety of spices
          </p>

          
          

          <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-2 px-4 rounded-lg">
            ORDER NOW
          </button>
        </div>
        <div>
            <img className="h-[450px]  w-[550px] mb-8" src="/Images/dish.png" alt="dish"/>
        </div>
        
      </div>
  

      
      <section className="pt-[200px]">
        <p className="font-bold text-center text-2xl italic">Online Store</p>
        <p className="font-bold text-center text-6xl">Popular Foods</p>
        <div className="flex justify-evenly gap-10 pt-[100px]">
          <figure>
            <img className="h-[300px]  w-[300px] rounded-full mt-[20px]" src="/Images/pilipili.png" alt="Pilipili" />
            <figcaption>
              <p className="text-center pt-[120px] text-4xl"><b>Frut Dish</b></p>
              <p className="text-center py-[30px] text-slate-500">Dinko Food</p>
              <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-2 px-6 rounded-full flex gap-[10px] w-[200px] h-[40px] ml-[60px]">
                <span className="pt-30px]">Add to Cart</span>
                <span className="pt-30px]">$696</span>
              </button>
            </figcaption>
          </figure>

          <figure>
            <img className="h-[400px]  w-[400px] rounded-full" src="/Images/seafood.png" alt="Seafood" />
            <figcaption>
              <p className="text-center pt-[30px] text-4xl"><b>Frut Dish</b></p>
              <p className="text-center py-[30px] text-slate-500">Dinko Food</p>
              <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-2 px-6 rounded-full flex gap-[10px] w-[200px] h-[40px] ml-[120px]">
                <span className="pt-30px]">Add to Cart</span>
                <span className="pt-30px]">$696</span>
              </button>
            </figcaption>
          </figure>

          <figure>
            <img className="h-[400px]  w-[400px]  rounded-full" src="/Images/fish.png" alt="Fish" />
            <figcaption>
              <p className="text-center mt-[20px] text-4xl"><b>Sea Fish Dish</b></p>
              <p className="text-center mt-[30px] mb-[30px] text-slate-500">Dinko Food</p>
              <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-2 px-6 rounded-full flex gap-[10px] w-[200px] h-[40px] ml-[100px]">
                <span className="pt-30px]">Add to Cart</span>
                <span className="pt-30px]">$696</span>
              </button>
            </figcaption>
          </figure>


          <figure>
            <img className="h-[350px]  w-[350px]  rounded-full" src="/Images/pizza.png" alt="Pizza" />
            <figcaption>
              <p className="text-center mt-[70px] text-4xl"><b>Pizza</b></p>
              <p className="text-center mt-[30px] mb-[30px] text-slate-500">Dinko Food</p>
              <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-2 px-6 rounded-full flex gap-[10px] w-[200px] h-[40px] ml-[80px]">
                <span>Add to Cart</span>
                <span>$696</span>
              </button>
            </figcaption>
          </figure>

        </div>
      </section>

      <section className="pt-[200px] flex justify-center justify-around">
        <div className="mt-[50px]">
          <h1 className="font-bold text-6xl">Our Special Offer</h1>
          <br></br>
          <br></br>
          <p className="text-left w-[400px] text-2xl text-slate-500">Best cooks and best delivery guys all at your service.
            Host tasty food will reach you in 60 minutes.
          </p>
          <br></br>
          <br></br>
          <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-2 px-4 rounded-lg gap-[5px] flex h-[50px]">
            <span>
              See All Menu
            </span>

            <span>
              <img className="w-[30px] h-[30px] mb-[50px]" src="/Images/arrow.png" alt="arrow" />
            </span>
          </button>
        </div>
        <div>
          <img className="w-[550px] h-[450px] mt-[-100px] object-fit" src="/Images/lastimage.png" alt="A plate of food" />
        </div>
      </section>

      <section className="pt-[200px]">
        <p className="text-center text-2xl text-slate-500">Quality Food</p>
        <h1 className="text-center font-bold text-6xl pt-[30px]">Get The Best Offers</h1>
        <p className="w-[29%] text-center ml-[36%] text-2xl pt-[30px] text-slate-500">The food at your doorstep. Why starve when you have us.
          Your hunger partner. Straight out of the oven to your doorstep.
        </p>

        <div className="flex justify-evenly pt-[200px]">
          <div className="flex gap-[10px]">
            <div>
              <h5 className="text-3xl font-bold w-[150px]">Any day Offers</h5>
              <p className="w-[150px] leading-loose	pt-[20px] text-slate-500">New pheneomenon Burger taste</p>
              <p className="pt-[30px] text-yellow-500 font-bold">$12.90</p>
            </div>
            <div>
              <img className="h-[200px]  w-[200px]  rounded-full" src="/Images/hum.png" alt="Humburger" />
            </div>
          </div>

          <div className="flex gap-[10px]">
            <div>
              <h5 className="text-3xl font-bold w-[150px]">Other Flavors</h5>
              <p className="w-[150px] leading-loose	pt-[20px] text-slate-500">Save room. We made salats</p>
              <p className="pt-[30px] text-yellow-500 font-bold">$12.90</p>
            </div>
            <div>
              <img className="h-[200px]  w-[200px]  rounded-full"  src="/Images/burger.png" alt="Burger" />
            </div>
          </div>

          <div className="flex gap-[10px]">
            <div>
              <h5 className="text-3xl font-bold w-[200px]">Find a poco store near you</h5>
              {/* <p className="w-[200px] leading-loose	pt-[20px]">New pheneomenon Burger taste</p> */}
              {/* <p className="pt-[30px] text-yellow-500 font-bold">$12.90</p> */}
            </div>
            <div>
              <img className="h-[200px]  w-[200px]  rounded-full" src="/Images/location.png" alt="Location" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[200px]">
        <h1 className="text-center text-5xl font-bold pt-[80px]">Our Services</h1>
        <div className="flex justify-evenly pt-[200px]">
          <figure>
            <img className="w-[300px]" src="/Images/house.png" alt="House" />
            <figcaption className="text-3xl ml-[30px]">55+ Restaurants</figcaption>
          </figure>

          <figure>
            <img className="w-[300px]" src="/Images/goodwheel.png" alt="House" />
            <figcaption className="text-3xl ml-[50px]">Good Quality</figcaption>
          </figure>

          <figure>
            <img className="w-[400px] mt-[-50px]" src="/Images/discount.png" alt="House" />
            <figcaption className="text-3xl ml-[90px] mt-[-40px]">Discount System</figcaption>
          </figure>

          <figure>
            <img className="w-[500px] mt-[-50px]" src="/Images/bike.png" alt="House" />
            <figcaption className="text-3xl ml-[180px] mt-[-130px]">Fast Delivery</figcaption>
          </figure>
        </div>
      </section>

      <section className="pt-[200px]">
        <h6 className="font-bold text-center text-1xl">Testimonial</h6>
        <h1 className="text-center text-6xl text-black font-bold pt-[20px]">What Our Clients Say</h1>
        <img className="mx-[880px] pt-[30px] w-[100px]" src="/Images/quote.png" alt="quote"/>

        <p className="mx-[550px] font-light w-[40%] text-center pt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.
        </p>
        <div className="flex w-[100px] mx-[650px] pt-[100px]">
          <img className="" src="/Images/profileimage.webp" alt="profile pic"/>
          <img className="" src="/Images/profileimage.webp" alt="profile pic"/>
          <img className="" src="/Images/profileimage.webp" alt="profile pic"/>
          <img className="" src="/Images/profileimage.webp" alt="profile pic"/>
          <img className="" src="/Images/profileimage.webp" alt="profile pic"/>
        </div>
        <p className="font-bold text-2xl mx-[840px] w-[20%]">Mitchelle Marsh</p>
        <p className="font-light mx-[850px] w-[20%]">CEO Benson Agency</p>
        <div className="flex gap-[20px] justify-center pt-[20px]">
          <button className="bg-yellow-300 hover:blue-700 py-2 px-4 rounded-lg gap-[5px] flex h-[40px]">
            <img className="w-[30px]" src="/Images/backarrow.png" alt="Back Arrow"/>
          </button>
          <button className="bg-yellow-500 hover:blue-700 py-2 px-4 rounded-lg gap-[5px] flex h-[40px]">
            <img className="w-[30px]" src="/Images/arrow.png" alt="Forward Arrow"/>
          </button>
        </div>
      </section>

      <section className="pt-[200px]">
        <div className="flex justify-evenly">
          <div>
            <img className="h-[550px]" src="/Images/phone2.png" alt="Phone" />
          </div>
          <div>
            <p className="text-yellow-500 text-2xl font-bold">Download Our App</p>
            <h2 className="font-bold text-6xl w-[420px] leading-normal pt-[30px]">It's all here. All in one app.</h2>
            <p className="text-2xl w-[670px] leading-normal pt-[30px]">Discover local, on-demand delivery or pickup from Restaurants, nearby grocercy and convenience stores, and more.</p>
            <div className="flex gap-[100px] pt-[50px]">
              <button className="bg-black py-2 px-6 rounded-2xl gap-[5px] flex h-[70px]">
                <img className="bg-white w-[45px]" src="/Images/apple.png" alt="" />
                <span className="text-white w-[150px] text-left">Download on the <b>App Store</b></span>
              </button>
              <button className="bg-black py-2 px-6 rounded-2xl gap-[5px] flex h-[70px]">
                <img src="/Images/playstore.png" alt="" />
                <span className="text-white w-[100px] text-left">Get it on <b>Google Play</b></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" pt-[200px] flex gap-28 m-24 justify-center items-center">
        <div>
          <h1 className="text-6xl font-bold">Subscribe Our Newsletter</h1>
          <p className="mt-10 text-2xl text-slate-500 w-[450px]">Subscribe on our newsletter to get our news</p>
        </div>
        <div className="flex text-2xl">
        <input
            type="email"
            placeholder="Your email address.."
            className="flex-grow p-3 border rounded-lg focus:outline-none focus:border-indigo-500 h-20"
          />
          <button className="bg-yellow-500 mt-5 p-2 rounded-lg text-white text-sm h-20 mb-4 mt-0 w-[200px] flex gap-[20px]">
            <span className="text-2xl mt-[15px]">Subscribe</span>
            <img className="bg-white rounded-lg mt-[10px] gap-[10px]" src="/Images/arrow.png" alt="" />
          </button>
        </div>
      </section>

      <footer className="bg-black text-gray-400 pt-[100px] pb-6 h-[500px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ml-[50px]">
            
            <div>
              <h2 className="text-2xl text-white font-bold mb-4">FoodHouse.</h2>
              <p className="mb-4 text-xl">
                Best cooks and best delivery guys all at your service. Hot tasty
                food will reach you in 60 minutes.
              </p>
              <div className="flex space-x-4">

                <a href="#facebook" className="bg-white p-2 rounded-full">
                  <img
                  className="w-[30px] h-[30px]"
                    src="/Images/facebook.png"
                    alt="Facebook"
                  />
                </a>
                
                <a
                  href="#linkeid"
                  className="bg-white p-2 rounded-full">
                  <img
                  className="w-[30px] h-[30px]"
                    src="/Images/twitter.png"
                    alt="Twitter"
                  />
                </a>

                <a
                  href="#linkeid"
                  className="bg-white p-2 rounded-full">
                  <img
                  className="w-[30px] h-[30px]"
                    src="/Images/linkedin.png"
                    alt="LinkedIn"
                  />
                </a>

              </div>
            </div>
            <div className="ml-[150px]">
              <h3 className="text-2xl font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-xl">
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Career
                  </span>
                </li>
                <li>
                 <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                  About Us
                 </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Blog
                  </span>
                </li>
                <li>
                 <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                 Press Info
                 </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Features
                  </span>
                </li>
              </ul>
            </div>

            <div className="ml-[150px]">
              <h3 className="text-2xl font-semibold mb-4 text-white">Fudo</h3>
              <ul className="space-y-2 text-xl">
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Why Fudo
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                  How it works Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Why Choose Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                  Client side Info
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Gallery
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="ml-[150px]">
              <h3 className="text-2xl font-semibold mb-4 text-white">Menu</h3>
              <ul className="space-y-2 text-xl">
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Breakfast
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Lunch Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Dinner
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Fast Foods Info
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                     Drinks
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

      <section className="bg-amber-400 text-white h-[70px] flex gap-[100px] pt-[20px]">
        <div className="flex gap-20">
        <p className="text-center text-1xl ml-96">@Copyright 2021 Bensik All Right Reserved</p>
        </div>
        <div className="flex gap-20 ml-96 text-1xl">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
        </div>
      </section>

    </main>
  );
}
