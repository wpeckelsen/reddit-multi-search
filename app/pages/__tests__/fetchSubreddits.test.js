import fetchSubreddits from '../../fetching/Reddit/Subreddits';
import jestConfig from '../../jest.config';
import { createClient } from '../../supabase/client';
jest.mock('../../supabase/client');




describe('fetchSubreddits', () => {
    it('fetches and returns subreddits based on input', async () => {
      const mockData = [{ title: 'cats' }, { title: 'animals' }];
      const mockFrom = jest.fn().mockReturnValue({
        select: jest.fn().mockReturnValue({
          ilike: jest.fn().mockResolvedValue({ data: mockData, error: null }),
        }),
      });
  
      createClient.mockReturnValue({
        from: mockFrom,
      });
  
      const result = await fetchSubreddits('cat');
      expect(result).toEqual(mockData);
    });
  
    it('throws an error if fetching subreddits fails', async () => {
      const mockFrom = jest.fn().mockReturnValue({
        select: jest.fn().mockReturnValue({
          ilike: jest.fn().mockResolvedValue({ data: null, error: 'Error fetching subreddits' }),
        }),
      });
  
      createClient.mockReturnValue({
        from: mockFrom,
      });
  
      await expect(fetchSubreddits('cat')).rejects.toThrow('Error fetching subreddits');
    });
  });