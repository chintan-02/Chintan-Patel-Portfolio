import { useLocation } from 'react-router-dom';
import { HomeHeader, CompactHeader } from './HomeHeader.jsx';
export function Navbar(){const {pathname}=useLocation();return pathname==='/'?<HomeHeader/>:<CompactHeader/>;}
