import { useLocation } from 'react-router-dom';
import { metadataForPath } from '../../data/routeMetadata.js';
import { PageMeta } from './PageMeta.jsx';

export function RouteMetadata() {
  const { pathname } = useLocation();
  return <PageMeta {...metadataForPath(pathname)} />;
}
