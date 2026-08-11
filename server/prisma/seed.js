const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding YomTech Database...');

  // Create default admin user
  const adminEmail = 'admin@yomtech.com';
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('Admin@123', 10);
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        fullName: 'YomTech Lead Admin',
        role: 'SUPER_ADMIN'
      }
    });
    console.log(`Created default Super Admin: ${admin.email}`);
  } else {
    console.log(`Super Admin ${adminEmail} already exists.`);
  }

  // Create initial demo leads if table is empty
  const leadCount = await prisma.lead.count();
  if (leadCount === 0) {
    await prisma.lead.createMany({
      data: [
        {
          fullName: 'Abebe Bikila',
          email: 'abebe@ethio-tech.com',
          phone: '+251911223344',
          inquiryType: 'B2B_SOFTWARE',
          message: 'Interested in ERP software solution for distribution and logistics.',
          status: 'NEW'
        },
        {
          fullName: 'Sara Tesfaye',
          email: 'sara.t@wabiskills.org',
          phone: '+251922556677',
          inquiryType: 'ACADEMY_ENROLLMENT',
          message: 'Looking for full-stack web & mobile development training program details.',
          status: 'QUALIFIED'
        },
        {
          fullName: 'Dawit Yohannes',
          email: 'dawit@cyber-sec.io',
          phone: '+251933889900',
          inquiryType: 'MEDIA_PARTNERSHIP',
          message: 'Proposal for tech media sponsorship and event collaboration.',
          status: 'CONTACTED'
        }
      ]
    });
    console.log('Seeded sample customer leads.');
  }

  console.log('Database seeding complete!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
