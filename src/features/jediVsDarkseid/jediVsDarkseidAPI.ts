// A mock function to mimic making an async request for data
export function fetchYourPath() {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: 1 }), 500)
  );
}
