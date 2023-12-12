interface BlogPageProps {
  children: React.ReactNode;
}

const FriendsPage: React.FC<BlogPageProps> = ({ children }) => {
  return <div>This is blog page</div>;
};

export default FriendsPage;
