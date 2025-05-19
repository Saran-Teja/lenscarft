import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { filePath, content, message } = req.body;
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content).toString('base64'),
        branch: 'main',
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'GitHub commit failed');
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
