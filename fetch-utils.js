const SUPABASE_URL = 'https://jbnnucbjvbkteohmuhgt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impibm51Y2JqdmJrdGVvaG11aGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTA0NjYsImV4cCI6MTk2MDAyNjQ2Nn0.PQoOz-G5q-rP2ZQrMkXpRAws76M-PAzHNGDwKuGYL6A';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPresidents() {
    const resp = await client.from('presidentslist').select('*').order('id', { ascending: true });
    return checkError(resp);
}

export async function getPresident(id) {
    const resp = await client.from('presidentslist').select('*').single().eq('id', id).single();
    return checkError(resp);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
