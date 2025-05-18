import React, { useState } from 'react';

const tabs = ['Styles', 'Gear', 'Tips'];

const sampleArticles = [
  { title: 'Mastering Macro Photography', summary: 'Tips and tricks for macro shots.' },
  { title: 'Top 5 DSLR Cameras in 2025', summary: 'A quick review of latest DSLRs.' },
];

const samplePlaylists = [
  { title: 'Photography Tutorials', url: 'https://www.youtube.com/playlist?list=PL1' },
  { title: 'Camera Gear Reviews', url: 'https://www.youtube.com/playlist?list=PL2' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('Styles');

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to LensCraft</h1>
        <p>Your hub for photography styles, gear, and tips.</p>
      </header>

      <div>
        <nav className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={\`px-4 py-2 border-b-2 \${activeTab === tab ? 'border-blue-500 font-bold' : 'border-transparent'}\`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {activeTab === 'Styles' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Photography Styles</h2>
            <p>Explore portrait, landscape, macro, and more.</p>
          </section>
        )}

        {activeTab === 'Gear' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Recommended Gear</h2>
            <ul className="list-disc pl-5">
              {sampleArticles.map(({ title, summary }) => (
                <li key={title} className="mb-2">
                  <strong>{title}:</strong> {summary}
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === 'Tips' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Tips & Tutorials</h2>
            <ul className="list-disc pl-5">
              {samplePlaylists.map(({ title, url }) => (
                <li key={title} className="mb-2">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{title}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}