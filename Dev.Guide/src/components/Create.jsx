const Create = () => {
  return (
    <div className="create text-white md:w-4/5 mx-auto">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-8 text-center">
        CREATE GUIDE
      </h1>
      <form className="flex-col">
        <div className="my-4">
          <label className="text-xl font-bold">TITLE</label>
          <input
            className="block w-full rounded h-10 md:h-16 p-2 text-black mt-2"
            type="text"
            required
          />
        </div>
        <div className="my-6">
          <label className="text-xl font-bold">BODY</label>
          <textarea
            className="block block w-full rounded h-40 md:h-60 p-2 text-black mt-2"
            required
          ></textarea>
        </div>
        <div className="my-4">
          <label className="text-xl font-bold">AUTHOR</label>
          <input
            className="block w-full rounded h-10 md:h-16 p-2 text-black mt-2"
            type="text"
          />
        </div>
        <div className="flex justify-end mt-8">
          <button className="bg-green-400 text-neutral-900 py-2 px-4 md:py-3 md:px-12 rounded font-bold hover:bg-green-600">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
