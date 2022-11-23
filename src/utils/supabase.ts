import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://llzgsfjqysctspbdnben.supabase.co"

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsemdzZmpxeXNjdHNwYmRuYmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3NTQ5NjEsImV4cCI6MTk4NDMzMDk2MX0.U01tYXo0nbjoJk8FspiSLoXmgvfAm1RT3TYbN_b1Tpg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)