import formatUrl from "./formatUrl";

describe("formatUrl", () => {
  const useApiInput = {
    path: "messages",
    params: {
      page: 1,
      perPage: 10,
    },
  };

  it("returns formatted url", () => {
    const formattedUrl = formatUrl(useApiInput);
    expect(formattedUrl).toContain("messages?page=1&perPage=10");
  });
});
