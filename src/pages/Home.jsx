import { Link } from 'react-router-dom';
import { Activity, Users, Clock, Heart, Shield, Phone, MapPin, Mail, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🏥 Trusted by 10,000+ Patients
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Health is Our <span className="text-primary">Top Priority</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            Experience world-class healthcare with our team of expert doctors and modern facilities. 
            Book your appointment today and take the first step towards a healthier life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/appointment" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition shadow-lg hover:shadow-xl">
              Book Appointment
            </Link>
            <Link to="/doctors" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
              View Doctors
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Specialists</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">10K+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">24/7</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Emergency Care</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
            <img 
              src="https://img.freepik.com/free-vector/doctor-patient-concept-illustration_114360-1083.jpg" 
              alt="Hospital" 
              className="w-full max-w-md rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Medical Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive healthcare services with state-of-the-art facilities and expert medical professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cardiology</h3>
              <p className="text-gray-600 dark:text-gray-300">Expert heart care with advanced diagnostic and treatment facilities.</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Neurology</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive brain and nervous system care by specialists.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pediatrics</h3>
              <p className="text-gray-600 dark:text-gray-300">Specialized healthcare for infants, children, and adolescents.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency</h3>
              <p className="text-gray-600 dark:text-gray-300">24/7 emergency services with rapid response teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose MediCare?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with compassionate care to deliver the best medical experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Medical Team</h3>
                <p className="text-gray-600 dark:text-gray-300">Highly qualified doctors and specialists with years of experience.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
                <p className="text-gray-600 dark:text-gray-300">State-of-the-art equipment and technology for accurate diagnosis.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-600 dark:text-gray-300">Round-the-clock emergency services and patient support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Read real experiences from patients who have received care at MediCare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "Excellent care! The doctors are very professional and the staff is helpful. I felt well taken care of throughout my treatment."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">JD</span>
                </div>
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "The emergency service is amazing! They treated my father immediately and saved his life. Highly recommend this hospital."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-secondary">SM</span>
                </div>
                <div>
                  <p className="font-bold">Sarah Miller</p>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "Great experience from start to finish. The appointment system is easy to use and the doctors are very knowledgeable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-orange-500">MK</span>
                </div>
                <div>
                  <p className="font-bold">Michael Kim</p>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT INFO ==================== */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div>
              <Mail className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-100">info@medicare.com</p>
            </div>
            <div>
              <MapPin className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100">123 Health Street, Medical City</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Book your appointment today and experience the best healthcare services in town.
          </p>
          <Link to="/appointment" className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 transition shadow-lg hover:shadow-xl inline-block">
            Book Your Appointment Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;