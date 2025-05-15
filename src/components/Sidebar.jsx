import React from 'react';
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  Receipt,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ✅ NavItem must come BEFORE export default
const NavItem = ({ icon, label, to }) => (
  <Link
    to={to}
    className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer transition-all"
  >
    {icon}
    <span className="text-base">{label}</span>
  </Link>
);

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-8 text-center">Billing System</h1>
      
      <nav className="space-y-4">
        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" to="/dashboard" />
        <NavItem icon={<Package size={20} />} label="Item" to="/item" />
        <NavItem icon={<Users size={20} />} label="Customer" to="/customer" />
        <NavItem icon={<FileText size={20} />} label="Estimate" to="/estimate" />
        <NavItem icon={<Receipt size={20} />} label="Invoice" to="/invoice" />
        <NavItem icon={<Settings size={20} />} label="Setting" to="/setting" />
      </nav>
    </div>
  );
};

export default Sidebar;
