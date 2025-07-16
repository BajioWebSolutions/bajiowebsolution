export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      blog_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      blog_comments: {
        Row: {
          author_email: string | null
          author_name: string | null
          content: string
          created_at: string
          id: string
          is_approved: boolean | null
          parent_id: string | null
          post_id: string
          user_id: string | null
        }
        Insert: {
          author_email?: string | null
          author_name?: string | null
          content: string
          created_at?: string
          id?: string
          is_approved?: boolean | null
          parent_id?: string | null
          post_id: string
          user_id?: string | null
        }
        Update: {
          author_email?: string | null
          author_name?: string | null
          content?: string
          created_at?: string
          id?: string
          is_approved?: boolean | null
          parent_id?: string | null
          post_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "blog_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_id: string
          category_id: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          is_published: boolean | null
          published_at: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          category_id?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          category_id?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          created_at: string
          id: string
          is_featured: boolean | null
          logo_url: string | null
          name: string
          order_index: number | null
          website_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_featured?: boolean | null
          logo_url?: string | null
          name: string
          order_index?: number | null
          website_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_featured?: boolean | null
          logo_url?: string | null
          name?: string
          order_index?: number | null
          website_url?: string | null
        }
        Relationships: []
      }
      communication_templates: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          language_code: string
          message_content: string
          subject: string | null
          template_category: string
          template_key: string
          updated_at: string | null
          usage_count: number | null
          variables: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          language_code: string
          message_content: string
          subject?: string | null
          template_category: string
          template_key: string
          updated_at?: string | null
          usage_count?: number | null
          variables?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          language_code?: string
          message_content?: string
          subject?: string | null
          template_category?: string
          template_key?: string
          updated_at?: string | null
          usage_count?: number | null
          variables?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "communication_templates_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "supported_languages"
            referencedColumns: ["language_code"]
          },
        ]
      }
      company_stats: {
        Row: {
          created_at: string
          icon: string | null
          id: string
          is_featured: boolean | null
          order_index: number | null
          title: string
          value: string
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          order_index?: number | null
          title: string
          value: string
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          order_index?: number | null
          title?: string
          value?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          company: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          is_read: boolean | null
          message: string
          phone: string | null
          project_type: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          is_read?: boolean | null
          message: string
          phone?: string | null
          project_type?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          is_read?: boolean | null
          message?: string
          phone?: string | null
          project_type?: string | null
        }
        Relationships: []
      }
      customer_communications: {
        Row: {
          attachments: Json | null
          automated_message: boolean | null
          communication_type: string
          created_at: string | null
          customer_name: string | null
          customer_phone: string | null
          delivery_order_id: string | null
          direction: string
          id: string
          message_content: string | null
          message_status: string | null
          original_language: string | null
          read_at: string | null
          requires_response: boolean | null
          responded_at: string | null
          response_deadline: string | null
          template_used: string | null
          translated_language: string | null
          translation_provided: boolean | null
          user_id: string | null
        }
        Insert: {
          attachments?: Json | null
          automated_message?: boolean | null
          communication_type: string
          created_at?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          delivery_order_id?: string | null
          direction: string
          id?: string
          message_content?: string | null
          message_status?: string | null
          original_language?: string | null
          read_at?: string | null
          requires_response?: boolean | null
          responded_at?: string | null
          response_deadline?: string | null
          template_used?: string | null
          translated_language?: string | null
          translation_provided?: boolean | null
          user_id?: string | null
        }
        Update: {
          attachments?: Json | null
          automated_message?: boolean | null
          communication_type?: string
          created_at?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          delivery_order_id?: string | null
          direction?: string
          id?: string
          message_content?: string | null
          message_status?: string | null
          original_language?: string | null
          read_at?: string | null
          requires_response?: boolean | null
          responded_at?: string | null
          response_deadline?: string | null
          template_used?: string | null
          translated_language?: string | null
          translation_provided?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_communications_delivery_order_id_fkey"
            columns: ["delivery_order_id"]
            isOneToOne: false
            referencedRelation: "delivery_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_feedback: {
        Row: {
          app_rating: number | null
          communication_rating: number | null
          created_at: string | null
          customer_comment: string | null
          customer_rating: number | null
          delivery_order_id: string | null
          delivery_rating: number | null
          feedback_categories: Json | null
          food_quality_rating: number | null
          id: string
          timeliness_rating: number | null
          tip_amount: number | null
          user_id: string | null
          would_order_again: boolean | null
        }
        Insert: {
          app_rating?: number | null
          communication_rating?: number | null
          created_at?: string | null
          customer_comment?: string | null
          customer_rating?: number | null
          delivery_order_id?: string | null
          delivery_rating?: number | null
          feedback_categories?: Json | null
          food_quality_rating?: number | null
          id?: string
          timeliness_rating?: number | null
          tip_amount?: number | null
          user_id?: string | null
          would_order_again?: boolean | null
        }
        Update: {
          app_rating?: number | null
          communication_rating?: number | null
          created_at?: string | null
          customer_comment?: string | null
          customer_rating?: number | null
          delivery_order_id?: string | null
          delivery_rating?: number | null
          feedback_categories?: Json | null
          food_quality_rating?: number | null
          id?: string
          timeliness_rating?: number | null
          tip_amount?: number | null
          user_id?: string | null
          would_order_again?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_feedback_delivery_order_id_fkey"
            columns: ["delivery_order_id"]
            isOneToOne: false
            referencedRelation: "delivery_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_analytics: {
        Row: {
          average_order_value: number | null
          average_rating: number | null
          average_tip: number | null
          busy_zones: Json | null
          cancelled_orders: number | null
          completed_orders: number | null
          created_at: string | null
          date: string
          fuel_cost: number | null
          id: string
          peak_hours: Json | null
          service_platform: string
          total_active_time_minutes: number | null
          total_distance_miles: number | null
          total_earnings: number | null
          total_orders: number | null
          updated_at: string | null
          user_id: string | null
          vehicle_maintenance_cost: number | null
        }
        Insert: {
          average_order_value?: number | null
          average_rating?: number | null
          average_tip?: number | null
          busy_zones?: Json | null
          cancelled_orders?: number | null
          completed_orders?: number | null
          created_at?: string | null
          date: string
          fuel_cost?: number | null
          id?: string
          peak_hours?: Json | null
          service_platform: string
          total_active_time_minutes?: number | null
          total_distance_miles?: number | null
          total_earnings?: number | null
          total_orders?: number | null
          updated_at?: string | null
          user_id?: string | null
          vehicle_maintenance_cost?: number | null
        }
        Update: {
          average_order_value?: number | null
          average_rating?: number | null
          average_tip?: number | null
          busy_zones?: Json | null
          cancelled_orders?: number | null
          completed_orders?: number | null
          created_at?: string | null
          date?: string
          fuel_cost?: number | null
          id?: string
          peak_hours?: Json | null
          service_platform?: string
          total_active_time_minutes?: number | null
          total_distance_miles?: number | null
          total_earnings?: number | null
          total_orders?: number | null
          updated_at?: string | null
          user_id?: string | null
          vehicle_maintenance_cost?: number | null
        }
        Relationships: []
      }
      delivery_orders: {
        Row: {
          accepted_at: string | null
          actual_duration_minutes: number | null
          created_at: string | null
          customer_name: string | null
          customer_phone: string | null
          customer_rating: number | null
          delivered_at: string | null
          delivery_address: string
          delivery_fee: number | null
          distance_miles: number | null
          driver_notes: string | null
          estimated_duration_minutes: number | null
          id: string
          order_items: Json | null
          order_number: string
          order_status: string | null
          order_type: string | null
          order_value: number | null
          picked_up_at: string | null
          pickup_address: string
          priority_level: string | null
          service_platform: string
          special_instructions: string | null
          tip_amount: number | null
          total_earnings: number | null
          traffic_conditions: string | null
          updated_at: string | null
          user_id: string | null
          weather_conditions: string | null
        }
        Insert: {
          accepted_at?: string | null
          actual_duration_minutes?: number | null
          created_at?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          customer_rating?: number | null
          delivered_at?: string | null
          delivery_address: string
          delivery_fee?: number | null
          distance_miles?: number | null
          driver_notes?: string | null
          estimated_duration_minutes?: number | null
          id?: string
          order_items?: Json | null
          order_number: string
          order_status?: string | null
          order_type?: string | null
          order_value?: number | null
          picked_up_at?: string | null
          pickup_address: string
          priority_level?: string | null
          service_platform: string
          special_instructions?: string | null
          tip_amount?: number | null
          total_earnings?: number | null
          traffic_conditions?: string | null
          updated_at?: string | null
          user_id?: string | null
          weather_conditions?: string | null
        }
        Update: {
          accepted_at?: string | null
          actual_duration_minutes?: number | null
          created_at?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          customer_rating?: number | null
          delivered_at?: string | null
          delivery_address?: string
          delivery_fee?: number | null
          distance_miles?: number | null
          driver_notes?: string | null
          estimated_duration_minutes?: number | null
          id?: string
          order_items?: Json | null
          order_number?: string
          order_status?: string | null
          order_type?: string | null
          order_value?: number | null
          picked_up_at?: string | null
          pickup_address?: string
          priority_level?: string | null
          service_platform?: string
          special_instructions?: string | null
          tip_amount?: number | null
          total_earnings?: number | null
          traffic_conditions?: string | null
          updated_at?: string | null
          user_id?: string | null
          weather_conditions?: string | null
        }
        Relationships: []
      }
      delivery_performance_metrics: {
        Row: {
          acceptance_rate: number | null
          active_hours: number | null
          average_customer_rating: number | null
          average_delivery_time_minutes: number | null
          average_distance_per_delivery: number | null
          average_earnings_per_delivery: number | null
          average_earnings_per_hour: number | null
          cancellation_rate: number | null
          completion_rate: number | null
          created_at: string | null
          date: string
          five_star_ratings: number | null
          four_star_ratings: number | null
          id: string
          longest_delivery_time_minutes: number | null
          on_time_delivery_rate: number | null
          one_star_ratings: number | null
          orders_accepted: number | null
          orders_completed: number | null
          orders_declined: number | null
          peak_hour_earnings: number | null
          peak_hours_worked: number | null
          service_platform: string
          shortest_delivery_time_minutes: number | null
          three_star_ratings: number | null
          total_customer_ratings: number | null
          total_earnings: number | null
          total_miles_driven: number | null
          total_tips: number | null
          two_star_ratings: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          acceptance_rate?: number | null
          active_hours?: number | null
          average_customer_rating?: number | null
          average_delivery_time_minutes?: number | null
          average_distance_per_delivery?: number | null
          average_earnings_per_delivery?: number | null
          average_earnings_per_hour?: number | null
          cancellation_rate?: number | null
          completion_rate?: number | null
          created_at?: string | null
          date: string
          five_star_ratings?: number | null
          four_star_ratings?: number | null
          id?: string
          longest_delivery_time_minutes?: number | null
          on_time_delivery_rate?: number | null
          one_star_ratings?: number | null
          orders_accepted?: number | null
          orders_completed?: number | null
          orders_declined?: number | null
          peak_hour_earnings?: number | null
          peak_hours_worked?: number | null
          service_platform: string
          shortest_delivery_time_minutes?: number | null
          three_star_ratings?: number | null
          total_customer_ratings?: number | null
          total_earnings?: number | null
          total_miles_driven?: number | null
          total_tips?: number | null
          two_star_ratings?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          acceptance_rate?: number | null
          active_hours?: number | null
          average_customer_rating?: number | null
          average_delivery_time_minutes?: number | null
          average_distance_per_delivery?: number | null
          average_earnings_per_delivery?: number | null
          average_earnings_per_hour?: number | null
          cancellation_rate?: number | null
          completion_rate?: number | null
          created_at?: string | null
          date?: string
          five_star_ratings?: number | null
          four_star_ratings?: number | null
          id?: string
          longest_delivery_time_minutes?: number | null
          on_time_delivery_rate?: number | null
          one_star_ratings?: number | null
          orders_accepted?: number | null
          orders_completed?: number | null
          orders_declined?: number | null
          peak_hour_earnings?: number | null
          peak_hours_worked?: number | null
          service_platform?: string
          shortest_delivery_time_minutes?: number | null
          three_star_ratings?: number | null
          total_customer_ratings?: number | null
          total_earnings?: number | null
          total_miles_driven?: number | null
          total_tips?: number | null
          two_star_ratings?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      delivery_prediction_models: {
        Row: {
          accuracy_score: number | null
          created_at: string | null
          features_used: Json | null
          id: string
          is_active: boolean | null
          last_trained_at: string | null
          model_name: string
          model_parameters: Json | null
          model_type: string
          model_version: string
          training_data_size: number | null
          updated_at: string | null
        }
        Insert: {
          accuracy_score?: number | null
          created_at?: string | null
          features_used?: Json | null
          id?: string
          is_active?: boolean | null
          last_trained_at?: string | null
          model_name: string
          model_parameters?: Json | null
          model_type: string
          model_version: string
          training_data_size?: number | null
          updated_at?: string | null
        }
        Update: {
          accuracy_score?: number | null
          created_at?: string | null
          features_used?: Json | null
          id?: string
          is_active?: boolean | null
          last_trained_at?: string | null
          model_name?: string
          model_parameters?: Json | null
          model_type?: string
          model_version?: string
          training_data_size?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      delivery_predictions: {
        Row: {
          actual_value: number | null
          confidence_score: number | null
          created_at: string | null
          delivery_order_id: string | null
          demand_impact: number | null
          factors_considered: Json | null
          id: string
          model_id: string | null
          predicted_value: number
          prediction_accuracy: number | null
          prediction_type: string
          traffic_impact: number | null
          user_id: string | null
          validated_at: string | null
          weather_impact: number | null
        }
        Insert: {
          actual_value?: number | null
          confidence_score?: number | null
          created_at?: string | null
          delivery_order_id?: string | null
          demand_impact?: number | null
          factors_considered?: Json | null
          id?: string
          model_id?: string | null
          predicted_value: number
          prediction_accuracy?: number | null
          prediction_type: string
          traffic_impact?: number | null
          user_id?: string | null
          validated_at?: string | null
          weather_impact?: number | null
        }
        Update: {
          actual_value?: number | null
          confidence_score?: number | null
          created_at?: string | null
          delivery_order_id?: string | null
          demand_impact?: number | null
          factors_considered?: Json | null
          id?: string
          model_id?: string | null
          predicted_value?: number
          prediction_accuracy?: number | null
          prediction_type?: string
          traffic_impact?: number | null
          user_id?: string | null
          validated_at?: string | null
          weather_impact?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_predictions_delivery_order_id_fkey"
            columns: ["delivery_order_id"]
            isOneToOne: false
            referencedRelation: "delivery_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_predictions_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "delivery_prediction_models"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_routes: {
        Row: {
          actual_distance_miles: number | null
          actual_duration_minutes: number | null
          completed_at: string | null
          created_at: string | null
          delivery_orders: Json | null
          end_location: Json
          estimated_distance_miles: number | null
          estimated_duration_minutes: number | null
          fuel_efficiency_mpg: number | null
          id: string
          route_name: string | null
          route_optimization_score: number | null
          route_status: string | null
          start_location: Json
          started_at: string | null
          traffic_conditions: string | null
          user_id: string | null
          waypoints: Json | null
          weather_conditions: string | null
        }
        Insert: {
          actual_distance_miles?: number | null
          actual_duration_minutes?: number | null
          completed_at?: string | null
          created_at?: string | null
          delivery_orders?: Json | null
          end_location: Json
          estimated_distance_miles?: number | null
          estimated_duration_minutes?: number | null
          fuel_efficiency_mpg?: number | null
          id?: string
          route_name?: string | null
          route_optimization_score?: number | null
          route_status?: string | null
          start_location: Json
          started_at?: string | null
          traffic_conditions?: string | null
          user_id?: string | null
          waypoints?: Json | null
          weather_conditions?: string | null
        }
        Update: {
          actual_distance_miles?: number | null
          actual_duration_minutes?: number | null
          completed_at?: string | null
          created_at?: string | null
          delivery_orders?: Json | null
          end_location?: Json
          estimated_distance_miles?: number | null
          estimated_duration_minutes?: number | null
          fuel_efficiency_mpg?: number | null
          id?: string
          route_name?: string | null
          route_optimization_score?: number | null
          route_status?: string | null
          start_location?: Json
          started_at?: string | null
          traffic_conditions?: string | null
          user_id?: string | null
          waypoints?: Json | null
          weather_conditions?: string | null
        }
        Relationships: []
      }
      delivery_tracking: {
        Row: {
          accuracy_meters: number | null
          battery_level: number | null
          delivery_order_id: string | null
          heading_degrees: number | null
          id: string
          is_active: boolean | null
          latitude: number
          longitude: number
          speed_mph: number | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          accuracy_meters?: number | null
          battery_level?: number | null
          delivery_order_id?: string | null
          heading_degrees?: number | null
          id?: string
          is_active?: boolean | null
          latitude: number
          longitude: number
          speed_mph?: number | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          accuracy_meters?: number | null
          battery_level?: number | null
          delivery_order_id?: string | null
          heading_degrees?: number | null
          id?: string
          is_active?: boolean | null
          latitude?: number
          longitude?: number
          speed_mph?: number | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_tracking_delivery_order_id_fkey"
            columns: ["delivery_order_id"]
            isOneToOne: false
            referencedRelation: "delivery_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      driver_safety_events: {
        Row: {
          authorities_contacted: boolean | null
          automated_detection: boolean | null
          created_at: string | null
          delivery_order_id: string | null
          description: string | null
          emergency_contacts_notified: boolean | null
          event_type: string
          id: string
          location_address: string | null
          location_lat: number | null
          location_lng: number | null
          manual_trigger: boolean | null
          resolution_status: string | null
          resolved_at: string | null
          response_actions: Json | null
          sensor_data: Json | null
          severity_level: string | null
          support_response_time_minutes: number | null
          user_id: string | null
        }
        Insert: {
          authorities_contacted?: boolean | null
          automated_detection?: boolean | null
          created_at?: string | null
          delivery_order_id?: string | null
          description?: string | null
          emergency_contacts_notified?: boolean | null
          event_type: string
          id?: string
          location_address?: string | null
          location_lat?: number | null
          location_lng?: number | null
          manual_trigger?: boolean | null
          resolution_status?: string | null
          resolved_at?: string | null
          response_actions?: Json | null
          sensor_data?: Json | null
          severity_level?: string | null
          support_response_time_minutes?: number | null
          user_id?: string | null
        }
        Update: {
          authorities_contacted?: boolean | null
          automated_detection?: boolean | null
          created_at?: string | null
          delivery_order_id?: string | null
          description?: string | null
          emergency_contacts_notified?: boolean | null
          event_type?: string
          id?: string
          location_address?: string | null
          location_lat?: number | null
          location_lng?: number | null
          manual_trigger?: boolean | null
          resolution_status?: string | null
          resolved_at?: string | null
          response_actions?: Json | null
          sensor_data?: Json | null
          severity_level?: string | null
          support_response_time_minutes?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "driver_safety_events_delivery_order_id_fkey"
            columns: ["delivery_order_id"]
            isOneToOne: false
            referencedRelation: "delivery_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      earnings_data: {
        Row: {
          amount: number
          created_at: string
          date: string
          details: Json | null
          hours_worked: number | null
          id: string
          service_id: string
          trips_count: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          date: string
          details?: Json | null
          hours_worked?: number | null
          id?: string
          service_id: string
          trips_count?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          date?: string
          details?: Json | null
          hours_worked?: number | null
          id?: string
          service_id?: string
          trips_count?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "earnings_data_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "user_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "earnings_data_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "service_hub_users"
            referencedColumns: ["id"]
          },
        ]
      }
      faq_items: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: string
          order_index: number | null
          question: string
          updated_at: string
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: string
          order_index?: number | null
          question: string
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: string
          order_index?: number | null
          question?: string
          updated_at?: string
        }
        Relationships: []
      }
      localized_service_platforms: {
        Row: {
          created_at: string | null
          id: string
          is_available_in_region: boolean | null
          language_code: string
          localized_description: string | null
          localized_name: string
          region_specific_info: Json | null
          service_platform_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_available_in_region?: boolean | null
          language_code: string
          localized_description?: string | null
          localized_name: string
          region_specific_info?: Json | null
          service_platform_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_available_in_region?: boolean | null
          language_code?: string
          localized_description?: string | null
          localized_name?: string
          region_specific_info?: Json | null
          service_platform_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "localized_service_platforms_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "supported_languages"
            referencedColumns: ["language_code"]
          },
          {
            foreignKeyName: "localized_service_platforms_service_platform_id_fkey"
            columns: ["service_platform_id"]
            isOneToOne: false
            referencedRelation: "service_platforms"
            referencedColumns: ["id"]
          },
        ]
      }
      mapping_services: {
        Row: {
          api_endpoint: string | null
          created_at: string | null
          current_usage_count: number | null
          features_supported: Json | null
          id: string
          is_active: boolean | null
          last_used_at: string | null
          pricing_tier: string | null
          rate_limit_per_day: number | null
          service_name: string
        }
        Insert: {
          api_endpoint?: string | null
          created_at?: string | null
          current_usage_count?: number | null
          features_supported?: Json | null
          id?: string
          is_active?: boolean | null
          last_used_at?: string | null
          pricing_tier?: string | null
          rate_limit_per_day?: number | null
          service_name: string
        }
        Update: {
          api_endpoint?: string | null
          created_at?: string | null
          current_usage_count?: number | null
          features_supported?: Json | null
          id?: string
          is_active?: boolean | null
          last_used_at?: string | null
          pricing_tier?: string | null
          rate_limit_per_day?: number | null
          service_name?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          is_subscribed: boolean | null
          name: string | null
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          is_subscribed?: boolean | null
          name?: string | null
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          is_subscribed?: boolean | null
          name?: string | null
          subscribed_at?: string
        }
        Relationships: []
      }
      notes: {
        Row: {
          content: string | null
          created_at: string
          id: string
          is_archived: boolean | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          is_archived?: boolean | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          is_archived?: boolean | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      project_gallery: {
        Row: {
          caption: string | null
          created_at: string
          id: string
          image_url: string
          order_index: number | null
          project_id: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url: string
          order_index?: number | null
          project_id: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url?: string
          order_index?: number | null
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_gallery_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_tags: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      project_to_tags: {
        Row: {
          project_id: string
          tag_id: string
        }
        Insert: {
          project_id: string
          tag_id: string
        }
        Update: {
          project_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_to_tags_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_to_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "project_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          client: string | null
          completed_date: string | null
          created_at: string
          description: string
          featured_image: string | null
          id: string
          is_featured: boolean | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          client?: string | null
          completed_date?: string | null
          created_at?: string
          description: string
          featured_image?: string | null
          id?: string
          is_featured?: boolean | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          client?: string | null
          completed_date?: string | null
          created_at?: string
          description?: string
          featured_image?: string | null
          id?: string
          is_featured?: boolean | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      push_notifications: {
        Row: {
          created_at: string | null
          delivered_at: string | null
          delivery_method: string | null
          delivery_order_id: string | null
          id: string
          is_delivered: boolean | null
          is_read: boolean | null
          message: string
          notification_data: Json | null
          notification_type: string
          priority_level: string | null
          read_at: string | null
          scheduled_for: string | null
          service_platform: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          delivered_at?: string | null
          delivery_method?: string | null
          delivery_order_id?: string | null
          id?: string
          is_delivered?: boolean | null
          is_read?: boolean | null
          message: string
          notification_data?: Json | null
          notification_type: string
          priority_level?: string | null
          read_at?: string | null
          scheduled_for?: string | null
          service_platform?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          delivered_at?: string | null
          delivery_method?: string | null
          delivery_order_id?: string | null
          id?: string
          is_delivered?: boolean | null
          is_read?: boolean | null
          message?: string
          notification_data?: Json | null
          notification_type?: string
          priority_level?: string | null
          read_at?: string | null
          scheduled_for?: string | null
          service_platform?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "push_notifications_delivery_order_id_fkey"
            columns: ["delivery_order_id"]
            isOneToOne: false
            referencedRelation: "delivery_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_blocks: {
        Row: {
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          is_recurring: boolean | null
          service_id: string
          specific_date: string | null
          start_time: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          end_time: string
          id?: string
          is_recurring?: boolean | null
          service_id: string
          specific_date?: string | null
          start_time: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          is_recurring?: boolean | null
          service_id?: string
          specific_date?: string | null
          start_time?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_blocks_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "user_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_blocks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "service_hub_users"
            referencedColumns: ["id"]
          },
        ]
      }
      service_categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          order_index: number | null
          slug: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          order_index?: number | null
          slug: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          order_index?: number | null
          slug?: string
        }
        Relationships: []
      }
      service_hub_settings: {
        Row: {
          created_at: string
          id: string
          notification_preferences: Json | null
          service_preferences: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          notification_preferences?: Json | null
          service_preferences?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          notification_preferences?: Json | null
          service_preferences?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_hub_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "service_hub_users"
            referencedColumns: ["id"]
          },
        ]
      }
      service_hub_users: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          email: string
          id: string
          phone_number: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email: string
          id: string
          phone_number?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          phone_number?: string | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      service_platforms: {
        Row: {
          category: string
          color: string | null
          created_at: string
          id: string
          is_active: boolean | null
          logo_url: string | null
          name: string
          updated_at: string
        }
        Insert: {
          category: string
          color?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          category?: string
          color?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          category_id: string | null
          created_at: string
          description: string
          icon: string | null
          id: string
          is_featured: boolean | null
          name: string
          price: number | null
          slug: string
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description: string
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          name: string
          price?: number | null
          slug: string
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string
          icon?: string | null
          id?: string
          is_featured?: boolean | null
          name?: string
          price?: number | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      site_settings: {
        Row: {
          id: string
          updated_at: string
          value: Json
        }
        Insert: {
          id: string
          updated_at?: string
          value: Json
        }
        Update: {
          id?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      supported_languages: {
        Row: {
          created_at: string | null
          currency_position: string | null
          currency_symbol: string | null
          date_format: string | null
          flag_emoji: string | null
          id: string
          is_active: boolean | null
          is_rtl: boolean | null
          language_code: string
          language_name: string
          native_name: string
          number_format: Json | null
          time_format: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          currency_position?: string | null
          currency_symbol?: string | null
          date_format?: string | null
          flag_emoji?: string | null
          id?: string
          is_active?: boolean | null
          is_rtl?: boolean | null
          language_code: string
          language_name: string
          native_name: string
          number_format?: Json | null
          time_format?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          currency_position?: string | null
          currency_symbol?: string | null
          date_format?: string | null
          flag_emoji?: string | null
          id?: string
          is_active?: boolean | null
          is_rtl?: boolean | null
          language_code?: string
          language_name?: string
          native_name?: string
          number_format?: Json | null
          time_format?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          github_url: string | null
          id: string
          is_active: boolean | null
          linkedin_url: string | null
          name: string
          order_index: number | null
          position: string
          twitter_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          github_url?: string | null
          id?: string
          is_active?: boolean | null
          linkedin_url?: string | null
          name: string
          order_index?: number | null
          position: string
          twitter_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          github_url?: string | null
          id?: string
          is_active?: boolean | null
          linkedin_url?: string | null
          name?: string
          order_index?: number | null
          position?: string
          twitter_url?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          company: string | null
          content: string
          created_at: string
          id: string
          is_featured: boolean | null
          name: string
          rating: number | null
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          content: string
          created_at?: string
          id?: string
          is_featured?: boolean | null
          name: string
          rating?: number | null
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          content?: string
          created_at?: string
          id?: string
          is_featured?: boolean | null
          name?: string
          rating?: number | null
        }
        Relationships: []
      }
      translations: {
        Row: {
          context: string | null
          created_at: string | null
          id: string
          is_plural: boolean | null
          language_code: string
          plural_forms: Json | null
          translation_key: string
          translation_value: string
          updated_at: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string | null
          id?: string
          is_plural?: boolean | null
          language_code: string
          plural_forms?: Json | null
          translation_key: string
          translation_value: string
          updated_at?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string | null
          id?: string
          is_plural?: boolean | null
          language_code?: string
          plural_forms?: Json | null
          translation_key?: string
          translation_value?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "translations_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "supported_languages"
            referencedColumns: ["language_code"]
          },
        ]
      }
      user_language_preferences: {
        Row: {
          created_at: string | null
          currency_preference: string | null
          date_format: string | null
          id: string
          is_primary: boolean | null
          language_code: string
          time_format: string | null
          timezone: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          currency_preference?: string | null
          date_format?: string | null
          id?: string
          is_primary?: boolean | null
          language_code: string
          time_format?: string | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          currency_preference?: string | null
          date_format?: string | null
          id?: string
          is_primary?: boolean | null
          language_code?: string
          time_format?: string | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_language_preferences_language_code_fkey"
            columns: ["language_code"]
            isOneToOne: false
            referencedRelation: "supported_languages"
            referencedColumns: ["language_code"]
          },
        ]
      }
      user_services: {
        Row: {
          created_at: string
          credentials: Json | null
          id: string
          is_active: boolean | null
          last_connected_at: string | null
          platform_id: string
          settings: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          credentials?: Json | null
          id?: string
          is_active?: boolean | null
          last_connected_at?: string | null
          platform_id: string
          settings?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          credentials?: Json | null
          id?: string
          is_active?: boolean | null
          last_connected_at?: string | null
          platform_id?: string
          settings?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_services_platform_id_fkey"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "service_platforms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_services_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "service_hub_users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          payment_provider: string | null
          payment_reference: string | null
          service_id: string
          started_at: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          payment_provider?: string | null
          payment_reference?: string | null
          service_id: string
          started_at?: string
          status: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          payment_provider?: string | null
          payment_reference?: string | null
          service_id?: string
          started_at?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      weather_data: {
        Row: {
          created_at: string | null
          delivery_impact_score: number | null
          humidity_percentage: number | null
          id: string
          location_lat: number
          location_lng: number
          location_name: string | null
          precipitation_mm: number | null
          safety_warnings: Json | null
          temperature_celsius: number | null
          temperature_fahrenheit: number | null
          timestamp: string | null
          visibility_miles: number | null
          weather_condition: string
          weather_severity: string | null
          wind_speed_mph: number | null
        }
        Insert: {
          created_at?: string | null
          delivery_impact_score?: number | null
          humidity_percentage?: number | null
          id?: string
          location_lat: number
          location_lng: number
          location_name?: string | null
          precipitation_mm?: number | null
          safety_warnings?: Json | null
          temperature_celsius?: number | null
          temperature_fahrenheit?: number | null
          timestamp?: string | null
          visibility_miles?: number | null
          weather_condition: string
          weather_severity?: string | null
          wind_speed_mph?: number | null
        }
        Update: {
          created_at?: string | null
          delivery_impact_score?: number | null
          humidity_percentage?: number | null
          id?: string
          location_lat?: number
          location_lng?: number
          location_name?: string | null
          precipitation_mm?: number | null
          safety_warnings?: Json | null
          temperature_celsius?: number | null
          temperature_fahrenheit?: number | null
          timestamp?: string | null
          visibility_miles?: number | null
          weather_condition?: string
          weather_severity?: string | null
          wind_speed_mph?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_language: {
        Args: { user_uuid: string }
        Returns: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
