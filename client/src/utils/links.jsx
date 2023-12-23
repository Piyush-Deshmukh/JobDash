import { FaChartSimple, FaRegFileLines, FaSearchengin, FaShieldHalved, FaUserTie } from 'react-icons/fa6';

const links = [
  { text: 'add job', path: '.', icon: <FaRegFileLines /> },
  { text: 'all jobs', path: 'all-jobs', icon: <FaSearchengin /> },
  { text: 'stats', path: 'stats', icon: <FaChartSimple /> },
  { text: 'profile', path: 'profile', icon: <FaUserTie /> },
  { text: 'admin', path: 'admin', icon: <FaShieldHalved /> },
];

export default links;