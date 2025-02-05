import {Link} from 'react-router-dom'
function Footer() {
    return (
        <footer>
            {/* Subfooter section */}
            <div className="grid grid-cols-1 gap-5 px-10 sm:px-20 md:px-20 sm:grid-cols-1 md:grid-cols-3 text-center bg-blue-50">
                <div className="card border p-2 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <i class="fa-solid fa-hand-holding-dollar block mx-auto text-2xl my-4"></i>
                    <h3 className="font-bold mb-2">Innovation & Technology</h3>
                    <p className="leading-relaxed">🚀
                        Explore cutting-edge solutions in software development, AI, and emerging technologies. Bringing innovative ideas to life with advanced programming skills.
                    </p>
                    <a href="#" className="my-2 block underline my-auto">Learn More</a>
                </div>
                <div className="card border p-2 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <i class="fa-solid fa-chalkboard-user block mx-auto text-2xl my-4"></i>
                    <h3 className="font-bold mb-2">Mentorship & Leadership</h3>
                    <p className="leading-relaxed">🎓
                        Empowering youth through guidance, mentorship, and leadership coaching. Inspiring the next generation to reach their full potential.
                    </p>
                    <a href="#" className="my-2 block underline mt-auto block">Learn More</a>
                </div>
                <div className="card border p-2 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <i class="fa-solid fa-video block mx-auto text-2xl my-4"></i>
                    <h3 className="font-bold mb-2">Creative Content & Media</h3>
                    <p className="leading-relaxed">🎬
                        Engaging and impactful content for digital platforms. YouTube storytelling, motivational talks, and tech-based educational programs.
                    </p>
                    <a href="#" className="my-2 block underline mt-auto block">Learn More</a>
                </div>
               
            </div>
            {/* Footer section */}
            <div>
                <div className='grid grid-cols md:grid-cols-3 px-2 md:p-10'>
                    <div className="">
                        <h1 className="font-bold">Mohidin Portfolio</h1>
                        <p>Follow my journey of tech, leadership, and creativity.</p>
                        <h2 className='font-bold'>🌍 Social Links:</h2>
                        <i className="fa-brands fa-twitter px-1"></i>
                        <i className="fa-brands fa-facebook px-1"></i>
                        <i className="fa-brands fa-youtube px-1"></i>
                        <i className="fa-brands fa-instagram px-1"></i>
                    </div>
                    <ul>
                        <h1 className="font-bold">Quick Links:</h1>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <div>
                        <h2>📩 Subscribe for Insights & Updates</h2>
                    </div>

                </div>
                <p className='text-center'>© 2025 Mohidin. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
