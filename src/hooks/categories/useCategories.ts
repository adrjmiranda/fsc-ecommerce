import { CATEGORIES } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { CategoryService } from '@/services/category';

const useCategories = () => {
  return useQuery({
    queryKey: [CATEGORIES],
    queryFn: CategoryService.fetchAll,
  });
};

export { useCategories };
