// Production-Grade Database-Driven CMS Controller powered by Prisma & SQLite/PostgreSQL
const prisma = require('../config/database');

// Helper: Auto-evaluate scheduled publishing & expiration on Prisma items
const evaluateItemLifecycle = (item) => {
  if (!item || item.deletedAt) return item;
  const now = new Date();

  // Scheduled publishing evaluation
  if (item.status === 'SCHEDULED' && item.scheduledAt && new Date(item.scheduledAt) <= now) {
    item.status = 'PUBLISHED';
    item.publishedAt = item.scheduledAt;
    item.visibility = 'PUBLIC';
  }

  // Expiration evaluation
  if (item.expirationEnabled && item.expiresAt && new Date(item.expiresAt) <= now) {
    item.status = 'EXPIRED';
    item.visibility = 'HIDDEN';
  }

  return item;
};

// Log Audit Activity to Database
const logAuditActivity = async (user, action, contentType, title, id) => {
  try {
    await prisma.auditLog.create({
      data: {
        user: user || 'Ermias Alemayehu (Super Admin)',
        action,
        contentType: contentType || 'CMS',
        title: title || 'CMS Record',
        contentId: id || null
      }
    });
  } catch (err) {
    console.error('Audit Log DB Write Error:', err);
  }
};

// Map URL Category String to Official CMS Category Field
const getCategoryString = (categoryParam) => {
  if (!categoryParam) return 'Corporate News & Articles';
  const param = categoryParam.toLowerCase();
  const map = {
    'services': 'Services & Products Matrix',
    'cms-services': 'Services & Products Matrix',
    'news': 'Corporate News & Articles',
    'cms-news': 'Corporate News & Articles',
    'articles': 'Corporate News & Articles',
    'cms-articles': 'Corporate News & Articles',
    'blog': 'Tech Articles & Engineering',
    'cms-blog': 'Tech Articles & Engineering',
    'events': 'Upcoming Events & Webinars',
    'cms-events': 'Upcoming Events & Webinars',
    'announcements': 'Official Announcements',
    'cms-announcements': 'Official Announcements',
    'projects': 'Featured Project Case Studies',
    'cms-projects': 'Featured Project Case Studies',
    'team': 'Executive Team Members',
    'cms-team': 'Executive Team Members',
    'testimonials': 'Client & Learner Testimonials',
    'cms-testimonials': 'Client & Learner Testimonials',
    'gallery': 'Photo Gallery Showcase',
    'cms-gallery': 'Photo Gallery Showcase',
    'videos': 'Video & Documentary Hub',
    'cms-videos': 'Video & Documentary Hub',
    'media': 'Media Appearances & Coverage',
    'cms-media': 'Media Appearances & Coverage',
    'press': 'Press & Corporate Content',
    'cms-press': 'Press & Corporate Content',
    'faq': 'Support FAQ & Knowledge Base',
    'cms-faq': 'Support FAQ & Knowledge Base',
    'partners': 'Trusted Institutional Partners',
    'cms-partners': 'Trusted Institutional Partners'
  };
  return map[param] || categoryParam;
};

// 1. GET /api/v1/cms/:category (Public & Admin Fetch from Database)
const getCategoryItems = async (req, res) => {
  try {
    const { category } = req.params;
    const isPublicQuery = req.query.public === 'true';
    const targetCat = getCategoryString(category);

    const whereClause = {
      deletedAt: null
    };

    if (category !== 'all' && category !== 'ALL') {
      whereClause.category = targetCat;
    }

    if (isPublicQuery) {
      whereClause.status = { in: ['PUBLISHED', 'Published', 'published'] };
      whereClause.visibility = { in: ['PUBLIC', 'PUBLIC', 'VISIBLE', 'Visible', 'visible'] };
    }

    const items = await prisma.contentItem.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });

    const processed = items.map((i) => evaluateItemLifecycle(i));

    res.status(200).json({ success: true, data: processed });
  } catch (error) {
    console.error('getCategoryItems Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 2. POST /api/v1/cms/:category (Create in Database)
const createCategoryItem = async (req, res) => {
  try {
    const { category } = req.params;
    const targetCat = getCategoryString(category);
    const title = req.body.title || req.body.name || `New ${targetCat} Entry`;
    const baseSlug = (req.body.slug || title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;

    const status = (req.body.status || 'PUBLISHED').toUpperCase();
    const visibility = (req.body.visibility || (status === 'PUBLISHED' ? 'PUBLIC' : 'HIDDEN')).toUpperCase();

    const created = await prisma.contentItem.create({
      data: {
        title,
        slug,
        category: targetCat,
        excerpt: req.body.summary || req.body.excerpt || req.body.description || '',
        content: req.body.fullContent || req.body.content || '',
        coverImage: req.body.coverImage || req.body.photo || req.body.image || null,
        contentType: req.body.contentType || 'ARTICLE',
        status,
        visibility,
        featured: Boolean(req.body.featured),
        author: req.body.author || 'Editorial Team',
        client: req.body.client || req.body.outlet || null,
        readTime: req.body.readTime || '5 min read',
        priority: req.body.priority || 'NORMAL',
        eventDate: req.body.eventDate || req.body.date || null,
        eventTime: req.body.eventTime || req.body.time || null,
        location: req.body.location || null,
        videoUrl: req.body.videoUrl || null,
        techStack: req.body.techStack || null,
        impact: req.body.impact || null,
        quote: req.body.quote || null,
        role: req.body.role || req.body.type || null,
        question: req.body.question || null,
        answer: req.body.answer || null
      }
    });

    await logAuditActivity(req.body.user, `CREATED_${status}`, targetCat, title, created.id);

    res.status(201).json({ success: true, data: created });
  } catch (error) {
    console.error('createCategoryItem Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 3. PUT /api/v1/cms/:category/:id (Update in Database)
const updateCategoryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await prisma.contentItem.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Content item not found.' });
    }

    const nextStatus = req.body.status ? req.body.status.toUpperCase() : existing.status;
    const nextVis = req.body.visibility ? req.body.visibility.toUpperCase() : existing.visibility;

    const updated = await prisma.contentItem.update({
      where: { id },
      data: {
        title: req.body.title || existing.title,
        excerpt: req.body.summary !== undefined ? req.body.summary : (req.body.excerpt !== undefined ? req.body.excerpt : existing.excerpt),
        content: req.body.fullContent !== undefined ? req.body.fullContent : (req.body.content !== undefined ? req.body.content : existing.content),
        coverImage: req.body.coverImage !== undefined ? req.body.coverImage : existing.coverImage,
        videoUrl: req.body.videoUrl !== undefined ? req.body.videoUrl : existing.videoUrl,
        status: nextStatus,
        visibility: nextVis,
        featured: req.body.featured !== undefined ? Boolean(req.body.featured) : existing.featured,
        author: req.body.author !== undefined ? req.body.author : existing.author,
        client: req.body.client !== undefined ? req.body.client : existing.client,
        readTime: req.body.readTime !== undefined ? req.body.readTime : existing.readTime,
        priority: req.body.priority !== undefined ? req.body.priority : existing.priority,
        eventDate: req.body.eventDate !== undefined ? req.body.eventDate : existing.eventDate,
        expiresAt: req.body.expiryDate ? new Date(req.body.expiryDate) : existing.expiresAt,
        expirationEnabled: req.body.expiryDate ? true : existing.expirationEnabled
      }
    });
        featured: req.body.featured !== undefined ? Boolean(req.body.featured) : existing.featured,
        author: req.body.author !== undefined ? req.body.author : existing.author,
        client: req.body.client !== undefined ? req.body.client : existing.client,
        readTime: req.body.readTime !== undefined ? req.body.readTime : existing.readTime,
        priority: req.body.priority !== undefined ? req.body.priority : existing.priority,
        eventDate: req.body.eventDate !== undefined ? req.body.eventDate : existing.eventDate,
        expiresAt: req.body.expiryDate ? new Date(req.body.expiryDate) : existing.expiresAt,
        expirationEnabled: req.body.expiryDate ? true : existing.expirationEnabled
      }
    });

    await logAuditActivity(req.body.user, `UPDATED_${updated.status}`, updated.category, updated.title, id);

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    console.error('updateCategoryItem Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 4. DELETE /api/v1/cms/:category/:id (Soft Delete in Database)
const deleteCategoryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await prisma.contentItem.findUnique({ where: { id } });
    if (item) {
      await prisma.contentItem.update({
        where: { id },
        data: { deletedAt: new Date() }
      });
      await logAuditActivity(null, 'SOFT_DELETED', item.category, item.title, id);
    }
    res.status(200).json({ success: true, message: 'Item moved to Trash Bin successfully.' });
  } catch (error) {
    console.error('deleteCategoryItem Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 5. GET /api/v1/cms/overview (Dynamic Aggregate Database Counts)
const getOverviewStats = async (req, res) => {
  try {
    const totalContent = await prisma.contentItem.count({ where: { deletedAt: null } });
    const published = await prisma.contentItem.count({ where: { deletedAt: null, status: 'PUBLISHED', visibility: { in: ['PUBLIC', 'VISIBLE'] } } });
    const drafts = await prisma.contentItem.count({ where: { deletedAt: null, status: 'DRAFT' } });
    const scheduled = await prisma.contentItem.count({ where: { deletedAt: null, status: 'SCHEDULED' } });
    const hidden = await prisma.contentItem.count({ where: { deletedAt: null, OR: [{ status: 'HIDDEN' }, { visibility: 'HIDDEN' }] } });
    const expired = await prisma.contentItem.count({ where: { deletedAt: null, status: 'EXPIRED' } });
    const archived = await prisma.contentItem.count({ where: { deletedAt: null, status: 'ARCHIVED' } });
    const trashCount = await prisma.contentItem.count({ where: { NOT: { deletedAt: null } } });

    const recentLogs = await prisma.auditLog.findMany({
      take: 10,
      orderBy: { timestamp: 'desc' }
    });

    res.status(200).json({
      success: true,
      data: {
        totalContent,
        published,
        drafts,
        scheduled,
        hidden,
        expired,
        archived,
        trashCount,
        recentLogs
      }
    });
  } catch (error) {
    console.error('getOverviewStats Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 6. GET /api/v1/cms/trash (Fetch Soft Deleted Items from Database)
const getTrashItems = async (req, res) => {
  try {
    const trash = await prisma.contentItem.findMany({
      where: { NOT: { deletedAt: null } },
      orderBy: { deletedAt: 'desc' }
    });
    res.status(200).json({ success: true, data: trash });
  } catch (error) {
    console.error('getTrashItems Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 7. POST /api/v1/cms/trash/restore/:id (Restore Record in Database)
const restoreCategoryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const restored = await prisma.contentItem.update({
      where: { id },
      data: { deletedAt: null }
    });
    await logAuditActivity(null, 'RESTORED', restored.category, restored.title, id);
    res.status(200).json({ success: true, data: restored, message: 'Item restored successfully.' });
  } catch (error) {
    console.error('restoreCategoryItem Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 8. DELETE /api/v1/cms/trash/permanent/:id (Permanently Erase Record from Database)
const permanentlyDeleteCategoryItem = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.contentItem.delete({ where: { id } });
    await logAuditActivity(null, 'PERMANENTLY_DELETED', 'Trash', 'Database Record', id);
    res.status(200).json({ success: true, message: 'Item permanently deleted from database.' });
  } catch (error) {
    console.error('permanentlyDeleteCategoryItem Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 9. POST /api/v1/cms/bulk (Bulk Database Updates)
const bulkCmsAction = async (req, res) => {
  try {
    const { action, ids } = req.body;
    if (!Array.isArray(ids) || !ids.length) {
      return res.status(400).json({ success: false, message: 'No record IDs provided for bulk action.' });
    }

    if (action === 'PUBLISH') {
      await prisma.contentItem.updateMany({
        where: { id: { in: ids } },
        data: { status: 'PUBLISHED', visibility: 'PUBLIC' }
      });
    } else if (action === 'HIDE') {
      await prisma.contentItem.updateMany({
        where: { id: { in: ids } },
        data: { status: 'HIDDEN', visibility: 'HIDDEN' }
      });
    } else if (action === 'ARCHIVE') {
      await prisma.contentItem.updateMany({
        where: { id: { in: ids } },
        data: { status: 'ARCHIVED', visibility: 'HIDDEN' }
      });
    } else if (action === 'DELETE') {
      await prisma.contentItem.updateMany({
        where: { id: { in: ids } },
        data: { deletedAt: new Date() }
      });
    }

    await logAuditActivity(null, `BULK_${action}`, 'Bulk Operations', `${ids.length} Records`, ids.join(','));
    res.status(200).json({ success: true, message: `Bulk action "${action}" completed for ${ids.length} database records.` });
  } catch (error) {
    console.error('bulkCmsAction Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 10. GET /api/v1/cms/audit-logs (Fetch Audit Logs from Database)
const getAuditLogs = async (req, res) => {
  try {
    const logs = await prisma.auditLog.findMany({
      take: 100,
      orderBy: { timestamp: 'desc' }
    });
    res.status(200).json({ success: true, data: logs });
  } catch (error) {
    console.error('getAuditLogs Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getCategoryItems,
  createCategoryItem,
  updateCategoryItem,
  deleteCategoryItem,
  getOverviewStats,
  getTrashItems,
  restoreCategoryItem,
  permanentlyDeleteCategoryItem,
  bulkCmsAction,
  getAuditLogs
};
