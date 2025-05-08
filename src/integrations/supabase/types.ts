export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          category: string
          content: string
          created_at: string
          date: string
          description: string
          id: string
          image_url: string
          published: boolean
          reading_time: string
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string
          date?: string
          description: string
          id?: string
          image_url: string
          published?: boolean
          reading_time: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          date?: string
          description?: string
          id?: string
          image_url?: string
          published?: boolean
          reading_time?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      audio_clips: {
        Row: {
          baby_age: string | null
          category: string
          clip_url: string
          created_at: string
          duration: number
          id: string
          is_anonymous: boolean
          moderated_at: string | null
          moderated_by: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          baby_age?: string | null
          category: string
          clip_url: string
          created_at?: string
          duration: number
          id?: string
          is_anonymous?: boolean
          moderated_at?: string | null
          moderated_by?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          baby_age?: string | null
          category?: string
          clip_url?: string
          created_at?: string
          duration?: number
          id?: string
          is_anonymous?: boolean
          moderated_at?: string | null
          moderated_by?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      banners: {
        Row: {
          active: boolean
          background_color: string
          content: string
          created_at: string
          expires_at: string | null
          id: string
          link_url: string | null
          priority: number
          text_color: string
        }
        Insert: {
          active?: boolean
          background_color?: string
          content: string
          created_at?: string
          expires_at?: string | null
          id?: string
          link_url?: string | null
          priority?: number
          text_color?: string
        }
        Update: {
          active?: boolean
          background_color?: string
          content?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          link_url?: string | null
          priority?: number
          text_color?: string
        }
        Relationships: []
      }
      clip_comments: {
        Row: {
          clip_id: string
          content: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          clip_id: string
          content: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          clip_id?: string
          content?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clip_comments_clip_id_fkey"
            columns: ["clip_id"]
            isOneToOne: false
            referencedRelation: "audio_clips"
            referencedColumns: ["id"]
          },
        ]
      }
      clip_reactions: {
        Row: {
          clip_id: string
          created_at: string
          id: string
          reaction_type: string
          user_id: string
        }
        Insert: {
          clip_id: string
          created_at?: string
          id?: string
          reaction_type: string
          user_id: string
        }
        Update: {
          clip_id?: string
          created_at?: string
          id?: string
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clip_reactions_clip_id_fkey"
            columns: ["clip_id"]
            isOneToOne: false
            referencedRelation: "audio_clips"
            referencedColumns: ["id"]
          },
        ]
      }
      coming_soon_email_signups: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          user_id: string | null
          visible: boolean
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          user_id?: string | null
          visible?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          user_id?: string | null
          visible?: boolean
        }
        Relationships: []
      }
      feedback_responses: {
        Row: {
          created_at: string
          feedback_id: string
          id: string
          response: string
          user_id: string
        }
        Insert: {
          created_at?: string
          feedback_id: string
          id?: string
          response: string
          user_id: string
        }
        Update: {
          created_at?: string
          feedback_id?: string
          id?: string
          response?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "feedback_responses_feedback_id_fkey"
            columns: ["feedback_id"]
            isOneToOne: false
            referencedRelation: "feedback"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string
          id: string
          room_id: string | null
          user_id: string
          Username_For_Message: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          room_id?: string | null
          user_id: string
          Username_For_Message?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          room_id?: string | null
          user_id?: string
          Username_For_Message?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          baby_birthdate: string | null
          baby_due_date: string | null
          bio: string | null
          blur_avatar: boolean | null
          created_at: string
          currently_awake: boolean
          display_name: string | null
          has_seen_tutorial: boolean | null
          id: string
          timezone: string | null
          updated_at: string
          username: string
          username_last_changed: string | null
        }
        Insert: {
          avatar_url?: string | null
          baby_birthdate?: string | null
          baby_due_date?: string | null
          bio?: string | null
          blur_avatar?: boolean | null
          created_at?: string
          currently_awake?: boolean
          display_name?: string | null
          has_seen_tutorial?: boolean | null
          id: string
          timezone?: string | null
          updated_at?: string
          username: string
          username_last_changed?: string | null
        }
        Update: {
          avatar_url?: string | null
          baby_birthdate?: string | null
          baby_due_date?: string | null
          bio?: string | null
          blur_avatar?: boolean | null
          created_at?: string
          currently_awake?: boolean
          display_name?: string | null
          has_seen_tutorial?: boolean | null
          id?: string
          timezone?: string | null
          updated_at?: string
          username?: string
          username_last_changed?: string | null
        }
        Relationships: []
      }
      reported_messages: {
        Row: {
          id: string
          message_author_id: string
          message_id: string
          notes: string | null
          reason: string
          reported_at: string
          reporter_id: string
          status: string
        }
        Insert: {
          id?: string
          message_author_id: string
          message_id: string
          notes?: string | null
          reason: string
          reported_at?: string
          reporter_id: string
          status?: string
        }
        Update: {
          id?: string
          message_author_id?: string
          message_id?: string
          notes?: string | null
          reason?: string
          reported_at?: string
          reporter_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "reported_messages_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_column_if_not_exists: {
        Args: {
          table_name: string
          column_name: string
          column_type: string
          default_value?: string
        }
        Returns: undefined
      }
      column_exists: {
        Args: { table_name: string; column_name: string }
        Returns: boolean
      }
      get_messages_with_profiles: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          content: string
          created_at: string
          user_id: string
          username: string
          avatar_url: string
          room_id: string
          is_verified: boolean
        }[]
      }
      get_user_role: {
        Args: { user_id: string }
        Returns: string
      }
      has_role: {
        Args: { user_id: string; role_name: string }
        Returns: boolean
      }
      is_verified: {
        Args: { user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
