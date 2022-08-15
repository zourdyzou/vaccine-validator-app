import {
  UsersIcon,
  AdjustmentsIcon,
  LocationMarkerIcon,
  QrcodeIcon,
} from '@heroicons/react/outline';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

export const sideBarItems = [
  {
    text: 'Dashboard',
    path: '/',
    icon: <AdjustmentsIcon className="w-6 h-6" />,
  },
  {
    text: 'User',
    path: '/user',
    icon: <UsersIcon className="w-6 h-6" />,
  },
  {
    text: 'Place',
    path: '/place',
    icon: <LocationMarkerIcon className="w-6 h-6" />,
  },
  {
    text: 'Vaccine',
    path: '/vaccine',
    icon: <HealthAndSafetyOutlinedIcon className="w-6 h-6" />,
  },
  {
    text: 'QR Scan',
    path: '/qr-scan',
    icon: <QrcodeIcon className="w-6 h-6" />,
  },
];
