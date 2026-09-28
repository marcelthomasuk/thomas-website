import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { getPageByPath, getParentPageByPath } from '~/page';

export function usePage() {
  const location = useLocation();
  const page = getPageByPath(location.pathname);
  const parentPage = getParentPageByPath(location.pathname);

  useEffect(() => {
    document.title = `${parentPage.title} | Marcel Thomas`;
  }, [parentPage]);

  return page;
}
