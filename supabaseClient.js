import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mhzkqajocqbsnftxkqvr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oemtxYWpvY3Fic25mdHhrcXZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTM1NDIyNCwiZXhwIjoyMDM0OTMwMjI0fQ.oHpdndHe-7XJv3_3Z86nNerhmO29InE7xQY1d7-sx2c';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
