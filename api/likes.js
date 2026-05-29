const KEY = 'portfolio_likes'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const { UPSTASH_REDIS_REST_URL: URL, UPSTASH_REDIS_REST_TOKEN: TOKEN } = process.env

  if (!URL || !TOKEN) {
    return res.status(200).json({ likes: 0, configured: false })
  }

  const headers = { Authorization: `Bearer ${TOKEN}` }

  try {
    if (req.method === 'GET') {
      const r = await fetch(`${URL}/get/${KEY}`, { headers })
      const data = await r.json()
      return res.status(200).json({ likes: parseInt(data.result) || 0 })
    }

    if (req.method === 'POST') {
      const r = await fetch(`${URL}/incr/${KEY}`, { headers })
      const data = await r.json()
      return res.status(200).json({ likes: data.result })
    }

    res.status(405).end()
  } catch {
    res.status(200).json({ likes: 0 })
  }
}
