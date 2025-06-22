

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 border-solid"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
