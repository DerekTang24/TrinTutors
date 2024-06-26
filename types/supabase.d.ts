export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      assignment: {
        Row: {
          assigned: string | null;
          description: string | null;
          due: string | null;
          id: number;
          title: string;
          type: number | null;
        };
        Insert: {
          assigned?: string | null;
          description?: string | null;
          due?: string | null;
          id?: number;
          title: string;
          type?: number | null;
        };
        Update: {
          assigned?: string | null;
          description?: string | null;
          due?: string | null;
          id?: number;
          title?: string;
          type?: number | null;
        };
        Relationships: [];
      };
      classes: {
        Row: {
          id: number;
          subject: string;
        };
        Insert: {
          id?: number;
          subject: string;
        };
        Update: {
          id?: number;
          subject?: string;
        };
        Relationships: [];
      };
      roles: {
        Row: {
          id: number;
          role_name: string | null;
        };
        Insert: {
          id: number;
          role_name?: string | null;
        };
        Update: {
          id?: number;
          role_name?: string | null;
        };
        Relationships: [];
      };
      tutors: {
        Row: {
          experience: number;
          grade: number;
          id: string;
          name: string;
          subjects: string[] | null;
        };
        Insert: {
          experience: number;
          grade: number;
          id: string;
          name: string;
          subjects?: string[] | null;
        };
        Update: {
          experience?: number;
          grade?: number;
          id?: string;
          name?: string;
          subjects?: string[] | null;
        };
        Relationships: [
          {
            foreignKeyName: "tutors_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      user_classes: {
        Row: {
          class_id: number;
          user_id: string;
        };
        Insert: {
          class_id?: number;
          user_id?: string;
        };
        Update: {
          class_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_classes_class_id_fkey";
            columns: ["class_id"];
            isOneToOne: true;
            referencedRelation: "classes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "user_classes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      user_roles: {
        Row: {
          role_id: number;
          user_id: string;
        };
        Insert: {
          role_id: number;
          user_id?: string;
        };
        Update: {
          role_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_user_roles_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_user_roles_role_id_fkey";
            columns: ["role_id"];
            isOneToOne: false;
            referencedRelation: "roles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
