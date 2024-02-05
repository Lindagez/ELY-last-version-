import React from 'react'
import "./About.css"
import Nav from '../../Landing/nav';

const About = () => {
    return (
        <>
        <Nav/>
            <section class="h-screen bg-cover bg-center flex about-background  flex-col justify-center items-center"
                style={{ backgroundImage: " url('https://th.bing.com/th/id/R.a3ceb6dc2c8105e3d2455f72c613c2c6?rik=oEphWqFqWyoy%2fg&pid=ImgRaw&r=0')" }}>
                <div className='about-landing-overlay'>
                    <h1 class="text-4xl text-white font-bold mb-6">Start exploring ELY Resale-Realm today</h1>
                    <a href="/dashboard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop Now</a>
                </div>
            </section>
            
            <section class="bg-gray-100 py-12">
                <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 text-center rounded-lg shadow-lg">
                        <i class="fas fa-shipping-fast text-5xl text-blue-500 mb-6"></i>
                        <h2 class="text-xl font-bold mb-4">Easy to Use</h2>
                        <p class="text-gray-600"> Our platform is designed with simplicity in mind</p>
                    </div>
                    <div class="bg-white p-8 text-center rounded-lg shadow-lg">
                        <i class="fas fa-credit-card text-5xl text-blue-500 mb-6"></i>
                        <h2 class="text-xl font-bold mb-4">Environmentally Friendly</h2>
                        <p class="text-gray-600">By buying and selling second-hand, you're contributing to a more sustainable future. </p>
                    </div>
                    <div class="bg-white p-8 text-center rounded-lg shadow-lg">
                        <i class="fas fa-headset text-5xl text-blue-500 mb-6"></i>
                        <h2 class="text-xl font-bold mb-4">24/7 Customer Support</h2>
                        <p class="text-gray-600">Our friendly support team is ready to assist you at any time.</p>
                    </div>
                </div>
            </section>
            <div class="individual-feature bg-gray-200 py-20">
                <div class="container mx-auto flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2">
                        <img src="https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png" />
                    </div>
                    <div class="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                        <h2 class="text-gray-600 mb-6">Welcome to ELY Resale-Realm, where we make buying and selling pre-owned items a breeze!</h2>
                    </div>
                </div>
            </div>
            <section>

                <div class="individual-feature bg-gray-100 py-20">
                    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center">
                        <div class="md:w-1/2 md:mr-8 mt-8 md:mt-0">
                            <p class="text-gray-600 mb-6">At  ELY Resale-Realm,  we believe in the power of giving new life to the things you no longer need, and finding treasures in what others have to offer. Our platform was born out of a passion for sustainability, affordability, and convenience.</p>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section class="bg-gray-200 py-12">
                {/* <h2 class="text-xl font-bold mb-4">Feature 2 Title</h2> */}

                <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <img src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg" />
                        <p class="text-gray-600 mb-4"> To connect sellers and buyers in a secure and user-friendly environment. </p>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <img src="https://www.wagento.com/wp-content/uploads/2022/08/How-Does-Augmented-Reality-Help-Make-eCommerce-More-Efficient.jpg" alt="Feature Image" class="float-right w-1/2 ml-8 mb-4" />
                        <p class="text-gray-600 mb-4">We strive to reduce waste, save you money, and make it easy for you to find the perfect second-hand item or sell what you no longer use.</p>
                    </div>
                </div>
            </section>

            <section class="bg-gray-100 py-12">
                <div class="row w-100 flex justify-content-center align-items-center px-4">
                    <div class="bg-white rounded-lg shadow-lg col-xl-3 col-lg-4 col-md-6  col-sm-10 col-xs-11 px-3 py-3 mx-3 my-3">
                        <i class="fas fa-quote-left text-blue-500 text-3xl mb-4"></i>
                        <p class="text-gray-600 mb-6">"We invite you to join our growing community of smart shoppers and responsible sellers. Whether you're downsizing, upgrading, or simply on the hunt for a great deal,ELY Resale-Realm is here to serve your needs."</p>
                        <div className='flex justify-content-end w-100'><i class="fas fa-quote-right text-blue-500 text-3xl mb-4"></i></div>
                        <div class=" items-center">
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           

            {/* <!-- Newsletter Subscription Section --> */}
            <section class="bg-gray-100 py-12">
                <div class="container mx-auto text-center">
                    <h2 class="text-2xl font-bold mb-4">Thank you for choosing us as your trusted resale partner. Together, we can make a positive impact on both your wallet and the planet.</h2>
                    {/* <p class="text-gray-600 mb-8">Stay up to date with our latest offers and news.</p> */}

                </div>
            </section>
        
 


        </>
    )
}

export default About