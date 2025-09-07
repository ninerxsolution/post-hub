import { User, Post, Category, Tag, Comment, UserRole, PostStatus, PostTag } from '@prisma/client'

// Extended types with relations
export type UserWithPosts = User & {
  posts: Post[]
}

export type PostWithAuthor = Post & {
  author: User
}

export type PostWithDetails = Post & {
  author: User
  category: Category | null
  tags: (PostTag & { tag: Tag })[]
}

export type CategoryWithPosts = Category & {
  posts: Post[]
  createdBy: User
}

export type TagWithPosts = Tag & {
  posts: (PostTag & { post: Post })[]
  createdBy: User
}

export type CommentWithAuthor = Comment & {
  author: User
  post: Post
}

// API Response types
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface CreatePostData {
  title: string
  content: string
  excerpt?: string
  featuredImageUrl?: string
  categoryId?: string
  tagIds?: string[]
  metaTitle?: string
  metaDescription?: string
}

export interface UpdatePostData extends Partial<CreatePostData> {
  id: string
}

export interface CreateUserData {
  email: string
  username: string
  fullName?: string
  bio?: string
  avatarUrl?: string
  socialLinks?: Record<string, string>
}

export interface UpdateUserData extends Partial<CreateUserData> {
  id: string
}

// Search and filter types
export interface PostFilters {
  category?: string
  tags?: string[]
  author?: string
  status?: PostStatus
  search?: string
  publishedAfter?: Date
  publishedBefore?: Date
}

export interface UserFilters {
  role?: UserRole
  isActive?: boolean
  search?: string
  createdAfter?: Date
  createdBefore?: Date
}

// Dashboard types
export interface DashboardStats {
  totalUsers: number
  totalPosts: number
  totalCategories: number
  totalTags: number
  publishedPosts: number
  draftPosts: number
  recentPosts: PostWithAuthor[]
  topAuthors: (User & { postCount: number })[]
}

// Re-export Prisma types
export type { User, Post, Category, Tag, Comment, UserRole, PostStatus }
