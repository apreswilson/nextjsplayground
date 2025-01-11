"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect, Suspense } from "react";
import { Tooltip } from "flowbite-react";
export default function Home() {
  const [pageState, setPageState] = useState<
    "initial" | "review" | "submitted" | "loading"
  >("initial");
  const router = useRouter();

  const handlePageStateChange = async (
    newPageState: "initial" | "review" | "submitted" | "loading"
  ) => {
    setPageState("loading");
  };

  return (
    <main className="flex flex-col gap-8">
      <button onClick={() => handlePageStateChange("review")}>Review</button>
      {pageState === "review" && (
        <>
          <button>Review</button>
          <button>Submit</button>
        </>
      )}
      <button onClick={() => router.push("/test1")}>Navigate</button>
      <Suspense fallback={<Loading />}>
        <FetchData />
      </Suspense>
    </main>
  );
}

function Loading() {
  return (
    <p>
      AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    </p>
  );
}

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json(); // Parse the JSON response
        setData(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
