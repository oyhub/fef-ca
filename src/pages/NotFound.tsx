import useDocumentTitle from '../components/hooks/useDocumentTitle.tsx';

export function NotFound() {
  useDocumentTitle('Page not found | Blue Lion');
  return <div>NotFound</div>;
}

export default NotFound;