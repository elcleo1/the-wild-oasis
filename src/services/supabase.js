import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zankfiocvhpvwnrrsorm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbmtmaW9jdmhwdnducnJzb3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1Njk4NTEsImV4cCI6MjAxMzE0NTg1MX0.rSc3N5YCVpi-nHa2OTtpwZI5meUI2OLqJxLxRlRS_E4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
