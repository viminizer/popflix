import { useState } from "react";

interface T {
  [key: string]: any;
}
type FetchFn = () => Promise<T>;
const useFetch = <T>(fetchFunction: FetchFn, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
};
