import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPublicCmsCategoryApi } from '../../../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutHeroBackground } from '../../../components/common/AboutHeroBackground';
import {
  FEATURED_STORY,
  NEWS_ITEMS,
  BLOG_ARTICLES,
  EVENTS,
  ANNOUNCEMENTS,
  PROJECTS_CASE_STUDIES,
  TEAM_SPOTLIGHTS,
  COMMUNITY_TESTIMONIALS,
  FAQS,
  PHOTO_GALLERY,
  VIDEO_GALLERY,
  MEDIA_APPEARANCES,
  PRESS_RELEASES
} from '../../../data/insightsData';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  BookOpen,
  Building2,
  Video,
  Image as ImageIcon,
  CheckCircle2,
  ChevronDown,
  Search,
  ExternalLink,
  Mail,
  Send,
  MessageSquare,
  Award,
  Zap,
  Globe,
  Radio,
  FileText,
  ShieldCheck,
  Play,
  X,
  Youtube,
  Bookmark,
  Eye,
  MessageCircle,
  TrendingUp,
  Check,
  Users,
  Briefcase,
  Layers,
  HelpCircle,
  Newspaper
} from 'lucide-react';

// Partner Logos for bottom logo showcase
import ssgiLogo from '../../../assets/partners/ssgi.webp';
import insaLogo from '../../../assets/partners/insa.webp';
import mintLogo from '../../../assets/partners/mint.webp';
import eaiiLogo from '../../../assets/partners/eaii.jpg';
import bunnaLogo from '../../../assets/partners/bunabank.png';
import cityadminLogo from '../../../assets/partners/cityadmin.png';

export const InsightsMainPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaqIdx, setActiveFaqIdx] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Advanced Interactive Modals & Toast State
  const [readingArticle, setReadingArticle] = useState(null);
  const [selectedEventForReg, setSelectedEventForReg] = useState(null);
  const [regForm, setRegForm] = useState({ name: '', email: '', organization: '', ticketType: 'In-Person (Skylight Hotel)' });
  const [regConfirmed, setRegConfirmed] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [toastNotice, setToastNotice] = useState(null);
  const [likesMap, setLikesMap] = useState({ 'art-1': 450, 'art-2': 320, 'art-3': 510, 'art-4': 98, 'art-5': 182 });
  const [bookmarksMap, setBookmarksMap] = useState({});

  // Real-time synchronization with Admin Dashboard CMS
  const [liveArticles, setLiveArticles] = useState(() => {
    const saved = localStorage.getItem('yomtech_cms_articles');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return null;
  });

  React.useEffect(() => {
    const fetchFromApi = async () => {
      try {
        const res = await fetchPublicCmsCategoryApi('all');
        if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          setLiveArticles(res.data.data);
        }
      } catch (err) {
        console.error('Failed to fetch CMS records from API:', err);
      }
    };

    fetchFromApi();

    const syncArticles = () => {
      const saved = localStorage.getItem('yomtech_cms_articles');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const activeNonExpired = parsed.filter((a) => {
            const isPastExpiry = a.expiryDate && new Date(a.expiryDate) < new Date();
            return (a.visibility === 'VISIBLE' || a.visibility === 'PUBLIC') && (a.status === 'Published' || a.status === 'PUBLISHED') && !isPastExpiry;
          });
          setLiveArticles(activeNonExpired);
        } catch (e) {
          console.error(e);
        }
      }
    };
    window.addEventListener('cmsArticlesUpdated', syncArticles);
    window.addEventListener('storage', syncArticles);
    return () => {
      window.removeEventListener('cmsArticlesUpdated', syncArticles);
      window.removeEventListener('storage', syncArticles);
    };
  }, []);

  const showToast = (msg) => {
    setToastNotice(msg);
    setTimeout(() => setToastNotice(null), 3500);
  };

  const handleToggleLike = (id) => {
    setLikesMap((prev) => {
      const current = prev[id] || 100;
      const updated = current + 1;
      showToast('Liked story! Count updated.');
      return { ...prev, [id]: updated };
    });
  };

  const handleToggleBookmark = (id, title) => {
    setBookmarksMap((prev) => {
      const isBookmarked = !prev[id];
      showToast(isBookmarked ? `Saved "${title}" to your bookmarks!` : `Removed "${title}" from bookmarks.`);
      return { ...prev, [id]: isBookmarked };
    });
  };

  // Live dataset derivation from Admin Dashboard localStorage (cmsArticles)
  const hasCustomCms = !!localStorage.getItem('yomtech_cms_articles');
  const articlesPool = liveArticles && Array.isArray(liveArticles) ? liveArticles : [];

  const displayProductsMatrix = articlesPool.filter((a) => ['Services & Products Matrix', 'Services & Products', 'Products', 'cms-services'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customProductsMatrixFormatted = displayProductsMatrix.map((a, idx) => ({
    id: a.id,
    title: a.title,
    slug: a.id,
    category: a.category || 'Services & Products Matrix',
    date: a.publishedDate || '2026-08-26',
    readTime: a.readTime || '1 min read',
    author: a.author || 'Editorial Team',
    coverImage: a.coverImage || NEWS_ITEMS[idx % NEWS_ITEMS.length]?.coverImage,
    excerpt: a.summary || a.fullContent || 'YomTech Global service and product module.',
    views: '510',
    client: a.client,
    fullContent: a.fullContent
  }));
  const activeProductsMatrix = customProductsMatrixFormatted;

  const displayNews = articlesPool.filter((a) => ['Corporate News & Articles', 'Corporate News', 'News', 'cms-news'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customNewsFormatted = displayNews.map((a, idx) => ({
    id: a.id,
    title: a.title,
    slug: a.id,
    category: a.category || 'Corporate News & Articles',
    date: a.publishedDate || 'AUG 2026',
    readTime: a.readTime || '5 min read',
    author: a.author || 'Editorial Team',
    coverImage: a.coverImage || NEWS_ITEMS[idx % NEWS_ITEMS.length]?.coverImage,
    excerpt: a.summary || a.fullContent || 'YomTech Global corporate news release.',
    views: '1.2k',
    commentsCount: 12,
    client: a.client,
    fullContent: a.fullContent
  }));
  const activeNewsItems = customNewsFormatted.length > 0 ? customNewsFormatted : NEWS_ITEMS;

  const displayBlog = articlesPool.filter((a) => ['Tech Articles & Engineering', 'Tech Articles', 'Engineering', 'Blog', 'cms-blog'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customBlogFormatted = displayBlog.map((a, idx) => ({
    id: a.id,
    title: a.title,
    slug: a.id,
    category: a.category,
    date: a.publishedDate || 'AUG 2026',
    readTime: a.readTime || '8 min read',
    author: a.author || 'Engineering Team',
    coverImage: a.coverImage || BLOG_ARTICLES[idx % BLOG_ARTICLES.length]?.coverImage,
    excerpt: a.summary || a.fullContent || 'Engineering & technology paper.',
    views: '2.4k',
    client: a.client,
    fullContent: a.fullContent
  }));
  const activeBlogArticles = customBlogFormatted.length > 0 ? customBlogFormatted : BLOG_ARTICLES;

  const displayEvents = articlesPool.filter((a) => ['Upcoming Events & Webinars', 'Events', 'Webinars', 'cms-events'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customEventsFormatted = displayEvents.map((a, idx) => ({
    id: a.id,
    title: a.title,
    date: a.publishedDate || 'SEP 15, 2026',
    time: a.readTime || '09:00 AM EAT',
    location: a.client || 'Hybrid (Addis Ababa)',
    category: a.category,
    description: a.summary || 'YomTech Global tech event.',
    speakers: a.author ? [a.author] : ['YomTech Leadership']
  }));
  const activeEvents = customEventsFormatted.length > 0 ? customEventsFormatted : EVENTS;

  const displayAnnouncements = articlesPool.filter((a) => ['Official Announcements', 'Announcements', 'Bulletins', 'cms-announcements'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customAnnouncementsFormatted = displayAnnouncements.map((a, idx) => ({
    id: a.id,
    title: a.title,
    date: a.publishedDate || 'AUG 2026',
    category: a.category,
    summary: a.summary || 'Official corporate announcement.'
  }));
  const activeAnnouncements = customAnnouncementsFormatted.length > 0 ? customAnnouncementsFormatted : ANNOUNCEMENTS;

  const displayProjects = articlesPool.filter((a) => ['Featured Project Case Studies', 'Case Studies', 'Projects', 'cms-projects'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customProjectsFormatted = displayProjects.map((a, idx) => ({
    id: a.id,
    title: a.title,
    client: a.client || 'Enterprise Client',
    summary: a.summary || 'Enterprise solution case study.',
    techStack: a.readTime || 'React, Node.js, PostgreSQL'
  }));
  const activeProjects = customProjectsFormatted.length > 0 ? customProjectsFormatted : PROJECTS_CASE_STUDIES;

  const displayTeam = articlesPool.filter((a) => ['Executive Team Members', 'Team', 'Executive Leadership', 'cms-team'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customTeamFormatted = displayTeam.map((a, idx) => ({
    id: a.id,
    name: a.title,
    role: a.readTime || a.client || 'Executive Leadership',
    quote: a.summary || 'Technology empowers sustainable growth.',
    category: a.category
  }));
  const activeTeamSpotlights = customTeamFormatted.length > 0 ? customTeamFormatted : TEAM_SPOTLIGHTS;

  const displayTestimonials = articlesPool.filter((a) => ['Client & Learner Testimonials', 'Testimonials', 'Reviews', 'cms-testimonials'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customTestimonialsFormatted = displayTestimonials.map((a, idx) => ({
    id: a.id,
    name: a.title,
    role: a.client || 'WabiSkills Graduate',
    quote: a.summary || 'WabiSkills transformed my career trajectory.',
    category: a.category
  }));
  const activeTestimonials = customTestimonialsFormatted.length > 0 ? customTestimonialsFormatted : COMMUNITY_TESTIMONIALS;

  const displayGallery = articlesPool.filter((a) => ['Photo Gallery Showcase', 'Photo Gallery', 'Gallery', 'Photos', 'cms-gallery'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customGalleryFormatted = displayGallery.map((a, idx) => ({
    id: a.id,
    caption: a.title,
    category: a.readTime || 'Showcase',
    image: a.coverImage || PHOTO_GALLERY[idx % PHOTO_GALLERY.length]?.image
  }));
  const activeGallery = customGalleryFormatted.length > 0 ? customGalleryFormatted : PHOTO_GALLERY;

  const displayVideos = articlesPool.filter((a) => ['Video & Documentary Hub', 'Videos', 'Documentary', 'cms-videos'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customVideosFormatted = displayVideos.map((a, idx) => ({
    id: a.id,
    title: a.title,
    channel: a.client || '@yomtech',
    duration: a.readTime || '10:00',
    videoUrl: a.videoUrl || VIDEO_GALLERY[idx % VIDEO_GALLERY.length]?.videoUrl
  }));
  const activeVideos = customVideosFormatted.length > 0 ? customVideosFormatted : VIDEO_GALLERY;

  const displayMedia = articlesPool.filter((a) => ['Media Appearances & Coverage', 'Media Appearances', 'Media', 'Interviews', 'cms-media'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customMediaFormatted = displayMedia.map((a, idx) => ({
    id: a.id,
    title: a.title,
    outlet: a.client || 'EBC Television',
    date: a.publishedDate || 'August 2026',
    type: a.readTime || 'TELEVISION INTERVIEW'
  }));
  const activeMedia = customMediaFormatted.length > 0 ? customMediaFormatted : MEDIA_APPEARANCES;

  const displayPress = articlesPool.filter((a) => ['Press & Corporate Content', 'Press Center', 'Press Releases', 'Press', 'cms-press'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customPressFormatted = displayPress.map((a, idx) => ({
    id: a.id,
    title: a.title,
    date: a.publishedDate || 'August 2026',
    summary: a.summary || 'Corporate press release.'
  }));
  const activePress = customPressFormatted.length > 0 ? customPressFormatted : PRESS_RELEASES;

  const displayFaqs = articlesPool.filter((a) => ['Support FAQ & Knowledge Base', 'Support FAQ', 'FAQ', 'Knowledge Base', 'cms-faq'].includes(a.category) && (a.visibility || 'VISIBLE').toUpperCase() !== 'HIDDEN');
  const customFaqsFormatted = displayFaqs.map((a, idx) => ({
    id: a.id,
    question: a.title,
    answer: a.summary || 'Official support response.'
  }));
  const activeFaqs = customFaqsFormatted.length > 0 ? customFaqsFormatted : FAQS;

  const categories = [
    { id: 'ALL', label: 'All News & Media' },
    { id: 'NEWS', label: 'Corporate News' },
    { id: 'ARTICLES', label: 'Tech Articles' },
    { id: 'PROJECTS', label: 'Case Studies' },
    { id: 'EVENTS', label: 'Events & Webinars' },
    { id: 'MEDIA', label: 'Press & Media' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      showToast('Thank you for subscribing to YomTech Global Insights!');
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSubscribed(false);
      }, 4000);
    }
  };

  const handleConfirmRegistration = (e) => {
    e.preventDefault();
    setRegConfirmed(true);
    showToast(`Registration confirmed for ${selectedEventForReg?.title}! Confirmation sent to ${regForm.email}`);
    setTimeout(() => {
      setSelectedEventForReg(null);
      setRegConfirmed(false);
      setRegForm({ name: '', email: '', organization: '', ticketType: 'In-Person (Skylight Hotel)' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#1E90FF] selection:text-white transition-colors duration-300 overflow-hidden">
      
      {/* 00. TOP BREAKING TICKER BAR */}
      <div className="bg-[#03045E] text-white py-2 px-4 text-xs font-bold flex flex-wrap justify-between items-center border-b border-cyan-400/20 z-40 relative">
        <div className="flex items-center gap-2.5 max-w-3xl">
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white text-[10px] font-black rounded uppercase tracking-wider animate-pulse">
            ⚡ Breaking
          </span>
          <span className="truncate text-slate-200 font-medium">
            YomTech Global Partners with Bunna Bank S.C. for Core Financial Recon Automation
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-5 text-[11px] text-cyan-200 font-semibold">
          <span className="flex items-center gap-1"><Calendar size={13} /> August 24, 2026</span>
          <span className="flex items-center gap-1"><Mail size={13} /> Subscribe Newsletter</span>
        </div>
      </div>

      {/* 01. HERO BANNER WITH BRAND ROYAL NAVY CANVAS */}
      <section className="relative pt-36 pb-28 bg-gradient-to-b from-[#03045E] via-[#002D54] to-[#03045E] text-white overflow-hidden">
        <AboutHeroBackground />
        
        {/* Ambient Brand Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#1E90FF]/30 via-[#0ED3DD]/25 to-transparent blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md shadow-lg"
          >
            <Sparkles size={16} className="text-[#0ED3DD] animate-pulse" />
            <span>YomTech Global News, Blog &amp; Media Ecosystem</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight max-w-5xl mx-auto"
          >
            News <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">&amp; Media Knowledge Hub</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Explore technology insights, engineering knowledge, corporate news, case studies, upcoming events, and stories shaping YomTech Global across Africa.
          </motion.p>

          {/* Search Bar & Category Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2 max-w-2xl mx-auto space-y-4"
          >
            <div className="relative flex items-center">
              <Search size={20} className="absolute left-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, news stories, case studies, press releases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-32 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-300 font-medium text-sm focus:outline-none focus:border-[#0ED3DD] backdrop-blur-md shadow-xl"
              />
              <button
                onClick={() => navigate(`/search?q=${searchQuery}`)}
                className="absolute right-2 px-5 py-2.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] hover:brightness-110 text-white font-black text-xs rounded-xl shadow transition-all"
              >
                Search
              </button>
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white shadow-lg scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/15'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. TOP 3-COLUMN GLASSMORPHIC CARDS GRID (MODULE 1: NEWS & EDITORIAL SPOTLIGHT) */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Geospatial SSGI / Featured Hero Story */}
          <div
            onClick={() => {
              const target = activeNewsItems.find((a) => a.id === FEATURED_STORY.id || a.title?.includes('SSGI') || a.title?.includes('Satellite')) || { ...FEATURED_STORY, id: 'featured-1' };
              setLikesMap((prev) => ({ ...prev, [target.id]: (prev[target.id] || 450) + 1 }));
              setReadingArticle(target);
            }}
            className="h-[380px] rounded-[28px] overflow-hidden relative group shadow-xl border border-white/50 cursor-pointer"
          >
            <img src={FEATURED_STORY.coverImage} alt={FEATURED_STORY.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            
            {/* Frosted Glass Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-xl space-y-2">
              <div className="flex justify-between items-center text-[10px] font-black text-slate-500">
                <span
                  onClick={(e) => { e.stopPropagation(); setActiveTab('ALL'); setSearchQuery('Geospatial'); }}
                  className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] border border-blue-200 rounded-lg uppercase cursor-pointer hover:bg-blue-100"
                >
                  Geospatial
                </span>
                <span className="flex items-center gap-2">
                  <span>Aug 20, 2026</span>
                  <span>&bull;</span>
                  <span>6 mins read</span>
                </span>
                <div className="flex items-center gap-2 text-slate-400">
                  <Bookmark
                    size={14}
                    className={`cursor-pointer transition-colors ${bookmarksMap['featured-1'] ? 'text-[#0ED3DD] fill-[#0ED3DD]' : 'hover:text-[#1E90FF]'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleBookmark('featured-1', FEATURED_STORY.title);
                    }}
                  />
                  <span className="flex items-center gap-0.5"><Eye size={12} /> {likesMap['featured-1'] || 450}</span>
                </div>
              </div>

              <h3 className="font-black text-base text-slate-900 line-clamp-2 leading-snug">
                {FEATURED_STORY.title}
              </h3>

              <div className="flex justify-between items-center pt-1">
                <span className="text-[11px] font-bold text-slate-500">By Ermias Alemayehu</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const target = activeNewsItems.find((a) => a.id === FEATURED_STORY.id || a.title?.includes('SSGI') || a.title?.includes('Satellite')) || { ...FEATURED_STORY, id: 'featured-1' };
                    setLikesMap((prev) => ({ ...prev, [target.id]: (prev[target.id] || 450) + 1 }));
                    setReadingArticle(target);
                  }}
                  className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-slate-800 hover:bg-[#1E90FF] hover:text-white transition-all transform group-hover:scale-110"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise ERP Bunna Bank / Dynamic News 1 */}
          {activeNewsItems[0] && (
            <div
              className="h-[380px] rounded-[28px] overflow-hidden relative group shadow-xl border border-white/50 cursor-pointer"
              onClick={() => {
                const target = activeNewsItems[0];
                setLikesMap((prev) => ({ ...prev, [target.id]: (prev[target.id] || 320) + 1 }));
                setReadingArticle(target);
              }}
            >
              <img src={activeNewsItems[0].coverImage || NEWS_ITEMS[0].coverImage} alt={activeNewsItems[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-500">
                  <span
                    onClick={(e) => { e.stopPropagation(); setSearchQuery(activeNewsItems[0].category || 'Enterprise'); }}
                    className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg uppercase cursor-pointer hover:bg-emerald-100"
                  >
                    {activeNewsItems[0].category || 'Enterprise ERP'}
                  </span>
                  <span className="flex items-center gap-2">
                    <span>{activeNewsItems[0].date || 'Aug 18, 2026'}</span>
                    <span>&bull;</span>
                    <span>{activeNewsItems[0].readTime || '4 mins read'}</span>
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Bookmark
                      size={14}
                      className={`cursor-pointer transition-colors ${bookmarksMap[activeNewsItems[0].id] ? 'text-[#0ED3DD] fill-[#0ED3DD]' : 'hover:text-[#1E90FF]'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleBookmark(activeNewsItems[0].id, activeNewsItems[0].title);
                      }}
                    />
                    <span className="flex items-center gap-0.5"><Eye size={12} /> {likesMap[activeNewsItems[0].id] || 320}</span>
                  </div>
                </div>

                <h3 className="font-black text-base text-slate-900 line-clamp-2 leading-snug">
                  {activeNewsItems[0].title}
                </h3>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-[11px] font-bold text-slate-500">{activeNewsItems[0].author || 'YomTech Media Unit'}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLikesMap((prev) => ({ ...prev, [activeNewsItems[0].id]: (prev[activeNewsItems[0].id] || 320) + 1 }));
                      setReadingArticle(activeNewsItems[0]);
                    }}
                    className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-slate-800 hover:bg-[#1E90FF] hover:text-white transition-all transform group-hover:scale-110"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: WabiSkills Bootcamp Graduates / Dynamic News 2 */}
          {activeNewsItems[1] && (
            <div
              className="h-[380px] rounded-[28px] overflow-hidden relative group shadow-xl border border-white/50 cursor-pointer"
              onClick={() => {
                const target = activeNewsItems[1];
                setLikesMap((prev) => ({ ...prev, [target.id]: (prev[target.id] || 510) + 1 }));
                setReadingArticle(target);
              }}
            >
              <img src={activeNewsItems[1].coverImage || NEWS_ITEMS[1].coverImage} alt={activeNewsItems[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-500">
                  <span
                    onClick={(e) => { e.stopPropagation(); setSearchQuery(activeNewsItems[1].category || 'Talent'); }}
                    className="px-2.5 py-0.5 bg-cyan-50 text-[#1E90FF] border border-cyan-200 rounded-lg uppercase cursor-pointer hover:bg-cyan-100"
                  >
                    {activeNewsItems[1].category || 'Tech Talent'}
                  </span>
                  <span className="flex items-center gap-2">
                    <span>{activeNewsItems[1].date || 'Aug 14, 2026'}</span>
                    <span>&bull;</span>
                    <span>{activeNewsItems[1].readTime || '5 mins read'}</span>
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Bookmark
                      size={14}
                      className={`cursor-pointer transition-colors ${bookmarksMap[activeNewsItems[1].id] ? 'text-[#0ED3DD] fill-[#0ED3DD]' : 'hover:text-[#1E90FF]'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleBookmark(activeNewsItems[1].id, activeNewsItems[1].title);
                      }}
                    />
                    <span className="flex items-center gap-0.5"><Eye size={12} /> {likesMap[activeNewsItems[1].id] || 510}</span>
                  </div>
                </div>

                <h3 className="font-black text-base text-slate-900 line-clamp-2 leading-snug">
                  {activeNewsItems[1].title}
                </h3>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-[11px] font-bold text-slate-500">{activeNewsItems[1].author || 'WabiSkills Hub'}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLikesMap((prev) => ({ ...prev, [activeNewsItems[1].id]: (prev[activeNewsItems[1].id] || 510) + 1 }));
                      setReadingArticle(activeNewsItems[1]);
                    }}
                    className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-slate-800 hover:bg-[#1E90FF] hover:text-white transition-all transform group-hover:scale-110"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 03. HORIZONTAL CATEGORY PILL BAR */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-4 flex flex-wrap justify-center items-center gap-3 shadow-sm">
          {[
            { label: 'Enterprise Software', count: 68 },
            { label: 'Artificial Intelligence', count: 116 },
            { label: 'Financial Recon & ERP', count: 76 },
            { label: 'Cybersecurity & INSA', count: 26 },
            { label: 'WabiSkills Academy', count: 65 },
            { label: 'Geospatial & SSGI', count: 120 },
            { label: 'GovTech & MInT', count: 63 },
            { label: 'Documentaries', count: 88 },
          ].map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab('ALL');
                setSearchQuery(cat.label);
                showToast(`Filtered stories by "${cat.label}"`);
              }}
              className="px-4 py-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-[#1E90FF] rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 shadow-2xs hover:scale-105 cursor-pointer"
            >
              <span>{cat.label}</span>
              <span className="px-2 py-0.5 bg-slate-200 text-slate-700 text-[10px] font-black rounded-md">{cat.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 03.5. SERVICES & PRODUCTS MATRIX SHOWCASE SECTION */}
      {activeProductsMatrix.length > 0 && (
        <section className="py-8 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-8 bg-gradient-to-b from-[#1E90FF] to-[#0ED3DD] rounded-full" />
              <div>
                <span className="text-[10px] font-black uppercase text-[#1E90FF] tracking-widest">CMS MANAGEMENT</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">Services &amp; Products Matrix</h2>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-cyan-50 border border-cyan-200 text-[#1E90FF] text-xs font-black rounded-2xl shadow-2xs">
              {activeProductsMatrix.length} Managed Product/Service Item(s)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {activeProductsMatrix.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => {
                  setLikesMap((prev) => ({ ...prev, [item.id]: (prev[item.id] || 320) + 1 }));
                  setReadingArticle(item);
                }}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4 shadow-sm hover:shadow-xl hover:border-[#1E90FF] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#1E90FF] border border-white/90 text-[10px] font-black rounded-lg uppercase shadow-xs">
                      {item.readTime || 'Services & Products Matrix'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-black text-slate-400">
                    <span className="text-[#1E90FF]">{item.date}</span>
                    <span>&bull; {item.readTime || '1 min read'}</span>
                  </div>

                  <h3 className="font-black text-base text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#1E90FF] text-white flex items-center justify-center font-black text-[10px]">
                      {(item.author || 'E')[0]}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">{item.author || 'Editorial Team'}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#1E90FF] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 04. ASYMMETRIC MAGAZINE SHOWCASE GRID (MODULE 1 & 2: NEWS, BLOG & ARTICLES) */}
      <section className="py-8 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-6 bg-gradient-to-b from-[#1E90FF] to-[#0ED3DD] rounded-full" />
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <span>Corporate News &amp; Articles</span>
              <span className="text-xs font-medium text-slate-400 hidden sm:inline">&bull; Real-Time Updates That Matter</span>
            </h2>
          </div>
          <Link to="/news/articles" className="px-4 py-2 bg-slate-900 text-white hover:bg-[#1E90FF] rounded-xl text-xs font-black flex items-center gap-2 transition-all">
            <span>View All Stories</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Large Showcase Card */}
          {activeNewsItems[0] && (
            <div
              onClick={() => {
                setLikesMap((prev) => ({ ...prev, [activeNewsItems[0].id]: (prev[activeNewsItems[0].id] || 450) + 1 }));
                setReadingArticle(activeNewsItems[0]);
              }}
              className="lg:col-span-7 h-[440px] rounded-[32px] overflow-hidden relative group shadow-xl border border-slate-200/80 cursor-pointer"
            >
              <img src={activeNewsItems[0].coverImage || NEWS_ITEMS[0].coverImage} alt={activeNewsItems[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 bg-white/85 backdrop-blur-xl border border-white/90 p-6 rounded-3xl shadow-2xl space-y-3">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-500">
                  <span className="px-3 py-1 bg-blue-50 text-[#1E90FF] border border-blue-200 rounded-xl uppercase">
                    {activeNewsItems[0].category || 'Corporate News & Articles'}
                  </span>
                  <span>{activeNewsItems[0].date || 'August 2026'} &bull; {activeNewsItems[0].readTime || '5 mins read'}</span>
                </div>

                <h3 className="font-black text-xl text-slate-900 leading-snug">
                  {activeNewsItems[0].title}
                </h3>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1E90FF] text-white flex items-center justify-center text-xs font-black">
                      {(activeNewsItems[0].author || 'Y')[0]}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{activeNewsItems[0].author || 'Editorial Team'}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLikesMap((prev) => ({ ...prev, [activeNewsItems[0].id]: (prev[activeNewsItems[0].id] || 450) + 1 }));
                      setReadingArticle(activeNewsItems[0]);
                    }}
                    className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 hover:bg-[#1E90FF] hover:text-white transition-all transform group-hover:scale-110"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Right Column (2 Small Horizontal Stacked Cards) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {(activeNewsItems.slice(1, 3).length > 0 ? activeNewsItems.slice(1, 3) : activeBlogArticles.slice(0, 2)).map((art, idx) => (
              <div
                key={art.id || idx}
                onClick={() => {
                  setLikesMap((prev) => ({ ...prev, [art.id]: (prev[art.id] || 102) + 1 }));
                  setReadingArticle(art);
                }}
                className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#1E90FF]/60 transition-all flex items-center gap-5 group cursor-pointer"
              >
                <div className="w-36 h-36 rounded-2xl overflow-hidden shrink-0 border border-slate-200">
                  <img src={art.coverImage} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400">
                    <span className="px-2.5 py-0.5 bg-cyan-50 text-[#1E90FF] border border-cyan-200 rounded-md uppercase">{art.category}</span>
                    <span>&bull; {art.readTime || '5 mins read'}</span>
                  </div>
                  <h4 className="font-black text-sm text-slate-900 leading-snug line-clamp-2 group-hover:text-[#1E90FF] transition-colors">
                    {art.title}
                  </h4>
                  <div className="flex justify-between items-center pt-2 text-[11px] font-bold text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><MessageCircle size={12} /> {art.commentsCount || 12}</span>
                      <span className="flex items-center gap-1"><Eye size={12} /> {likesMap[art.id] || 102}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#1E90FF] group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05. 2-COLUMN DETAILED CARDS GRID (MODULE 2: BLOG & ARTICLES) */}
      <section className="py-12 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Detailed Card 1 */}
          {activeBlogArticles[0] && (
            <div
              onClick={() => {
                setLikesMap((prev) => ({ ...prev, [activeBlogArticles[0].id]: (prev[activeBlogArticles[0].id] || 162) + 1 }));
                setReadingArticle(activeBlogArticles[0]);
              }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-[#1E90FF] border border-blue-200 rounded-xl uppercase">{activeBlogArticles[0].category || 'Software Engineering'}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-xl uppercase">Architecture</span>
                    <span>&bull; {activeBlogArticles[0].readTime || '6 mins read'}</span>
                  </div>
                  <Bookmark
                    size={16}
                    className={`cursor-pointer transition-colors ${bookmarksMap[activeBlogArticles[0].id] ? 'text-[#0ED3DD] fill-[#0ED3DD]' : 'hover:text-[#1E90FF]'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleBookmark(activeBlogArticles[0].id, activeBlogArticles[0].title);
                    }}
                  />
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-snug group-hover:text-[#1E90FF] transition-colors">
                  {activeBlogArticles[0].title}
                </h3>

                <div className="relative h-60 rounded-2xl overflow-hidden border border-slate-200">
                  <img src={activeBlogArticles[0].coverImage} alt={activeBlogArticles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-[#1E90FF] shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={22} className="ml-1" />
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {activeBlogArticles[0].excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#1E90FF] text-white flex items-center justify-center font-black text-xs">
                    {(activeBlogArticles[0].author || 'Y')[0]}
                  </div>
                  <span>{activeBlogArticles[0].author || 'Engineering Team'} &bull; {activeBlogArticles[0].date || 'Aug 20, 2026'}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <span className="flex items-center gap-1"><MessageCircle size={13} /> 98</span>
                  <span className="flex items-center gap-1"><Eye size={13} /> {likesMap[activeBlogArticles[0].id] || 162}</span>
                  <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#1E90FF] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Card 2 */}
          {activeBlogArticles[1] && (
            <div
              onClick={() => {
                setLikesMap((prev) => ({ ...prev, [activeBlogArticles[1].id]: (prev[activeBlogArticles[1].id] || 182) + 1 }));
                setReadingArticle(activeBlogArticles[1]);
              }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-cyan-50 text-[#1E90FF] border border-cyan-200 rounded-xl uppercase">{activeBlogArticles[1].category || 'Artificial Intelligence'}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-xl uppercase">Geospatial</span>
                    <span>&bull; {activeBlogArticles[1].readTime || '6 mins read'}</span>
                  </div>
                  <Bookmark
                    size={16}
                    className={`cursor-pointer transition-colors ${bookmarksMap[activeBlogArticles[1].id] ? 'text-[#0ED3DD] fill-[#0ED3DD]' : 'hover:text-[#1E90FF]'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleBookmark(activeBlogArticles[1].id, activeBlogArticles[1].title);
                    }}
                  />
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-snug group-hover:text-[#1E90FF] transition-colors">
                  {activeBlogArticles[1].title}
                </h3>

                <div className="relative h-60 rounded-2xl overflow-hidden border border-slate-200">
                  <img src={activeBlogArticles[1].coverImage} alt={activeBlogArticles[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {activeBlogArticles[1].excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#0ED3DD] text-white flex items-center justify-center font-black text-xs">
                    {(activeBlogArticles[1].author || 'A')[0]}
                  </div>
                  <span>{activeBlogArticles[1].author || 'AI Research Unit'} &bull; {activeBlogArticles[1].date || 'Aug 18, 2026'}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <span className="flex items-center gap-1"><MessageCircle size={13} /> 55</span>
                  <span className="flex items-center gap-1"><Eye size={13} /> {likesMap[activeBlogArticles[1].id] || 182}</span>
                  <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#1E90FF] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 06. MODULE 3 & 4: EVENTS & ANNOUNCEMENTS HUB */}
      <section className="py-12 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Upcoming Events (MODULE 3: EVENTS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-[#1E90FF] pl-4">
              <span className="text-xs font-black uppercase text-[#1E90FF] tracking-widest">Schedule</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">Upcoming Events &amp; Webinars</h2>
            </div>

            <div className="space-y-4">
              {activeEvents.map((evt, idx) => (
                <div key={evt.id || idx} className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm hover:border-[#1E90FF] transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col items-center justify-center text-[#1E90FF] shrink-0 font-black">
                      <span className="text-[10px] tracking-widest uppercase">{evt.dateMonth || 'SEP'}</span>
                      <span className="text-2xl leading-none">{evt.dateDay || '15'}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="px-2.5 py-0.5 bg-blue-100 text-[#1E90FF] text-[10px] font-black rounded-md">{evt.category || 'Hybrid Event'}</span>
                      <h3 className="font-extrabold text-sm text-slate-900">{evt.title}</h3>
                      <div className="text-[11px] text-slate-400 font-medium">{evt.location || 'Hybrid (Addis Ababa)'} &bull; {evt.time || '09:00 AM'}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedEventForReg(evt)}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-xl shadow hover:scale-[1.02] shrink-0 cursor-pointer"
                  >
                    Register Now &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Official Announcements (MODULE 4: ANNOUNCEMENTS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-l-4 border-[#0ED3DD] pl-4">
              <span className="text-xs font-black uppercase text-[#1E90FF] tracking-widest">Bulletins</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">Official Announcements</h2>
            </div>

            <div className="space-y-4">
              {activeAnnouncements.map((ann, idx) => (
                <div key={ann.id || idx} className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-3 shadow-sm hover:border-cyan-300 transition-all">
                  <div className="flex justify-between items-center text-[10px] font-black">
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-600 rounded-lg">{ann.priority || 'FEATURED'}</span>
                    <span className="text-slate-400">{ann.date || 'August 2026'}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900">{ann.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{ann.summary}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 07. MODULE 5: FEATURED PROJECTS CASE STUDIES SECTION */}
      <section className="py-12 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-l-4 border-[#1E90FF] pl-4">
          <div>
            <span className="text-xs font-black uppercase text-[#1E90FF] tracking-widest">Engineering Portfolios</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Featured Project Case Studies</h2>
          </div>
          <Link to="/news/projects" className="text-xs font-extrabold text-[#1E90FF] hover:underline flex items-center gap-1.5">
            <span>View All Case Studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeProjects.map((proj, idx) => (
            <div key={proj.id || idx} className="bg-white rounded-3xl border border-slate-200/90 p-7 space-y-5 shadow-sm hover:shadow-xl hover:border-[#1E90FF]/60 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-black text-[#1E90FF] uppercase tracking-wider">{proj.client || proj.industry || 'Enterprise Project'}</div>
                <h3 className="text-xl font-black text-slate-900">{proj.name || proj.title}</h3>
                <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                  <div><strong>Challenge:</strong> {proj.challenge || 'Scaling multi-department data workflows.'}</div>
                  <div className="text-emerald-600 font-bold"><strong>Impact:</strong> {proj.results || 'Streamlined core operations by 95%.'}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="flex flex-wrap gap-1.5">
                  {(typeof proj.techStack === 'string' ? proj.techStack.split(', ') : proj.technologies || ['React', 'Node.js', 'PostgreSQL']).map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-blue-50 text-[#1E90FF] text-[10px] font-bold rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setReadingArticle({ id: proj.id, title: proj.title || proj.name, category: 'Case Study', summary: proj.summary, fullContent: `${proj.challenge || ''}\n\n${proj.results || ''}` })}
                  className="text-xs font-black text-[#1E90FF] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Full Case Study</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08. MODULE 6 & 7: TEAM MEMBERS & TESTIMONIALS */}
      <section className="py-12 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Team Members */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#1E90FF] pl-4">
            <span className="text-xs font-black uppercase text-[#1E90FF] tracking-widest">People &amp; Culture</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Executive Team Members</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTeamSpotlights.map((t, idx) => (
              <div key={t.id || idx} className="bg-white rounded-3xl border border-slate-200/90 p-7 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                <img src={t.photo || t.image || TEAM_SPOTLIGHTS[idx % TEAM_SPOTLIGHTS.length]?.photo} alt={t.name} className="w-24 h-24 rounded-2xl object-cover shadow-md border border-slate-200 shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-black text-base text-slate-900">{t.name}</h3>
                  <div className="text-xs font-black text-[#1E90FF]">{t.role}</div>
                  <p className="text-xs text-slate-600 font-medium italic">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#0ED3DD] pl-4">
            <span className="text-xs font-black uppercase text-[#1E90FF] tracking-widest">Community Voice</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Client &amp; Learner Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTestimonials.map((test, idx) => (
              <div key={test.id || idx} className="bg-white rounded-3xl border border-slate-200/90 p-7 space-y-4 shadow-sm">
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  "{test.quote}"
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-xs text-slate-900">{test.name}</div>
                    <div className="text-[10px] text-slate-400 font-bold">{test.role || test.org}</div>
                  </div>
                  <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-[#1E90FF] text-[10px] font-black rounded-lg">{test.category || 'TESTIMONIAL'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. MODULE 9 & 10: PHOTO GALLERY & VIDEO GALLERY */}
      <section className="py-12 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Photo Gallery Showcase (MODULE 9: PHOTO GALLERY) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-l-4 border-[#1E90FF] pl-4">
            <div>
              <span className="text-xs font-black uppercase text-[#1E90FF] tracking-widest">Visuals</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Photo Gallery Showcase</h2>
            </div>
            <Link to="/news/gallery" className="text-xs font-extrabold text-[#1E90FF] hover:underline flex items-center gap-1.5">
              <span>View Full Gallery Page</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 4 Preview Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {activeGallery.slice(0, 4).map((photo, idx) => (
              <div
                key={photo.id || idx}
                onClick={() => setSelectedPhoto({ src: photo.image || photo.src || photo.coverImage, caption: photo.caption || photo.title, description: photo.category })}
                className="relative h-56 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 group cursor-pointer bg-white"
              >
                <img src={photo.image || photo.src || photo.coverImage || PHOTO_GALLERY[idx % PHOTO_GALLERY.length]?.image} alt={photo.caption || photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white text-xs font-bold space-y-1">
                  <span className="px-2 py-0.5 bg-[#1E90FF] text-white text-[9px] font-black rounded w-max uppercase">{photo.category || 'Showcase'}</span>
                  <span className="line-clamp-2 leading-snug">{photo.caption || photo.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Gallery Link Button */}
          <div className="pt-2 text-center">
            <Link
              to="/news/gallery"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white hover:bg-blue-50 text-[#1E90FF] border border-blue-200 hover:border-[#1E90FF] rounded-2xl text-xs font-black shadow-sm hover:shadow-md transition-all group"
            >
              <span>Explore Complete Photo Gallery Archive</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Video Gallery Hub (MODULE 10: VIDEO GALLERY) */}
        <div className="space-y-8 bg-gradient-to-br from-white via-blue-50/40 to-slate-50 p-8 sm:p-12 rounded-[36px] border border-slate-200/90 shadow-sm relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-bl from-[#0ED3DD]/15 via-[#1E90FF]/10 to-transparent blur-[100px] pointer-events-none rounded-full" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E90FF] text-[10px] font-black uppercase tracking-widest">
                <Youtube size={14} className="text-red-500" />
                <span>YomTech Media Productions</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Video &amp; Documentary Hub</h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl leading-relaxed">
                Sourced directly from our official @WabiSkills and @yomtech YouTube channels: real tech education, real documentaries, and enterprise product demos.
              </p>
            </div>

            {/* YouTube Official Channels Pill Links */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.youtube.com/@WabiSkills"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-white hover:bg-red-50 border border-red-200 text-red-600 rounded-2xl text-xs font-black flex items-center gap-2 shadow-2xs hover:scale-105 transition-all"
              >
                <Youtube size={16} />
                <span>@WabiSkills &bull; 2.39K subs</span>
              </a>
              <a
                href="https://www.youtube.com/@yomtech"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-white hover:bg-blue-50 border border-blue-200 text-[#1E90FF] rounded-2xl text-xs font-black flex items-center gap-2 shadow-2xs hover:scale-105 transition-all"
              >
                <Youtube size={16} />
                <span>@yomtech &bull; 1.03K subs</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {activeVideos.map((vid, idx) => (
              <div
                key={vid.id || idx}
                className="bg-white rounded-[30px] border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#1E90FF]/60 transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Video Preview Frame */}
                <div className="relative h-64 sm:h-72 bg-[#002D54] overflow-hidden flex items-center justify-center">
                  <img src={vid.thumbnail || vid.coverImage || VIDEO_GALLERY[idx % VIDEO_GALLERY.length]?.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/80 via-transparent to-transparent" />
                  
                  {/* Top Glassmorphic Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="px-3 py-1 bg-white/85 backdrop-blur-xl text-[#1E90FF] border border-white/90 text-[10px] font-black rounded-xl uppercase shadow-md">
                      {vid.category || 'Media Production'}
                    </span>
                    <span className="px-3 py-1 bg-[#03045E]/80 backdrop-blur-xl text-cyan-300 border border-cyan-400/30 text-[10px] font-black rounded-xl shadow-md flex items-center gap-1">
                      <Clock size={12} />
                      <span>{vid.duration || '10:00'}</span>
                    </span>
                  </div>

                  {/* Center Glowing Play Button */}
                  <button
                    onClick={() => setSelectedVideo(vid)}
                    className="absolute w-16 h-16 rounded-full bg-gradient-to-tr from-[#1E90FF] to-[#0ED3DD] text-white flex items-center justify-center shadow-2xl border-2 border-white/80 group-hover:scale-115 transition-transform duration-300 cursor-pointer z-10"
                  >
                    <Play size={24} className="ml-1 fill-white" />
                  </button>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex justify-between items-center text-[11px] font-black text-slate-400">
                    <span className="flex items-center gap-1.5 text-[#1E90FF]">
                      <Youtube size={14} className="text-red-500" />
                      <span>Official Channel Broadcast</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Eye size={13} /> 1.4k views</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1"><MessageCircle size={13} /> 84 comments</span>
                    </span>
                  </div>

                  <h3 className="font-black text-lg sm:text-xl text-slate-900 leading-snug group-hover:text-[#1E90FF] transition-colors">
                    {vid.title}
                  </h3>

                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500">HD 1080p &bull; YomTech Media</span>
                    <button
                      onClick={() => setSelectedVideo(vid)}
                      className="px-4 py-2 bg-slate-50 hover:bg-[#1E90FF] text-slate-700 hover:text-white rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Play Video</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. MODULE 11 & 12: MEDIA APPEARANCES & PRESS CONTENT */}
      <section className="py-12 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Media Appearances (MODULE 11: MEDIA APPEARANCES) */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#1E90FF] pl-4">
            <span className="text-xs font-black uppercase text-[#1E90FF] tracking-widest">External Coverage</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Media Appearances &amp; Coverage</h2>
          </div>

          <div className="space-y-4">
            {activeMedia.map((m, idx) => (
              <div key={m.id || idx} className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex items-center justify-between shadow-sm hover:border-[#1E90FF] transition-all">
                <div className="space-y-1.5">
                  <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-[#1E90FF] text-[10px] font-black rounded-lg">{m.type || 'MEDIA INTERVIEW'}</span>
                  <h3 className="font-extrabold text-base text-slate-900">{m.title}</h3>
                  <div className="text-xs text-slate-400 font-medium">{m.outlet || 'Broadcasting'} &bull; {m.date || 'August 2026'}</div>
                </div>
                <a href={m.url || '#'} target="_blank" rel="noreferrer" className="p-3 text-[#1E90FF] hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Press Releases (MODULE 12: PRESS CONTENT) */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#0ED3DD] pl-4">
            <span className="text-xs font-black uppercase text-[#1E90FF] tracking-widest">Press &amp; Corporate</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Press &amp; Corporate Content</h2>
          </div>

          <div className="space-y-4">
            {activePress.map((pr, idx) => (
              <div key={pr.id || idx} className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex items-center justify-between shadow-sm hover:border-[#0ED3DD] transition-all">
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-base text-slate-900">{pr.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{pr.summary}</p>
                </div>
                <span className="text-xs font-black text-[#1E90FF]">{pr.date || 'August 2026'}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. MODULE 8: ADVANCED INTERACTIVE FAQS HUB */}
      <section className="py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column Showcase Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#03045E] via-[#002D54] to-[#1E90FF]/40 text-white rounded-[36px] p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-cyan-400/30 flex flex-col justify-between space-y-8">
            {/* Ambient Cyan Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-bl from-[#0ED3DD]/30 via-[#1E90FF]/20 to-transparent blur-[100px] pointer-events-none rounded-full" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#0ED3DD] text-xs font-black tracking-widest uppercase backdrop-blur-md">
                <HelpCircle size={15} className="text-[#0ED3DD]" />
                <span>Support FAQ &amp; Knowledge Base</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Got Questions? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-[#0ED3DD] to-blue-200">We Have Answers.</span>
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">
                Find immediate answers regarding YomTech software development services, WabiSkills academy bootcamps, Yomnex ERP, and enterprise tech consulting.
              </p>
            </div>

            <div className="space-y-3 relative z-10 pt-4 border-t border-white/15">
              <div className="text-xs font-bold text-cyan-200">Need direct technical assistance?</div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-5 py-3 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] hover:brightness-110 text-white font-black text-xs rounded-2xl shadow-lg flex items-center gap-2 transition-all"
                >
                  <Mail size={14} />
                  <span>Contact Support Team</span>
                </Link>
                <a
                  href="tel:+251977666699"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs rounded-2xl backdrop-blur-md flex items-center gap-2 transition-all"
                >
                  <Zap size={14} className="text-[#0ED3DD]" />
                  <span>+251 (977) 666-699</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Accordion Items */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#1E90FF] shadow-xl'
                      : 'bg-white/90 hover:bg-white border-slate-200/90 shadow-sm hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-9 h-9 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                        isOpen ? 'bg-[#1E90FF] text-white' : 'bg-blue-50 text-[#1E90FF]'
                      }`}>
                        0{idx + 1}
                      </div>
                      <span className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-[#1E90FF] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-[#1E90FF] text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#1E90FF]'
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-1"
                      >
                        <div className="p-4 rounded-2xl bg-blue-50/50 border-l-4 border-[#1E90FF] text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12. BOTTOM NEWSLETTER & PARTNER LOGO FOOTER GRID */}
      <section className="py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Newsletter Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="space-y-3 z-10 relative">
              <span className="px-3 py-1 bg-blue-50 text-[#1E90FF] border border-blue-200 text-[10px] font-black rounded-lg uppercase">Newsletter</span>
              <h3 className="text-2xl font-black text-slate-900">Subscribe to our newsletter and Stay updated each week</h3>
              <p className="text-xs text-slate-500 font-medium">Get official corporate news, tech articles, software engineering releases, and tech academy announcements delivered straight to your inbox.</p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 z-10 relative">
              <input
                type="email"
                required
                placeholder="Enter your official email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-xs rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#0ED3DD]"
              />
              <button type="submit" className="px-6 py-3 bg-[#1E90FF] hover:bg-blue-600 text-white font-black text-xs rounded-2xl shadow transition-all">
                Subscribe
              </button>
            </form>
          </div>

          {/* Partner Logo Wall (Flowing Liquid Marquee) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 overflow-hidden relative">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-[#1E90FF] uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0ED3DD] animate-ping" />
                <span>Enterprise Alliances</span>
              </span>
              <h3 className="text-xl font-black text-slate-900">Trusted Institutional Partners</h3>
            </div>

            {/* Liquid Dual Parallel Horizontal Water Flow Container */}
            <div className="relative overflow-hidden py-3 border-y border-slate-100 space-y-4">
              {/* Left & Right Soft Gradient Fades */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Parallel Row 1: Flowing Left */}
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 22 }}
                className="flex items-center gap-4 w-max"
              >
                {[
                  { logo: ssgiLogo, name: 'SSGI' },
                  { logo: insaLogo, name: 'INSA' },
                  { logo: mintLogo, name: 'MInT' },
                  { logo: eaiiLogo, name: 'EAII' },
                  { logo: bunnaLogo, name: 'Bunna Bank' },
                  { logo: cityadminLogo, name: 'Addis Ababa City Admin' },
                  { logo: ssgiLogo, name: 'SSGI' },
                  { logo: insaLogo, name: 'INSA' },
                  { logo: mintLogo, name: 'MInT' },
                  { logo: eaiiLogo, name: 'EAII' },
                  { logo: bunnaLogo, name: 'Bunna Bank' },
                  { logo: cityadminLogo, name: 'Addis Ababa City Admin' }
                ].map((partner, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="px-5 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center h-16 w-40 hover:bg-blue-50 hover:border-blue-300 transition-all shrink-0 shadow-2xs group"
                  >
                    <img src={partner.logo} alt={partner.name} className="max-h-10 max-w-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </motion.div>

              {/* Parallel Row 2: Flowing Right (Reverse Flow) */}
              <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 24 }}
                className="flex items-center gap-4 w-max"
              >
                {[
                  { logo: bunnaLogo, name: 'Bunna Bank' },
                  { logo: cityadminLogo, name: 'Addis Ababa City Admin' },
                  { logo: ssgiLogo, name: 'SSGI' },
                  { logo: insaLogo, name: 'INSA' },
                  { logo: mintLogo, name: 'MInT' },
                  { logo: eaiiLogo, name: 'EAII' },
                  { logo: bunnaLogo, name: 'Bunna Bank' },
                  { logo: cityadminLogo, name: 'Addis Ababa City Admin' },
                  { logo: ssgiLogo, name: 'SSGI' },
                  { logo: insaLogo, name: 'INSA' },
                  { logo: mintLogo, name: 'MInT' },
                  { logo: eaiiLogo, name: 'EAII' }
                ].map((partner, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="px-5 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center h-16 w-40 hover:bg-cyan-50 hover:border-cyan-300 transition-all shrink-0 shadow-2xs group"
                  >
                    <img src={partner.logo} alt={partner.name} className="max-h-10 max-w-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 13. PHOTO LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 border border-blue-100">
            <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-[#1E90FF]">
              <X size={20} />
            </button>
            <img src={selectedPhoto.src} alt={selectedPhoto.caption} className="w-full h-80 sm:h-96 object-cover rounded-2xl" />
            <div className="space-y-1">
              <h4 className="font-black text-base text-slate-900">{selectedPhoto.caption}</h4>
              <p className="text-xs text-slate-500 font-medium">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* 14. VIDEO LIGHTBOX MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#002D54] rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 text-white border border-cyan-400/30">
            <button onClick={() => setSelectedVideo(null)} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10">
              <X size={20} />
            </button>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#001D3D] flex items-center justify-center">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId || 'dQw4w9WgXcQ'}`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="space-y-1">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] font-black rounded-lg">{selectedVideo.category}</span>
              <h4 className="font-black text-lg text-white">{selectedVideo.title}</h4>
            </div>
          </div>
        </div>
      )}

      {/* 15. EVENT REGISTRATION MODAL */}
      {selectedEventForReg && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-lg w-full bg-white text-slate-900 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl border border-blue-100 animate-in zoom-in-95">
            <button onClick={() => setSelectedEventForReg(null)} className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 text-[#1E90FF] hover:bg-blue-100">
              <X size={18} />
            </button>
            <div className="space-y-1.5 border-b border-blue-100 pb-3">
              <span className="px-3 py-1 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded-md uppercase">Official Event Pass</span>
              <h3 className="text-xl font-black text-slate-900 leading-snug">{selectedEventForReg.title}</h3>
              <p className="text-xs text-slate-500 font-semibold">{selectedEventForReg.date} &bull; {selectedEventForReg.location}</p>
            </div>

            {regConfirmed ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 size={40} className="mx-auto text-emerald-600 animate-bounce" />
                <h4 className="font-black text-base text-emerald-900">Registration Successful!</h4>
                <p className="text-xs text-emerald-700 font-medium">Your event pass &amp; QR code invitation have been dispatched to <strong>{regForm.email}</strong>.</p>
              </div>
            ) : (
              <form onSubmit={handleConfirmRegistration} className="space-y-3 text-xs">
                <div>
                  <label className="font-extrabold text-slate-600">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Abebe Bikila"
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
                <div>
                  <label className="font-extrabold text-slate-600">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. abebe@company.org"
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-extrabold text-slate-600">Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Enterprise Client / University"
                      value={regForm.organization}
                      onChange={(e) => setRegForm({ ...regForm, organization: e.target.value })}
                      className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 font-bold focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>
                  <div>
                    <label className="font-extrabold text-slate-600">Attendance Type</label>
                    <select
                      value={regForm.ticketType}
                      onChange={(e) => setRegForm({ ...regForm, ticketType: e.target.value })}
                      className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 font-bold focus:outline-none focus:border-[#1E90FF]"
                    >
                      <option value="In-Person (Skylight Hotel)">In-Person (Skylight Hotel)</option>
                      <option value="Virtual Hybrid (Zoom Live)">Virtual Hybrid (Zoom Live)</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-xl shadow hover:brightness-110">
                  Confirm Event Registration &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 16. ARTICLE READER MODAL */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-3xl w-full bg-white text-slate-900 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl border border-blue-100 my-8">
            <button onClick={() => setReadingArticle(null)} className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 text-[#1E90FF] hover:bg-blue-100">
              <X size={20} />
            </button>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded-lg uppercase">{readingArticle.category}</span>
                <span className="text-xs text-slate-400 font-bold">{readingArticle.publishedDate || 'Aug 20, 2026'} &bull; {readingArticle.readTime || '5 min read'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">{readingArticle.title}</h2>
              <div className="flex items-center gap-3 pt-1 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#1E90FF] text-white font-black flex items-center justify-center text-sm">
                  {readingArticle.author ? readingArticle.author[0] : 'Y'}
                </div>
                <div>
                  <div className="font-extrabold text-sm text-slate-900">{readingArticle.author || 'YomTech Media Editorial'}</div>
                  <div className="text-xs text-slate-500 font-medium">Published in YomTech Insights Hub</div>
                </div>
              </div>
            </div>

            {/* MEDIA PREVIEW: YOUTUBE VIDEO OR COVER IMAGE */}
            {readingArticle.youtubeId ? (
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${readingArticle.youtubeId}?autoplay=1`}
                  title={readingArticle.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : readingArticle.coverImage ? (
              <img src={readingArticle.coverImage} alt={readingArticle.title} className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-sm" />
            ) : null}

            {/* DOCUMENT / PDF DOWNLOAD ATTACHMENT */}
            {readingArticle.documentName && (
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div className="font-extrabold text-xs text-slate-900">Attached Press Kit / Document</div>
                    <div className="text-xs text-emerald-700 font-bold">{readingArticle.documentName}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleShowToast(`Downloading attached document "${readingArticle.documentName}"...`)}
                  className="px-4 py-2 bg-emerald-600 text-white font-black text-xs rounded-xl shadow hover:bg-emerald-700 flex items-center gap-1.5 shrink-0"
                >
                  <span>Download PDF</span>
                </button>
              </div>
            )}

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed font-medium">
              <p className="font-semibold text-slate-900 text-base">{readingArticle.summary || readingArticle.excerpt}</p>
              {readingArticle.fullContent ? (
                <div className="space-y-3 whitespace-pre-wrap text-slate-800 font-normal leading-relaxed">
                  {readingArticle.fullContent}
                </div>
              ) : (
                <>
                  <p>YomTech Global is driving digital transformation across Africa by delivering enterprise-grade software solutions, high-concurrency microservices, and specialized tech talent academies. This article outlines key architectural principles, cloud deployments, and impact metrics recorded across our Pan-African projects.</p>
                  <p>Through robust partnerships with institutions such as the Space Science &amp; Geospatial Institute (SSGI), Bunna Bank S.C., and the Ministry of Innovation &amp; Technology (MInT), YomTech continues to elevate technological standards.</p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => handleToggleLike(readingArticle.id)} className="px-4 py-2 bg-blue-50 text-[#1E90FF] font-black text-xs rounded-xl flex items-center gap-2 hover:bg-blue-100">
                  <ThumbsUp size={15} />
                  <span>{likesMap[readingArticle.id] || 450} Likes</span>
                </button>
                <button onClick={() => handleToggleBookmark(readingArticle.id, readingArticle.title)} className="px-4 py-2 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-2 hover:border-[#1E90FF]">
                  <Bookmark size={15} />
                  <span>{bookmarksMap[readingArticle.id] ? 'Bookmarked' : 'Save'}</span>
                </button>
              </div>
              <button onClick={() => handleCopyLink(readingArticle.title)} className="p-2.5 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-[#1E90FF] rounded-xl text-xs font-bold flex items-center gap-1.5">
                <Share2 size={15} />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 17. FLOATING TOAST NOTIFICATION */}
      {toastNotice && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3.5 bg-[#03045E] text-white font-extrabold text-xs rounded-2xl shadow-2xl border border-cyan-400/40 flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <Sparkles size={16} className="text-[#0ED3DD] animate-pulse shrink-0" />
          <span>{toastNotice}</span>
        </div>
      )}

    </div>
  );
};
