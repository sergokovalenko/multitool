export const timeoutableFetch = (url: string, options: RequestInit & { timeout?: number }) => {
  const { timeout = 10 * 1000, ...userOptions } = options;
  const controller = new AbortController();
  const { signal } = controller;

  return new Promise<Response>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Request aborted because of timeout'));
      controller.abort();
    }, timeout);

    fetch(url, { signal, ...userOptions })
      .then(resolve, reject)
      .finally(() => clearTimeout(timer));
  });
};
