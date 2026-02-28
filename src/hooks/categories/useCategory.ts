import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { CategoryService } from '@/services/category';

const useCategory = ({ name }: { name: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORY, name],
    queryFn: () => CategoryService.fetchByName(name),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });
};

export { useCategory };
