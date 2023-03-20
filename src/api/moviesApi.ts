
interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  }
  
  interface ApiResponse {
    results: Movie[];
  }
  
  export const fetchMovies = async (q?: string): Promise<ApiResponse | undefined> => {
    let url = 'http://localhost:8080/movies';
    if (q) url = `${url}?q=${q}`
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  