import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { Button } from '@/components/ui'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome back, {user.user_metadata?.full_name || user.email}!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/dashboard/posts/new">
                  Write New Post
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard/posts">
                  Manage Posts
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard/profile">
                  Edit Profile
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-500 text-sm">
                <p>No posts yet. Start writing your first post!</p>
              </div>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Posts:</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Views:</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">This Month:</span>
                  <span className="font-semibold">0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">1. Complete Your Profile</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Add a bio, profile picture, and social links to help readers connect with you.
                </p>
                <Link
                  href="/dashboard/profile"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Edit Profile →
                </Link>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">2. Write Your First Post</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Share your thoughts, experiences, or expertise with the PostHub community.
                </p>
                <Link
                  href="/dashboard/posts/new"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Start Writing →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
