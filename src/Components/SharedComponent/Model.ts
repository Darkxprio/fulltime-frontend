export interface SharedComponentProps {
  title: string;
  data: DataType[];
}

interface DataType {
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
