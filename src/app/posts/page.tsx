import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PostsPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All Posts
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover amazing content from our community of writers.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-500">
                No posts available yet. Be the first to share your story!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
