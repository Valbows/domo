import React, { useState } from 'react';
import TavusAvatar from './components/TavusAvatar';
import VideoPlayer from './components/VideoPlayer';
import CtaModal from './components/CtaModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">AI Agent Demo</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <VideoPlayer
              src="/sample-video.mp4"
              poster="/video-poster.jpg"
              controls={true}
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <TavusAvatar size="large" />
              <div>
                <h2 className="text-xl font-semibold">AI Assistant</h2>
                <p className="text-gray-600">Ready to help you</p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </main>

      <CtaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Start Your Free Trial"
        content={
          <p className="text-gray-600">
            Experience the power of our AI agent with a 14-day free trial.
            No credit card required.
          </p>
        }
        ctaText="Start Free Trial"
        onCtaClick={() => {
          // Handle CTA click
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default App; 