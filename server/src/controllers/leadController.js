const prisma = require('../config/database');

exports.submitLead = async (req, res) => {
  const { fullName, email, phone, inquiryType, message } = req.body;
  try {
    const lead = await prisma.lead.create({
      data: { fullName, email, phone, inquiryType, message }
    });
    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllLeads = async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const lead = await prisma.lead.update({
      where: { id },
      data: { status }
    });
    res.json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteLead = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.lead.delete({ where: { id } });
    res.json({ success: true, message: 'Lead deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};