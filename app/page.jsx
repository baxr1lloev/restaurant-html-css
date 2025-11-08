import Image from 'next/image'
import Preloader from '@/components/Preloader'
import Topbar from '@/components/Topbar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <Preloader />
      <Topbar />
      <Header />

      <main>
        <article>
          <Hero />

          {/* SERVICE */}
          <section className="section service bg-black-10 text-center" aria-label="service">
            <div className="container">
              <p className="section-subtitle label-2">Flavors For Royalty</p>
              <h2 className="headline-1 section-title">We Offer Top Notch</h2>
              <p className="section-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.
              </p>

              <ul className="grid-list">
                <li>
                  <div className="service-card">
                    <a href="#" className="has-before hover:shine">
                      <figure className="card-banner img-holder" style={{ '--width': '285', '--height': '336' }}>
                        <Image src="/service-1.jpg" width={285} height={336} loading="lazy" alt="Breakfast" className="img-cover" />
                      </figure>
                    </a>
                    <div className="card-content">
                      <h3 className="title-4 card-title"><a href="#">Breakfast</a></h3>
                      <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <a href="#" className="has-before hover:shine">
                      <figure className="card-banner img-holder" style={{ '--width': '285', '--height': '336' }}>
                        <Image src="/service-2.jpg" width={285} height={336} loading="lazy" alt="Appetizers" className="img-cover" />
                      </figure>
                    </a>
                    <div className="card-content">
                      <h3 className="title-4 card-title"><a href="#">Appetizers</a></h3>
                      <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <a href="#" className="has-before hover:shine">
                      <figure className="card-banner img-holder" style={{ '--width': '285', '--height': '336' }}>
                        <Image src="/service-3.jpg" width={285} height={336} loading="lazy" alt="Drinks" className="img-cover" />
                      </figure>
                    </a>
                    <div className="card-content">
                      <h3 className="title-4 card-title"><a href="#">Drinks</a></h3>
                      <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                    </div>
                  </div>
                </li>
              </ul>

              <Image src="/shape-1.png" width={246} height={412} loading="lazy" alt="shape" className="shape shape-1 move-anim" />
              <Image src="/shape-2.png" width={343} height={345} loading="lazy" alt="shape" className="shape shape-2 move-anim" />
            </div>
          </section>

          {/* ABOUT */}
          <section className="section about text-center" aria-labelledby="about-label" id="about">
            <div className="container">
              <div className="about-content">
                <p className="label-2 section-subtitle" id="about-label">Our Story</p>
                <h2 className="headline-1 section-title">Every Flavor Tells a Story</h2>
                <p className="section-text">
                  Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.
                </p>
                <div className="contact-label">Book Through Call</div>
                <a href="tel:+804001234567" className="body-1 contact-number hover-underline">+80 (400) 123 4567</a>
                <a href="#" className="btn btn-primary">
                  <span className="text text-1">Read More</span>
                  <span className="text text-2" aria-hidden="true">Read More</span>
                </a>
              </div>

              <figure className="about-banner">
                <Image src="/about-banner.jpg" width={570} height={570} loading="lazy" alt="about banner" className="w-100" />
                <div className="abs-img abs-img-1 has-before">
                  <Image src="/about-abs-image.jpg" width={285} height={285} loading="lazy" alt="" className="w-100" />
                </div>
                <div className="abs-img abs-img-2 has-before">
                  <Image src="/badge-2.png" width={133} height={134} loading="lazy" alt="" />
                </div>
              </figure>

              <Image src="/shape-3.png" width={197} height={194} loading="lazy" alt="" className="shape" />
            </div>
          </section>

          {/* SPECIAL DISH */}
          <section className="special-dish text-center" aria-labelledby="dish-label">
            <div className="special-dish-banner">
              <Image src="/special-dish-banner.jpg" width={940} height={900} loading="lazy" alt="special dish" className="img-cover" />
            </div>

            <div className="special-dish-content bg-black-10">
              <div className="container">
                <Image src="/badge-1.png" width={28} height={41} loading="lazy" alt="badge" className="abs-img" />
                <p className="section-subtitle label-2">Special Dish</p>
                <h2 className="headline-1 section-title">Lobster Tortellini</h2>
                <p className="section-text">
                  Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.
                </p>
                <div className="wrapper">
                  <del className="del body-3">$40.00</del>
                  <span className="span body-1">$20.00</span>
                </div>
                <a href="#" className="btn btn-primary">
                  <span className="text text-1">View All Menu</span>
                  <span className="text text-2" aria-hidden="true">View All Menu</span>
                </a>
              </div>
            </div>

            <Image src="/shape-4.png" width={179} height={359} loading="lazy" alt="" className="shape shape-1" />
            <Image src="/shape-9.png" width={351} height={462} loading="lazy" alt="" className="shape shape-2" />
          </section>

          {/* MENU */}
          <section className="section menu" aria-label="menu-label" id="menu">
            <div className="container">
              <p className="section-subtitle text-center label-2">Special Selection</p>
              <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

              <ul className="grid-list">
                {[
                  { img: 'menu-1.png', name: 'Greek Salad', badge: 'Seasonal', price: '$25.50', desc: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.' },
                  { img: 'menu-2.png', name: 'Lasagne', price: '$40.00', desc: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices' },
                  { img: 'menu-3.png', name: 'Butternut Pumpkin', price: '$10.00', desc: 'Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.' },
                  { img: 'menu-4.png', name: 'Tokusen Wagyu', badge: 'New', price: '$39.00', desc: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.' },
                  { img: 'menu-5.png', name: 'Olivas Rellenas', price: '$25.00', desc: 'Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.' },
                  { img: 'menu-6.png', name: 'Opu Fish', price: '$49.00', desc: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <div className="menu-card hover:card">
                      <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                        <Image src={`/${item.img}`} width={100} height={100} loading="lazy" alt={item.name} className="img-cover" />
                      </figure>
                      <div>
                        <div className="title-wrapper">
                          <h3 className="title-3"><a href="#" className="card-title">{item.name}</a></h3>
                          {item.badge && <span className="badge label-1">{item.badge}</span>}
                          <span className="span title-2">{item.price}</span>
                        </div>
                        <p className="card-text label-1">{item.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="menu-text text-center">
                During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
              </p>

              <a href="#" className="btn btn-primary">
                <span className="text text-1">View All Menu</span>
                <span className="text text-2" aria-hidden="true">View All Menu</span>
              </a>

              <Image src="/shape-5.png" width={921} height={1036} loading="lazy" alt="shape" className="shape shape-2 move-anim" />
              <Image src="/shape-6.png" width={343} height={345} loading="lazy" alt="shape" className="shape shape-3 move-anim" />
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="section testi text-center has-bg-image" style={{ backgroundImage: "url('/testimonial-bg.jpg')" }} aria-label="testimonials">
            <div className="container">
              <div className="quote">"</div>
              <p className="headline-2 testi-text">
                I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
              </p>
              <div className="wrapper">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>
              <div className="profile">
                <Image src="/testi-avatar.jpg" width={100} height={100} loading="lazy" alt="Sam Jhonson" className="img" />
                <p className="label-2 profile-name">Sam Jhonson</p>
              </div>
            </div>
          </section>

          {/* RESERVATION */}
          <section className="reservation">
            <div className="container">
              <div className="form reservation-form bg-black-10">
                <form action="" className="form-left">
                  <h2 className="headline-1 text-center">Online Reservation</h2>
                  <p className="form-text text-center">
                    Booking request <a href="tel:+88123123456" className="link">+88-123-123456</a> or fill out the order form
                  </p>

                  <div className="input-wrapper">
                    <input type="text" name="name" placeholder="Your Name" autoComplete="off" className="input-field" />
                    <input type="tel" name="phone" placeholder="Phone Number" autoComplete="off" className="input-field" />
                  </div>

                  <div className="input-wrapper">
                    <div className="icon-wrapper">
                      <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                      <select name="person" className="input-field">
                        <option value="1-person">1 Person</option>
                        <option value="2-person">2 Person</option>
                        <option value="3-person">3 Person</option>
                        <option value="4-person">4 Person</option>
                        <option value="5-person">5 Person</option>
                        <option value="6-person">6 Person</option>
                        <option value="7-person">7 Person</option>
                      </select>
                      <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                    </div>

                    <div className="icon-wrapper">
                      <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>
                      <input type="date" name="reservation-date" className="input-field" />
                      <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                    </div>

                    <div className="icon-wrapper">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                      <select name="time" className="input-field">
                        <option value="08:00am">08 : 00 am</option>
                        <option value="09:00am">09 : 00 am</option>
                        <option value="10:00am">10 : 00 am</option>
                        <option value="11:00am">11 : 00 am</option>
                        <option value="12:00pm">12 : 00 pm</option>
                        <option value="01:00pm">01 : 00 pm</option>
                        <option value="02:00pm">02 : 00 pm</option>
                        <option value="03:00pm">03 : 00 pm</option>
                        <option value="04:00pm">04 : 00 pm</option>
                        <option value="05:00pm">05 : 00 pm</option>
                        <option value="06:00pm">06 : 00 pm</option>
                        <option value="07:00pm">07 : 00 pm</option>
                        <option value="08:00pm">08 : 00 pm</option>
                        <option value="09:00pm">09 : 00 pm</option>
                        <option value="10:00pm">10 : 00 pm</option>
                      </select>
                      <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                    </div>
                  </div>

                  <textarea name="message" placeholder="Message" autoComplete="off" className="input-field"></textarea>

                  <button type="submit" className="btn btn-secondary">
                    <span className="text text-1">Book A Table</span>
                    <span className="text text-2" aria-hidden="true">Book A Table</span>
                  </button>
                </form>

                <div className="form-right text-center" style={{ backgroundImage: "url('/form-pattern.png')" }}>
                  <h2 className="headline-1 text-center">Contact Us</h2>
                  <p className="contact-label">Booking Request</p>
                  <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>
                  <div className="separator"></div>
                  <p className="contact-label">Location</p>
                  <address className="body-4">Restaurant St, Delicious City, <br />London 9578, UK</address>
                  <p className="contact-label">Lunch Time</p>
                  <p className="body-4">Monday to Sunday <br />11.00 am - 2.30pm</p>
                  <p className="contact-label">Dinner Time</p>
                  <p className="body-4">Monday to Sunday <br />05.00 pm - 10.00pm</p>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="section features text-center" aria-label="features">
            <div className="container">
              <p className="section-subtitle label-2">Why Choose Us</p>
              <h2 className="headline-1 section-title">Our Strength</h2>

              <ul className="grid-list">
                {[
                  { icon: 'features-icon-1.png', title: 'Hygienic Food', text: 'Lorem Ipsum is simply dummy printing and typesetting.' },
                  { icon: 'features-icon-2.png', title: 'Fresh Environment', text: 'Lorem Ipsum is simply dummy printing and typesetting.' },
                  { icon: 'features-icon-3.png', title: 'Skilled Chefs', text: 'Lorem Ipsum is simply dummy printing and typesetting.' },
                  { icon: 'features-icon-4.png', title: 'Event & Party', text: 'Lorem Ipsum is simply dummy printing and typesetting.' },
                ].map((item, idx) => (
                  <li key={idx} className="feature-item">
                    <div className="feature-card">
                      <div className="card-icon">
                        <Image src={`/${item.icon}`} width={100} height={80} loading="lazy" alt="icon" />
                      </div>
                      <h3 className="title-2 card-title">{item.title}</h3>
                      <p className="label-1 card-text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Image src="/shape-7.png" width={208} height={178} loading="lazy" alt="shape" className="shape shape-1" />
              <Image src="/shape-8.png" width={120} height={115} loading="lazy" alt="shape" className="shape shape-2" />
            </div>
          </section>

          {/* EVENT */}
          <section className="section event bg-black-10" aria-label="event">
            <div className="container">
              <p className="section-subtitle label-2 text-center">Recent Updates</p>
              <h2 className="section-title headline-1 text-center">Upcoming Event</h2>

              <ul className="grid-list">
                {[
                  { img: 'event-1.jpg', date: '2022-09-15', subtitle: 'Food, Flavour', title: "Flavour so good you'll try to eat with your eyes." },
                  { img: 'event-2.jpg', date: '2022-09-08', subtitle: 'Healthy Food', title: "Flavour so good you'll try to eat with your eyes." },
                  { img: 'event-3.jpg', date: '2022-09-03', subtitle: 'Recipie', title: "Flavour so good you'll try to eat with your eyes." },
                ].map((item, idx) => (
                  <li key={idx}>
                    <div className="event-card has-before hover:shine">
                      <div className="card-banner img-holder" style={{ '--width': '350', '--height': '450' }}>
                        <Image src={`/${item.img}`} width={350} height={450} loading="lazy" alt={item.title} className="img-cover" />
                        <time className="publish-date label-2" dateTime={item.date}>{new Date(item.date).toLocaleDateString('en-GB')}</time>
                      </div>
                      <div className="card-content">
                        <p className="card-subtitle label-2 text-center">{item.subtitle}</p>
                        <h3 className="card-title title-2 text-center">{item.title}</h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="#" className="btn btn-primary">
                <span className="text text-1">View Our Blog</span>
                <span className="text text-2" aria-hidden="true">View Our Blog</span>
              </a>
            </div>
          </section>
        </article>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
