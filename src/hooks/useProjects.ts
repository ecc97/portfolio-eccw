import { useState, useEffect } from 'react';
import { API_URL } from 'astro:env/client';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/projects`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching projects');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
