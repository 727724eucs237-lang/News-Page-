import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export function useVoiceSearch(onResult) {
  const { lang } = useLanguage();
  const [status, setStatus] = useState('idle'); // idle | listening | result | error
  const [errorMsg, setErrorMsg] = useState('');
  const recognitionRef = useRef(null);
  const isSupported = !!SpeechRecognition;

  const stop = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setStatus('idle');
  }, []);

  const start = useCallback(() => {
    if (!isSupported) {
      setStatus('error');
      setErrorMsg('unsupported');
      return;
    }
    setErrorMsg('');
    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'ta' ? 'ta-IN' : 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setStatus('listening');

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setStatus('result');
      onResult(transcript);
      setTimeout(() => setStatus('idle'), 1500);
    };

    recognition.onerror = (e) => {
      setStatus('error');
      setErrorMsg(e.error === 'not-allowed' ? 'denied' : 'error');
      setTimeout(() => setStatus('idle'), 2000);
    };

    recognition.onend = () => {
      if (status === 'listening') setStatus('idle');
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [lang, isSupported, onResult, status]);

  useEffect(() => {
    return () => { if (recognitionRef.current) recognitionRef.current.abort(); };
  }, []);

  return { status, errorMsg, isSupported, start, stop };
}
