import React from 'react';
import {
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
  IndianRupee,
  GraduationCap,
  Users,
  Phone,
  Mail,
  Star,
  Award,
  BookOpen,
  Palette
} from 'lucide-react';
import mentorImage from './assets/images/mentor.png';
import heroBg from './assets/images/hero_background.webp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/100 to-white/80"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              First Time in India
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              1-Day <span className="text-orange-500 mb-4">Manga Art</span><br />Certified Workshop
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
              Learn authentic Japanese Manga Art techniques without traveling to Japan
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              For the first time in Hyderabad, immerse yourself in the world of Manga with expert mentors from Japan.
              In just one day, discover the techniques, styles, and secrets that have shaped generations of Manga artists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Register Now - <span className="line-through">₹4,999</span> ₹1,999 Only
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Workshop Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Date</h3>
                <p className="text-gray-600 text-lg">23rd August</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 text-lg">IACG Multimedia College, Jubilee Hills</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Time</h3>
                <p className="text-gray-600 text-lg">10 AM – 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Highlights */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Workshop <span className="text-orange-500">Highlights</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-8 rounded-2xl shadow-lg">
              <CheckCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Japanese Mentorship</h3>
                <p className="text-gray-600">Learn from the mentors of Kyoto Seika University with authentic Japanese techniques</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-8 rounded-2xl shadow-lg">
              <CheckCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Official Certification</h3>
                <p className="text-gray-600">Receive an official Certificate of Completion to enhance your portfolio</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-8 rounded-2xl shadow-lg">
              <CheckCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">All-Inclusive Package</h3>
                <p className="text-gray-600">Lunch & all workshop materials included - just bring your creativity!</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-8 rounded-2xl shadow-lg">
              <CheckCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Learning</h3>
                <p className="text-gray-600">Hands-on training session with personalized guidance and feedback</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl font-bold text-gray-900 mb-8">
              Don't miss this chance to train with Japan's Mentor right here in Hyderabad!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Secure Your Spot Now
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Limited Time Offer
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-white/70 text-lg mb-2">Regular Price</p>
                <p className="text-4xl font-bold line-through text-white/60">₹4,999</p>
              </div>
              <div className="text-6xl font-light text-white/40 transform md:rotate-0 rotate-90">→</div>
              <div className="text-center">
                <p className="text-white/70 text-lg mb-2">Workshop Price</p>
                <p className="text-6xl md:text-7xl font-bold text-white">₹1,999</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-2xl p-6 mb-8">
              <p className="text-2xl font-bold mb-2">You Save ₹3,000!</p>
              <p className="text-lg text-white/90">That's 60% off the regular price</p>
            </div>
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Register Now & Save ₹3,000
            </button>
          </div>
        </div>
      </section>

      {/* Meet Your Mentor */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your <span className="text-orange-500">Mentor</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-8">
                  <img src={mentorImage} alt="Mentor" className="w-29 h-29 rounded-full object-cover block mb-0.5 mr-0.5" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Ryoto</h3>
                <div className="flex items-center gap-2 text-orange-500 mb-6">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-medium">Kyoto Seika University Graduate</span>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ryoto is a skilled manga artist represented by <strong>Kyoto Seika University, Japan's only university
                    with a dedicated Faculty of Manga</strong>. He brings authentic Japanese art techniques and global
                  creative insights to students in India.
                </p>
                <div className="mt-8 p-6 bg-orange-50 rounded-2xl">
                  <p className="text-orange-800 font-medium">
                    "Learn the traditional manga techniques that have been passed down through generations
                    of Japanese artists, combined with modern storytelling approaches."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About University */}
      <section className="py-20 px-4 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/qrhdfn0000000axl.jpg)' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-orange-500">Kyoto Seika University</span>
            </h2>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Founded in 1968</h3>
                    <p className="text-gray-600">Kyoto, Japan</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Kyoto Seika University is the world's first university to promote Manga & Anime in Japan. Renowned for its faculties in Art, Design, Manga, Media Creation, and Global Culture, it blends tradition with innovation to inspire creativity worldwide.
                  In collaboration with IACG Multimedia College, Kyoto Seika recently shared artistic expertise through a cultural exchange and student tour to Japan, giving learners a unique global creative experience.
                </p>

                <div className="bg-orange-50 p-6 rounded-2xl">
                  <Award className="w-8 h-8 text-orange-500 mb-4" />
                  <p className="text-orange-800 font-semibold">
                    The only university in Japan to have a Faculty of Manga
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-8">
                  <h4 className="text-2xl font-bold mb-4">World-Class Recognition</h4>
                  <p className="text-orange-100 leading-relaxed">
                    Closely connected to the Kyoto International Manga Museum, home to the world's largest
                    manga collection, reinforcing its leadership in manga culture and study.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Specialized Manga Faculty</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Global Creative Insights</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Traditional Japanese Techniques</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who is this Workshop <span className="text-orange-500">For?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a complete beginner or an experienced artist, this workshop is designed for anyone passionate about manga art
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg">
              <GraduationCap className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design Students</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Students pursuing design careers</li>
                <li>• Portfolio enhancement</li>
                <li>• College application support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg">
              <Palette className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Artists & Creators</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Aspiring manga artists</li>
                <li>• Illustrators and comic creators</li>
                <li>• Digital/traditional artists</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enthusiasts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Anime and manga fans</li>
                <li>• Hobbyists and beginners</li>
                <li>• Anyone passionate about art</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-orange-500 text-white p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">No Age Restrictions!</h3>
              <p className="text-orange-100 text-lg">
                Anyone with a passion for art can join. No prior drawing experience required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/images/workshop sample.jpg" 
            alt="Workshop background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key <span className="text-orange-500">Takeaways</span> from the Workshop
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">G-pen Experience (Ink Manga Pen)</h3>
              <p className="text-gray-600 leading-relaxed">
                Hands-on practice using professional manga inking tools to master authentic Japanese drawing techniques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Line Art, Strokes & Patterns</h3>
              <p className="text-gray-600 leading-relaxed">
                Learning clean line work and texture techniques essential for professional manga illustration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manga Character Designs</h3>
              <p className="text-gray-600 leading-relaxed">
                Understanding and drawing characters from scratch using traditional Japanese manga principles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bringing Reference Manga and Copying Them</h3>
              <p className="text-gray-600 leading-relaxed">
                Studying and replicating styles from real manga to understand different artistic approaches and techniques.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <img 
                src="/images/workshop sample.jpg" 
                alt="Workshop sample artwork" 
                className="w-full rounded-2xl shadow-xl border-4 border-white"
              />
              <p className="text-gray-600 mt-4 italic">Sample artwork from previous workshop sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Do I need any prior drawing experience to join this workshop?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No, you don't need any prior experience to join. This workshop is designed for both beginners and experienced artists.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What materials or tools should I bring for the workshop?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You don't need to bring anything. All materials and tools will be provided by us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Will I receive a certificate after completing the workshop?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! You will receive an official certificate from Kyoto Seika University in collaboration with IACG College.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Who will be conducting the training, and what is their background?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The workshop is organized by IACG (International Academy of Computer Graphics) to promote Manga Art in India.
                IACG is a renowned multimedia institution with over 23 years of experience in Animation, VFX, Gaming, Art & Design,
                Graphic Design, Filmmaking, UI/UX, and Digital Marketing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We have contributed to blockbuster films like Baahubali 2, KGF 2, and RRR. IACG is also the only college in India
                certified by the international body "The Rookies."
              </p>
              <p className="text-gray-600 leading-relaxed">
                Your mentor, Ryoto, is trained at Kyoto Seika University—Japan's only university with a dedicated Faculty of Manga.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What age group can participate in this workshop?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                There are no age restrictions—anyone with a passion for art can join!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Master Manga Art?
          </h2>
          <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of artists who have already transformed their creative journey.
            Limited seats available!
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-6">Workshop Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span>23rd August 2024</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span>10 AM – 5 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>IACG Multimedia College, Jubilee Hills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="w-5 h-5" />
                    <span className="line-through text-white/60">₹4,999</span>
                    <span className="text-2xl font-bold">₹1,999</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Expert Japanese mentorship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Official certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>All materials included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Lunch provided</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-white text-orange-500 hover:bg-gray-100 px-12 py-6 rounded-xl font-bold text-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-8">
            Register Now - <span className="line-through">₹4,999</span> ₹1,999 Only
          </button>

          <p className="text-orange-200">
            Questions? Call us at <span className="font-bold text-white">9100654072</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">1-Day Manga Art Workshop</h3>
              <p className="text-gray-400 leading-relaxed">
                Learn authentic Japanese Manga Art techniques from Kyoto Seika University-trained mentors
                right here in Hyderabad.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Workshop Details</h4>
              <div className="space-y-3 text-gray-400">
                <p><strong className="text-white">Date:</strong> 23rd August 2024</p>
                <p><strong className="text-white">Time:</strong> 10 AM – 5 PM</p>
                <p><strong className="text-white">Venue:</strong> IACG Multimedia College, Jubilee Hills</p>
                <p><strong className="text-white">Fee:</strong> ₹1,999 (Save ₹3,000)</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>9100654072</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>info@iacg.co.in</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span>www.iacg.co.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 IACG International Academy of Computer Graphics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;