import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CategoriesPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Categories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore content by category.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-500">
                Categories will be available once content is published.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
