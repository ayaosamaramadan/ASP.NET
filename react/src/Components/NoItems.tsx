const NoItems = () => {
  return (
    <li className="w-full flex flex-col items-center justify-center py-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-inner border border-purple-200 animate-pulse">
      <span className="text-xl font-semibold text-purple-400">
        No todos found.
      </span>
      <span className="text-sm text-purple-300 mt-2">
        Add your first task above!
      </span>
    </li>
  );
};

export default NoItems;
