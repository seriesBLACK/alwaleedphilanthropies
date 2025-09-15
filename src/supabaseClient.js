// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rimycicsyekcqhixrvyj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpbXljaWNzeWVrY3FoaXhydnlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5Mzg0NjAsImV4cCI6MjA3MzUxNDQ2MH0.gE81Z5g8UVNL9JnUJYPzcXV2PCnhPthfPYGbIhOXLNA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
