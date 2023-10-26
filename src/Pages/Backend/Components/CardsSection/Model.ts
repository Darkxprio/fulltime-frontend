export interface IndexProps {}

export interface CommitData {
  commit: {
    author: {
      name: string;
      date: string;
      email: string;
    };
    message: string;
  };
  html_url: string;
}
