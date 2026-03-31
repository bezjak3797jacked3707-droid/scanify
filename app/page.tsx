import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase
    .from('test')
    .select('*')

  return (
    <main style={{ padding: "40px" }}>
      <h1>Scanify</h1>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </main>
  )
}