import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  MessageCircle,
  Pencil,
  Phone,
  Send,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';
import { siteContent } from '../data/content';

const defaultApiBaseUrl = window.location.hostname === 'localhost'
  ? 'https://sydney-immigration.vercel.app'
  : window.location.origin;
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl)
  .replace(/\/+$/, '');

const welcomeMessage = {
  role: 'assistant',
  content: 'Hi! Welcome to Sydney Immigration India, Kaithal. How can I help you explore your options?',
};

const quickReplies = ['Study Visa', 'Work Visa', 'Free Consultation'];
const consultationPattern = /consult(?:ation)?|appointment|book|free call|talk to (?:an? )?(?:advisor|consultant)|speak to|call me|baat kar|milna|मुलाकात|सलाह|कंसल्टेशन|बुक/i;

function makeMessage(role, content) {
  return { role, content, id: `${Date.now()}-${Math.random()}` };
}

function consultationReply(text) {
  if (/[\u0900-\u097f]/.test(text)) {
    return 'ज़रूर! आपकी मुफ़्त कंसल्टेशन के लिए कृपया अपना नाम, फ़ोन नंबर और जिस देश में जाना चाहते हैं उसका नाम साझा करें।';
  }
  if (/\b(?:mujhe|mera|meri|chahiye|kar|karo|krna|krni|hai|h|ho|kya|kaise|btao|batao|aap|apna|ke liye)\b/i.test(text)) {
    return 'Bilkul! Free consultation ke liye apna naam, phone number aur jis country mein jaana hai uska naam share karein.';
  }
  return 'Sure! I can help with a free consultation. Please share your name, phone number, and the country you are interested in.';
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');
  const [leadStage, setLeadStage] = useState('closed');
  const [lead, setLead] = useState({ name: '', phone: '', country: '' });
  const [confirmedLead, setConfirmedLead] = useState(null);
  const messageEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping, leadStage]);

  useEffect(() => {
    if (isOpen && leadStage === 'closed') inputRef.current?.focus();
  }, [isOpen, leadStage]);

  async function sendMessage(rawText) {
    const text = rawText.trim().slice(0, 1200);
    if (!text || isTyping) return;

    const userMessage = makeMessage('user', text);
    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setInput('');
    setError('');

    if (consultationPattern.test(text)) {
      setMessages([...conversation, makeMessage('assistant', consultationReply(text))]);
      setLeadStage('form');
      return;
    }

    setIsTyping(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversation
            .filter((message) => message.role === 'user' || message.role === 'assistant')
            .slice(-10)
            .map(({ role, content }) => ({ role, content: content.slice(0, 1600) })),
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Chat is temporarily unavailable. Please try again shortly.');
      }
      if (typeof result.reply !== 'string' || !result.reply.trim()) {
        throw new Error('Chat could not prepare a reply. Please try again.');
      }
      setMessages((current) => [...current, makeMessage('assistant', result.reply.trim())]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Chat is temporarily unavailable. Please try again shortly.',
      );
    } finally {
      setIsTyping(false);
    }
  }

  function startConsultation() {
    const userMessage = makeMessage('user', 'Free Consultation');
    setMessages((current) => [
      ...current,
      userMessage,
      makeMessage('assistant', consultationReply('Free Consultation')),
    ]);
    setError('');
    setLeadStage('form');
    setIsOpen(true);
  }

  function submitLead(event) {
    event.preventDefault();
    const details = {
      name: lead.name.trim().slice(0, 120),
      phone: lead.phone.trim().slice(0, 40),
      country: lead.country.trim().slice(0, 80),
    };
    if (!details.name || details.phone.replace(/\D/g, '').length < 7 || !details.country) {
      setError('Please enter your name, a valid phone number, and a country.');
      return;
    }
    setError('');
    setConfirmedLead(details);
    setLeadStage('confirm');
  }

  const whatsappMessage = confirmedLead
    ? `Hello, I would like to book a free consultation.\nName: ${confirmedLead.name}\nPhone: ${confirmedLead.phone}\nCountry of interest: ${confirmedLead.country}`
    : '';
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {isOpen && (
        <section
          aria-label="Sydney Immigration chat"
          className="fixed bottom-24 right-4 z-50 flex h-[min(34rem,calc(100dvh-8rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-primary-navy/10 bg-white shadow-elevated sm:right-6"
        >
          <header className="flex items-center justify-between bg-primary-navy px-4 py-3.5 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-primary-gold-light">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="truncate font-heading text-base font-semibold text-white">Sydney Immigration</h2>
                <p className="text-xs text-white/75">Kaithal Branch · Online assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="ml-2 rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-secondary-light/60 px-3 py-4 sm:px-4" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={message.id || `welcome-${index}`}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'rounded-br-md bg-primary-navy text-white'
                      : 'rounded-bl-md border border-primary-navy/10 bg-white text-secondary-dark shadow-sm'
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pl-1 pt-1">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => (reply === 'Free Consultation' ? startConsultation() : sendMessage(reply))}
                    disabled={isTyping}
                    className="rounded-full border border-primary-navy/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary-navy transition hover:border-primary-gold hover:bg-primary-gold/10 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {leadStage === 'form' && (
              <form onSubmit={submitLead} className="space-y-3 rounded-2xl border border-primary-navy/10 bg-white p-3.5 shadow-sm">
                <p className="text-sm font-semibold text-primary-navy">Request your free consultation</p>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-secondary-gray">Your name</span>
                  <span className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 focus-within:border-primary-navy">
                    <UserRound className="h-4 w-4 shrink-0 text-secondary-gray" aria-hidden="true" />
                    <input
                      value={lead.name}
                      onChange={(event) => setLead({ ...lead, name: event.target.value })}
                      maxLength={120}
                      autoComplete="name"
                      required
                      className="min-w-0 flex-1 py-2 text-sm text-secondary-dark outline-none"
                      placeholder="Enter your name"
                    />
                  </span>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-secondary-gray">Phone number</span>
                  <span className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 focus-within:border-primary-navy">
                    <Phone className="h-4 w-4 shrink-0 text-secondary-gray" aria-hidden="true" />
                    <input
                      value={lead.phone}
                      onChange={(event) => setLead({ ...lead, phone: event.target.value })}
                      maxLength={40}
                      autoComplete="tel"
                      type="tel"
                      required
                      className="min-w-0 flex-1 py-2 text-sm text-secondary-dark outline-none"
                      placeholder="Enter your phone number"
                    />
                  </span>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium text-secondary-gray">Country of interest</span>
                  <span className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 focus-within:border-primary-navy">
                    <Globe2 className="h-4 w-4 shrink-0 text-secondary-gray" aria-hidden="true" />
                    <input
                      value={lead.country}
                      onChange={(event) => setLead({ ...lead, country: event.target.value })}
                      maxLength={80}
                      required
                      className="min-w-0 flex-1 py-2 text-sm text-secondary-dark outline-none"
                      placeholder="e.g. Australia"
                    />
                  </span>
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-gold px-4 py-2.5 text-sm font-semibold text-primary-navy transition hover:bg-primary-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-navy"
                >
                  Review details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}

            {leadStage === 'confirm' && confirmedLead && (
              <div className="space-y-3 rounded-2xl border border-primary-navy/10 bg-white p-3.5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary-navy">
                  <CheckCircle2 className="h-4 w-4 text-primary-navy-light" aria-hidden="true" />
                  Please confirm your details
                </div>
                <dl className="space-y-1.5 rounded-lg bg-secondary-light p-3 text-sm">
                  <div className="flex gap-2"><dt className="font-medium">Name:</dt><dd className="min-w-0 break-words">{confirmedLead.name}</dd></div>
                  <div className="flex gap-2"><dt className="font-medium">Phone:</dt><dd className="min-w-0 break-words">{confirmedLead.phone}</dd></div>
                  <div className="flex gap-2"><dt className="font-medium">Country:</dt><dd className="min-w-0 break-words">{confirmedLead.country}</dd></div>
                </dl>
                <p className="text-xs leading-5 text-secondary-gray">Your details will be shared only if you choose to continue to WhatsApp.</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLeadStage('form')}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary-navy/20 px-3 py-2 text-xs font-semibold text-primary-navy transition hover:bg-secondary-light"
                  >
                    <Pencil className="h-3.5 w-3.5" aria-hidden="true" /> Edit
                  </button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setLeadStage('sent')}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-navy px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary-navy-dark"
                  >
                    Confirm &amp; send <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}

            {leadStage === 'sent' && (
              <div className="rounded-2xl border border-primary-navy/10 bg-white p-3.5 text-sm text-secondary-dark shadow-sm">
                Thanks! WhatsApp should open with your consultation request. You can call us at{' '}
                <a className="font-semibold text-primary-navy underline" href={siteContent.contact.phoneLink}>
                  {siteContent.contact.phone}
                </a>{' '}
                if you need help.
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start" role="status" aria-label="Assistant is typing">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-primary-navy/10 bg-white px-4 py-3 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary-navy/60 [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary-navy/60 [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary-navy/60" />
                  <span className="sr-only">Assistant is typing</span>
                </div>
              </div>
            )}
            {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">{error}</p>}
            <div ref={messageEndRef} />
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-primary-navy/10 bg-white p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={1200}
              disabled={isTyping}
              className="min-w-0 flex-1 rounded-full border border-slate-200 bg-secondary-light/50 px-4 py-2.5 text-sm text-secondary-dark outline-none transition placeholder:text-secondary-gray/80 focus:border-primary-navy focus:bg-white disabled:opacity-60"
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-navy text-white transition hover:bg-primary-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-gold disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-gold text-primary-navy shadow-gold transition hover:scale-105 hover:bg-primary-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageCircle className="h-6 w-6" aria-hidden="true" />}
      </button>
    </>
  );
}
