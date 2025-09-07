'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { cn } from '@/lib/utils'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo,
  Link as LinkIcon,
  Image as ImageIcon
} from 'lucide-react'
import { useState } from 'react'

export interface RichTextEditorProps {
  content?: string
  onChange?: (content: string) => void
  placeholder?: string
  className?: string
  error?: string
  label?: string
}

export function RichTextEditor({
  content = '',
  onChange,
  placeholder = 'Start writing...',
  className,
  error,
  label
}: RichTextEditorProps) {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline',
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4',
      },
    },
  })

  const addLink = () => {
    if (linkUrl && editor) {
      editor.chain().focus().setLink({ href: linkUrl }).run()
      setLinkUrl('')
      setIsLinkModalOpen(false)
    }
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL:')
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  if (!editor) {
    return null
  }

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      {/* Toolbar */}
      <div className="border border-gray-300 rounded-t-md bg-gray-50 p-2 flex flex-wrap items-center gap-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={cn(
            'p-2 rounded hover:bg-gray-200 transition-colors',
            editor.isActive('bold') && 'bg-gray-200'
          )}
        >
          <Bold className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={cn(
            'p-2 rounded hover:bg-gray-200 transition-colors',
            editor.isActive('italic') && 'bg-gray-200'
          )}
        >
          <Italic className="h-4 w-4" />
        </button>
        
        <div className="w-px h-6 bg-gray-300 mx-1" />
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={cn(
            'p-2 rounded hover:bg-gray-200 transition-colors',
            editor.isActive('bulletList') && 'bg-gray-200'
          )}
        >
          <List className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={cn(
            'p-2 rounded hover:bg-gray-200 transition-colors',
            editor.isActive('orderedList') && 'bg-gray-200'
          )}
        >
          <ListOrdered className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={cn(
            'p-2 rounded hover:bg-gray-200 transition-colors',
            editor.isActive('blockquote') && 'bg-gray-200'
          )}
        >
          <Quote className="h-4 w-4" />
        </button>
        
        <div className="w-px h-6 bg-gray-300 mx-1" />
        
        <button
          type="button"
          onClick={() => setIsLinkModalOpen(true)}
          className={cn(
            'p-2 rounded hover:bg-gray-200 transition-colors',
            editor.isActive('link') && 'bg-gray-200'
          )}
        >
          <LinkIcon className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded hover:bg-gray-200 transition-colors"
        >
          <ImageIcon className="h-4 w-4" />
        </button>
        
        <div className="w-px h-6 bg-gray-300 mx-1" />
        
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          <Undo className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          <Redo className="h-4 w-4" />
        </button>
      </div>
      
      {/* Editor */}
      <div className={cn(
        'border border-t-0 border-gray-300 rounded-b-md min-h-[200px]',
        error && 'border-red-500'
      )}>
        <EditorContent editor={editor} />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Add Link</h3>
            <input
              type="url"
              placeholder="Enter URL"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              onKeyPress={(e) => e.key === 'Enter' && addLink()}
            />
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsLinkModalOpen(false)
                  setLinkUrl('')
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={addLink}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
