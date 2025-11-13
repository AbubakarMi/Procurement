export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Procurement', href: '/procurement' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resources', href: '/resources' },
  { name: 'Complaints', href: '/complaints' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export const stats = [
  { label: 'Projects', value: '150+' },
  { label: 'Tenders', value: '320+' },
  { label: 'Complaints', value: '98%' },
];

export const complaintStats = [
    { label: 'Total Submitted', value: '1,245' },
    { label: 'Resolved', value: '1,180' },
    { label: 'In Progress', value: '65' },
];

export const news = [
  { id: 1, title: 'New Bridge to Connect North and South Districts', snippet: 'The ministry has approved the construction of a new suspension bridge, expected to reduce travel time by 45 minutes.', date: '2024-07-20' },
  { id: 2, title: 'Rural Electrification Project Phase 3 Completed', snippet: 'Over 50,000 households in rural areas now have access to reliable electricity thanks to the latest phase of our project.', date: '2024-07-18' },
  { id: 3, title: 'Procurement Process Overhauled for Transparency', snippet: 'New digital measures have been put in place to ensure all government tenders are awarded with maximum transparency.', date: '2024-07-15' },
  { id: 4, title: 'Highway A1 Expansion to Begin Next Month', snippet: 'The long-awaited expansion of Highway A1 will commence in August, aiming to ease traffic congestion.', date: '2024-07-12' },
  { id: 5, title: 'Ministry Launches Digital Initiative for Citizen Services', snippet: 'A new portal has been launched to streamline access to various citizen services online.', date: '2024-07-10' },
  { id: 6, title: 'Water Supply Network Upgraded in Western Region', snippet: 'The upgrade ensures clean and consistent water supply to over 1 million residents.', date: '2024-07-08' },
];

export const tenders = [
  { id: 1, title: 'Construction of 10 Primary Schools', category: 'Construction', closingDate: '2024-08-15', status: 'Open' },
  { id: 2, title: 'Supply of IT Equipment for Ministry Offices', category: 'Supplies', closingDate: '2024-08-10', status: 'Open' },
  { id: 3, title: 'Road Maintenance Services for Urban Areas', category: 'Services', closingDate: '2024-08-20', status: 'Open' },
  { id: 4, title: 'Consultancy for new Metro Line', category: 'Consultancy', closingDate: '2024-09-01', status: 'Open' },
  { id: 5, title: 'Janitorial Services for Government Buildings', category: 'Services', closingDate: '2024-07-30', status: 'Closed' },
  { id: 6, title: 'Development of a new Public Park', category: 'Construction', closingDate: '2024-08-25', status: 'Open' },
  { id: 7, title: 'Supply of Medical Equipment for Hospitals', category: 'Supplies', closingDate: '2024-09-05', status: 'Open' },
  { id: 8, title: 'Upgrade of National Power Grid', category: 'Infrastructure', closingDate: '2024-10-01', status: 'Open' },
];

export const quickLinks = [
    { title: 'Tender Templates', href: '/resources' },
    { title: 'Procurement Policies', href: '/resources' },
    { title: 'Annual Reports', href: '/resources' },
];

export const resources = [
  { id: 1, title: 'Tender Submission Form', category: 'Forms', description: 'Official form for submitting tender applications.' },
  { id: 2, title: 'Procurement Policy 2024', category: 'Policies', description: 'The latest official procurement policy document.' },
  { id: 3, title: 'Contractor Prequalification Guide', category: 'Templates', description: 'A guide and template for contractor prequalification.' },
  { id: 4, title: 'Project Proposal Template', category: 'Templates', description: 'Standard template for submitting new project proposals.' },
  { id: 5, title: 'Annual Report 2023', category: 'Reports', description: 'The complete annual report for the fiscal year 2023.' },
  { id: 6, 'title': 'Environmental Impact Assessment Form', 'category': 'Forms', 'description': 'Required form for all major construction projects.' },
];

export const staff = [
  { id: 1, name: 'Hon Nura Iro Ma\'aji Phd', role: 'Commissioner', email: 'commissioner@procurement.kn.gov.ng' },
  { id: 2, name: 'Marcus Thorne', role: 'Director of Procurement', email: 'm.thorne@gov.co' },
  { id: 3, name: 'Lena Petrova', role: 'Head of Project Monitoring', email: 'l.petrova@gov.co' },
  { id: 4, name: 'Samuel Jones', role: 'Chief Financial Officer', email: 's.jones@gov.co' },
  { id: 5, name: 'Aisha Khan', role: 'Head of Communications', email: 'a.khan@gov.co' },
  { id: 6, name: 'Kenji Tanaka', role: 'IT Director', email: 'k.tanaka@gov.co' },
];

export const projects = [
  { id: 1, title: 'Kano-Dawakau Road Expansion', status: 'In Progress', region: 'Kano', startDate: '2023-01-15', completionDate: '2025-06-30', progress: 60, location: { lat: 11.9850, lng: 8.5167 } },
  { id: 2, title: 'Gwale General Hospital', status: 'Completed', region: 'Gwale', startDate: '2022-03-01', completionDate: '2024-05-01', progress: 100, location: { lat: 12.0200, lng: 8.5100 } },
  { id: 3, title: 'Tiga Dam Water Treatment Plant', status: 'Planning', region: 'Tiga', startDate: '2024-08-01', completionDate: '2026-12-31', progress: 10, location: { lat: 11.4500, lng: 8.4300 } },
  { id: 4, title: 'Kano Economic City', status: 'In Progress', region: 'Kano', startDate: '2023-05-20', completionDate: '2025-10-15', progress: 45, location: { lat: 11.9700, lng: 8.5500 } },
  { id: 5, title: 'Nassarawa Market Reconstruction', status: 'In Progress', region: 'Nassarawa', startDate: '2023-09-01', completionDate: '2025-03-30', progress: 75, location: { lat: 11.9950, lng: 8.5430 } },
  { id: 6, title: 'Fagge Water Supply Network', status: 'Completed', region: 'Fagge', startDate: '2022-06-15', completionDate: '2024-02-28', progress: 100, location: { lat: 12.0100, lng: 8.5350 } },
  { id: 7, title: 'Dala Hill Tourism Development', status: 'Planning', region: 'Dala', startDate: '2024-10-01', completionDate: '2026-09-30', progress: 5, location: { lat: 11.9800, lng: 8.5000 } },
  { id: 8, title: 'Sabon Gari New City Gate', status: 'In Progress', region: 'Sabon Gari', startDate: '2024-01-10', completionDate: '2025-08-15', progress: 35, location: { lat: 12.0300, lng: 8.5600 } },
];

export const faqs = [
  { id: 1, question: 'How do I submit a complaint?', answer: 'You can submit a complaint by filling out the form on our Complaints & Feedback page. Please provide as much detail as possible.' },
  { id: 2, question: 'How can I track my complaint status?', answer: 'Once you submit a complaint, you will receive a unique tracking ID. You can use this ID in the "Track Complaint" section on the complaints page to see the current status.' },
  { id: 3, question: 'What is the process after a complaint is submitted?', answer: 'Your complaint is assigned to the relevant department for review. Our team will investigate the issue and you will be updated via the tracking portal and email.' },
  { id: 4, question: 'Where can I find information about open tenders?', answer: 'All open tenders are listed on our Procurement page. You can filter by category, year, and status to find relevant opportunities.' },
];
