export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'No prompt provided' });
  }

  console.log("Received prompt:", prompt);
  res.status(200).json({ message: 'Mock update completed (replace with GitHub automation)' });
}