import Image from "next/image";
import React from "react";
import Navbar from "./navbar/component/page";

export default function Home() {
  const navItems = [
    {
      category: "Company",
      links: ["Career", "About Us", "Blog", "Press Info", "Features"],
    },
    {
      category: "Fudo",
      links: [
        "Why Fudo",
        "How it works",
        "Why Choose Us",
        "Client side Info",
        "Gallery",
      ],
    },
    {
      category: "Menu",
      links: ["Breakfast", "Lunch", "Dinner", "Fast Foods", "Drinks"],
    },
  ];

  const footerLinks = ["Terms", "Privacy", "Security"];

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 md:py-20 lg:py-32">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              Enjoy Delicious
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mt-2">
              Food in <span className="text-yellow-500">Helthy Life</span>
            </h1>

            <p className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 py-6 md:py-8 lg:py-12 text-slate-600">
              Tandoori masala is an Indian spice blend consulting of a variety
              of spices Tandoori masala is an Indian spice blend consisting of a
              variety of spices
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              ORDER NOW
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              className="w-full max-w-md lg:max-w-lg"
              src="/Images/dish.png"
              alt="dish"
              width={550}
              height={450}
            />
          </div>
        </div>

        <section className="py-12 md:py-20 lg:py-32">
          <div className="text-center mb-12">
            <p className="font-bold text-xl md:text-2xl italic text-slate-700">
              Online Store
            </p>
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl mt-4">
              Popular Foods
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover"
                src="/Images/pilipili.png"
                alt="Pilipili"
                height={300}
                width={300}
              />
              <h3 className="text-2xl md:text-3xl font-bold mt-6">Frut Dish</h3>
              <p className="text-slate-500 my-4">Dinko Food</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full w-full max-w-[200px] flex items-center justify-between transition-colors">
                <span>Add to Cart</span>
                <span>$696</span>
              </button>
            </div>

            <div className="flex flex-col items-center">
              <Image
                className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover"
                src="/Images/seafood.png"
                alt="Seafood"
                height={400}
                width={400}
              />
              <h3 className="text-2xl md:text-3xl font-bold mt-6">Frut Dish</h3>
              <p className="text-slate-500 my-4">Dinko Food</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full w-full max-w-[200px] flex items-center justify-between transition-colors">
                <span>Add to Cart</span>
                <span>$696</span>
              </button>
            </div>

            <div className="flex flex-col items-center">
              <Image
                className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover"
                src="/Images/fish.png"
                alt="Fish"
                height={400}
                width={400}
              />
              <h3 className="text-2xl md:text-3xl font-bold mt-6">
                Sea Fish Dish
              </h3>
              <p className="text-slate-500 my-4">Dinko Food</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full w-full max-w-[200px] flex items-center justify-between transition-colors">
                <span>Add to Cart</span>
                <span>$696</span>
              </button>
            </div>

            <div className="flex flex-col items-center">
              <Image
                className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover"
                src="/Images/pizza.png"
                alt="Pizza"
                height={350}
                width={350}
              />
              <h3 className="text-2xl md:text-3xl font-bold mt-6">Pizza</h3>
              <p className="text-slate-500 my-4">Dinko Food</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full w-full max-w-[200px] flex items-center justify-between transition-colors">
                <span>Add to Cart</span>
                <span>$696</span>
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 md:py-20 lg:py-32">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our Special Offer
            </h1>
            <br></br>
            <br></br>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-500 max-w-xl mx-auto lg:mx-0">
              Best cooks and best delivery guys all at your service. Host tasty
              food will reach you in 60 minutes.
            </p>
            <br></br>
            <br></br>
            <button className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              <span>See All Menu</span>

              <span>
                <Image
                  className="w-6 h-6"
                  src="/Images/arrow.png"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </span>
            </button>
          </div>
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              className="w-full max-w-md lg:max-w-lg"
              src="/Images/lastimage.png"
              alt="A plate of food"
              width={550}
              height={450}
            />
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xl md:text-2xl text-slate-500">Quality Food</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Get The Best Offers
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-500 mx-auto">
              The food at your doorstep. Why starve when you have us. Your
              hunger partner. Straight out of the oven to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 lg:mt-32">
            <div className="flex flex-col md:flex-row items-center gap-4 p-6">
              <div className="text-center md:text-left">
                <h5 className="text-2xl lg:text-3xl font-bold">
                  Any day Offers
                </h5>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  New pheneomenon Burger taste
                </p>
                <p className="text-yellow-500 font-bold mt-4">$12.90</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Image
                  className="rounded-full w-40 h-40"
                  src="/Images/hum.png"
                  alt="Humburger"
                  height={200}
                  width={200}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 p-6">
              <div className="text-center md:text-left">
                <h5 className="text-2xl lg:text-3xl font-bold">
                  Other Flavors
                </h5>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  Save room. We made salats
                </p>
                <p className="text-yellow-500 font-bold mt-4">$12.90</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Image
                  className="rounded-full w-40 h-40"
                  src="/Images/burger.png"
                  alt="Burger"
                  height={200}
                  width={200}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 p-6">
              <div className="text-center md:text-left">
                <h5 className="text-2xl lg:text-3xl font-bold">
                  Find a poco store near you
                </h5>
              </div>
              <div className="mt-4 md:mt-0">
                <Image
                  className="rounded-full w-40 h-40"
                  src="/Images/location.png"
                  alt="Location"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Images/house.png"
                alt="House"
                width={200}
                height={150}
                className="w-full max-w-[200px]"
              />
              <p className="text-xl md:text-2xl lg:text-3xl mt-4">
                55+ Restaurants
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/Images/goodwheel.png"
                alt="House"
                width={200}
                height={150}
                className="w-full max-w-[200px]"
              />
              <p className="text-xl md:text-2xl lg:text-3xl mt-4">
                Good Quality
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                className="w-full max-w-[200px]"
                src="/Images/discount.png"
                alt="House"
                width={200}
                height={150}
              />
              <p className="text-xl md:text-2xl lg:text-3xl mt-4">
                Discount System
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                className="w-full max-w-[200px]"
                src="/Images/bike.png"
                alt="House"
                width={200}
                height={150}
              />
              <p className="text-xl md:text-2xl lg:text-3xl mt-4">
                Fast Delivery
              </p>
            </div>
          </div>
        </section>

        <section className="md:py-20 lg:py-32 max-w-4xl mx-auto text-center">
          <h6 className="font-bold text-sm md:text-base">Testimonial</h6>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-4">
            What Our Clients Say
          </h1>
          <div className="flex justify-center my-8">
            <Image
              src="/Images/quote.png"
              alt="quote"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-col items-center sm:flex-row justify-center gap-2 md:gap-4 mt-12 overflow-x-auto py-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <Image
                key={index}
                src="/Images/profileimage.webp"
                alt="profile pic"
                width={150}
                height={150}
                className="rounded-full w-12 h-12 md:w-16 md:h-16"
              />
            ))}
          </div>
          <div className="mt-6">
            <p className="font-bold text-xl md:text-2xl">Mitchelle Marsh</p>
            <p className="text-slate-500 mt-2">CEO Benson Agency</p>
          </div>
          <div className="flex justify-center gap-8 mt-8">
            <button className="bg-yellow-300 hover:bg-yellow-400 p-2 rounded-lg transition-colors">
              <Image
                src="/Images/backarrow.png"
                alt="Back Arrow"
                width={24}
                height={24}
              />
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-lg transition-colors">
              <Image
                src="/Images/arrow.png"
                alt="Forward Arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
          {/* </div> */}
        </section>

        <section className="py-12 md:py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/Images/phone2.png"
                alt="Phone"
                height={550}
                width={200}
                className="w-48 md:w-56 lg:w-64"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-yellow-500 text-xl md:text-2xl font-bold">
                Download Our App
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-4">
                {" "}
                All in one app.
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mt-6">
                Discover local, on-demand delivery or pickup from Restaurants,
                nearby grocercy and convenience stores, and more.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
                <button className="bg-black rounded-xl p-4 flex items-center justify-center gap-4">
                  <Image
                    className="bg-white w-8 h-8"
                    src="/Images/apple.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <span className="text-white text-left">
                    <span className="block text-sm">Download on the</span>
                    <span className="block font-bold">App Store</span>
                  </span>
                </button>
                <button className="bg-black rounded-xl p-4 flex items-center justify-center gap-4">
                  <Image
                    src="/Images/playstore.png"
                    alt="playstore"
                    width={30}
                    height={30}
                    className="w-8 h-8"
                  />
                  <span className="text-white text-left">
                    <span className="block text-sm">Get it on</span>
                    <span className="block font-bold">Google Play</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                  Subscribe Our Newsletter
                </h2>
                <p className="text-lg md:text-xl text-slate-500 mt-4">
                  Subscribe on our newsletter to get our news
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address.."
                className="flex-grow p-3 border rounded-lg focus:outline-none focus:border-indigo-500 h-20 mt-[22px]"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-6 py-4 flex items-center justify-center gap-2 h-20 mt-[22px]">
                <span className="text-lg">Subscribe</span>
                <Image
                  className="w-6 h-6"
                  src="/Images/arrow.png"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-black text-gray-400 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl text-white font-bold mb-4">
                FoodHouse.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mb-6">
                Best cooks and best delivery guys all at your service. Hot tasty
                food will reach you in 60 minutes.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                {["facebook", "twitter", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Image
                      width={24}
                      height={24}
                      src={`/Images/${social}.png`}
                      alt={social}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between pl-4 sm:pl-8 md:pl-16 lg:pl-52 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
              {navItems.map(({ category, links }) => (
                <div key={category}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 text-center lg:text-left">
                    {category}
                  </h3>
                  <ul className="space-y-2 text-center lg:text-left">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm sm:text-base lg:text-lg hover:text-yellow-400 cursor-pointer transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <section className="bg-amber-400 text-white py-4 sm:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm sm:text-base lg:text-lg text-center sm:text-left">
            @Copyright 2021 Bensik All Right Reserved
          </p>
          <div className="flex space-x-4 text-sm sm:text-base lg:text-lg">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
