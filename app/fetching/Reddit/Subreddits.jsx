import { createClient } from '../../supabase/client';

const fetchSubreddits = async (subredditName) => {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('reddits')
      .select('title')
      .ilike('title', `%${subredditName}%`); // Perform a case-insensitive search

    if (error) {
      throw new Error(error.message || 'Error fetching data from Supabase');
    }
    return data;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong fetching subreddits');
  }
};

export default fetchSubreddits;
