export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          slug: string
          published: boolean
          created_at: string
          updated_at: string
          tags: string[]
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          slug: string
          published?: boolean
          created_at?: string
          updated_at?: string
          tags?: string[]
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          slug?: string
          published?: boolean
          created_at?: string
          updated_at?: string
          tags?: string[]
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 