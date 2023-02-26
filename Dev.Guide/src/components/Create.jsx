import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added :)");
      setIsPending(false);
      history.push("/guides");
    });
  };

  return (
    <div className="create text-white md:w-4/5 mx-auto">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-8 text-center">
        CREATE GUIDE
      </h1>
      <form onSubmit={handleSubmit} className="flex-col">
        <div className="my-4 text-white">
          <label className="text-xl font-bold">TITLE</label>
          <input
            className="block w-full rounded h-10 md:h-16 p-2 mt-2 bg-neutral-900 border-2"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-6">
          <label className="text-xl font-bold">BODY</label>
          <textarea
            className="block block w-full rounded h-40 md:h-60 p-2 mt-2 bg-neutral-900 border-2"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="my-4">
          <label className="text-xl font-bold">AUTHOR</label>
          <input
            className="block w-full rounded h-10 md:h-16 p-2 mt-2 bg-neutral-900 border-2"
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="flex justify-end mt-8">
          {!isPending && (
            <button className="bg-green-400 text-neutral-900 py-2 px-4 md:py-3 md:px-12 rounded font-bold hover:bg-green-600">
              SUBMIT
            </button>
          )}
          {isPending && (
            <button className="bg-green-400 text-neutral-900 py-2 px-4 md:py-3 md:px-12 rounded font-bold hover:bg-green-600">
              Adding Blog...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
