const Tag = ({ tag }) => {
  return (
    <span className="mx-1 rounded-full border border-solid border-black bg-transparent px-2 text-sm font-medium text-black backdrop-blur-sm">
      {tag}
    </span>
  );
};

export default Tag;
