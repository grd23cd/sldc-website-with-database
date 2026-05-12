import { supabase } from '../../lib/supabaseClient.js'

export async function POST({ request }: { request: Request }) {
  try {
    // Debug: check what's coming in
    const text = await request.text()
    console.log("Raw body received:", text)

    if (!text || text.trim() === '') {
      return new Response(
        JSON.stringify({ success: false, error: "Empty request body received." }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const body = JSON.parse(text)
    const { name, message } = body

    if (!name || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Name and message are required." }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { error } = await supabase
      .from('issues')
      .insert([{ name, message }])

    if (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: "Issue submitted successfully." }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message || 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}