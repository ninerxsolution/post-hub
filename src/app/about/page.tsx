import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About PostHub</h1>
            
            <p className="text-xl text-gray-600 mb-6">
              PostHub is a Medium-inspired multi-tenant blogging platform designed to empower writers 
              and connect them with readers who share their passions.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that everyone has a story worth telling. Our platform provides the tools and 
              community support needed to help writers share their knowledge, experiences, and creativity 
              with the world.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Makes Us Different</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Clean, distraction-free writing experience</li>
              <li>Built-in community features for engagement</li>
              <li>Fast, reliable platform with modern technology</li>
              <li>SEO-optimized for maximum content discoverability</li>
              <li>Mobile-first design for reading anywhere</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Join Our Community</h2>
            <p className="text-gray-600">
              Whether you&apos;re a seasoned writer or just starting out, PostHub welcomes you. 
              Start sharing your story today and connect with readers who matter.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
