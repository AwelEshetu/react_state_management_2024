export interface CounterState { value: number }
interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  }
  
  export interface PostResponse {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
  }
