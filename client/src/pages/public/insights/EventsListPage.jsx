import React from 'react';
import { Link } from 'react-router-dom';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import { EVENTS } from '../../../data/insightsData';
import { Calendar, Clock, MapPin, ArrowRight, User, Sparkles } from 'lucide-react';

import { fetchPublicCmsCategoryApi } from '../../../services/api';

export const EventsListPage = () => {
  const isEventVisible = (a) => {
    const isCat = a.category === 'Upcoming Events & Webinars';
    const vis = (a.visibility || '').toUpperCase();
    const stat = (a.status || '').toUpperCase();
    return isCat && (vis === 'VISIBLE' || vis === 'PUBLIC') && (stat === 'PUBLISHED');
  };

  const [liveEventsPool, setLiveEventsPool] = React.useState(() => {
    const saved = localStorage.getItem('yomtech_cms_articles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const filtered = parsed.filter(isEventVisible);
        if (filtered.length > 0) return filtered;
      } catch (e) {
        console.error(e);
      }
    }
    return EVENTS;
  });

  React.useEffect(() => {
    const fetchFromApi = async () => {
      try {
        const res = await fetchPublicCmsCategoryApi('all');
        if (res.data?.success && Array.isArray(res.data.data)) {
          const apiEvents = res.data.data.filter(isEventVisible);
          if (apiEvents.length > 0) setLiveEventsPool(apiEvents);
        }
      } catch (err) {
        console.error('Failed to fetch events from API:', err);
      }
    };

    fetchFromApi();

    const syncEvents = () => {
      const saved = localStorage.getItem('yomtech_cms_articles');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const filtered = parsed.filter(isEventVisible);
          if (filtered.length > 0) setLiveEventsPool(filtered);
          else setLiveEventsPool(EVENTS);
        } catch (e) {
          console.error(e);
        }
      }
    };
    window.addEventListener('cmsArticlesUpdated', syncEvents);
    window.addEventListener('storage', syncEvents);
    return () => {
      window.removeEventListener('cmsArticlesUpdated', syncEvents);
      window.removeEventListener('storage', syncEvents);
    };
  }, []);

  const eventsToUse = liveEventsPool.map((evt, idx) => {
    const rawDate = evt.publishedDate || evt.date || '2026-09-15';
    let dateMonth = 'SEP';
    let dateDay = '15';
    try {
      const d = new Date(rawDate);
      if (!isNaN(d.getTime())) {
        dateMonth = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
        dateDay = d.getDate().toString();
      }
    } catch (e) {
      console.error(e);
    }
    return {
      id: evt.id || `evt-${idx}`,
      title: evt.title,
      dateMonth,
      dateDay,
      time: (evt.readTime && !evt.readTime.toLowerCase().includes('read')) ? evt.readTime : (evt.time || '09:00 AM EAT'),
      location: evt.client || evt.location || 'Hybrid (Addis Ababa)',
      description: evt.summary || evt.description || 'YomTech Global tech event.',
      speakers: evt.speakers || (evt.author ? [evt.author] : ['YomTech Leadership']),
      coverImage: evt.coverImage
    };
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans transition-colors">
      <section className="relative pt-36 pb-20 bg-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} />
            <span>YomTech Corporate Schedule</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Upcoming Events &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">Bootcamps</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Tech summits, WabiSkills graduation demo days, webinars, and enterprise executive workshops across Addis Ababa and regional hubs.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-4">
          {eventsToUse.map((evt) => (
            <div key={evt.id} className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-sm hover:border-[#1E90FF] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-5">
                {evt.coverImage ? (
                  <img src={evt.coverImage} alt={evt.title} className="w-20 h-20 rounded-2xl object-cover border border-slate-200 shrink-0 shadow-2xs" />
                ) : (
                  <div className="w-18 h-18 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col items-center justify-center text-[#1E90FF] shrink-0 font-black p-3">
                    <span className="text-[10px] tracking-widest uppercase">{evt.dateMonth}</span>
                    <span className="text-2xl leading-none">{evt.dateDay}</span>
                  </div>
                )}
                <div className="space-y-1.5">
                  <span className="px-3 py-0.5 bg-blue-100 text-[#1E90FF] text-[10px] font-black rounded-md">{evt.type}</span>
                  <h3 className="font-extrabold text-base text-slate-900">{evt.title}</h3>
                  <div className="text-xs text-slate-400 font-medium flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#1E90FF]" />{evt.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} />{evt.startTime}</span>
                  </div>
                </div>
              </div>

              <Link to={`/news/events/${evt.id}`} className="px-6 py-3 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white text-xs font-black rounded-2xl shadow hover:scale-[1.02] shrink-0 transition-transform">
                Event Details &amp; RSVP &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const EventDetailPage = () => {
  const evt = EVENTS[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-4 space-y-6">
        <span className="px-3.5 py-1 bg-blue-50 border border-blue-200 text-[#1E90FF] font-black text-xs rounded-xl">{evt.type}</span>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight text-slate-900">{evt.title}</h1>
        
        <div className="p-7 rounded-3xl bg-white border border-slate-200/90 space-y-3 text-xs font-bold shadow-sm">
          <div>Date: <span className="text-[#1E90FF] font-black">{evt.fullDate}</span></div>
          <div>Time: {evt.startTime} - {evt.endTime}</div>
          <div>Location: {evt.location}</div>
          <div>Organizer: {evt.organizer}</div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          {evt.description}
        </p>

        <div className="pt-4">
          <button onClick={() => alert('RSVP confirmed!')} className="px-7 py-3.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] transition-transform">
            Confirm RSVP Registration
          </button>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <Link to="/news/events" className="text-xs font-black text-[#1E90FF] hover:underline">&larr; Back to Events Schedule</Link>
        </div>
      </section>
    </div>
  );
};
