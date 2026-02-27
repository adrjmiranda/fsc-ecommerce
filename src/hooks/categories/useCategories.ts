import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { CategoryService } from '@/services/category';

const useCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: CategoryService.fetchAll,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });
};

export { useCategories };
