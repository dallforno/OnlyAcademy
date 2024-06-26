import supabase from './supabaseClient';

export const createProfile = async (profileData) => {
  const { data, error } = await supabase
    .from('profile')
    .insert(profileData);

  if (error) {
    console.error('Error creating profile:', error);
    return null;
  }

  return data;
};

export const createPost = async (postData) => {
  const { data, error } = await supabase
    .from('posts')
    .insert(postData);

  if (error) {
    console.error('Error creating post:', error);
    return null;
  }

  return data;
};

export const getImagesFromSupabase = async () => {
    try {
      const { data, error } = await supabase
        .from('posts') // Nome da tabela no Supabase onde as imagens estão armazenadas
        .select('image_url'); // Campo que contém a URL da imagem o
  
      if (error) {
        throw error;
      }
  
      return data; // Retorna os dados das imagens (um array de objetos contendo URLs)
    } catch (error) {
      throw error;
    }
  };
