import useDocumentTitle from '../components/hooks/useDocumentTitle.tsx';

export function NotFound() {
  useDocumentTitle('Page not found | Linnus Fritid');
  return <div>NotFound</div>;
}

export default NotFound;