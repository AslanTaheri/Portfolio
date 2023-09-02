const Tag = ({ tag }) => {
  return (
    <span className="justify-center rounded-full border border-solid border-black bg-transparent px-2 text-xs font-medium text-black backdrop-blur-sm md:text-sm">
      {tag}
    </span>
  );
};

export default Tag;
