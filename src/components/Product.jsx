import React, { useState } from "react";

export default function VoicePractice() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = React.useRef(null);
  const audioChunksRef = React.useRef([]);

  async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      audioChunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current);
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  }

  function stopRecording() {
    mediaRecorderRef.current.stop();
    setRecording(false);
  }

  return (
    <div className="p-6 pt-24 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">English Speaking Practice</h2>

      {!recording && (
        <button
          onClick={startRecording}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Start Speaking
        </button>
      )}

      {recording && (
        <button
          onClick={stopRecording}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Stop
        </button>
      )}

      {audioURL && (
        <div className="mt-4">
          <h3 className="font-semibold">Playback your voice:</h3>
          <audio src={audioURL} controls className="mt-2" />
        </div>
      )}
    </div>
  );
}
