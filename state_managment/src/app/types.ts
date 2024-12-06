export interface CounterState { value: number }
export interface PostItem {
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
  
  export interface PostsResponse {
    posts: PostItem[];
    total: number;
    skip: number;
    limit: number;
  }
