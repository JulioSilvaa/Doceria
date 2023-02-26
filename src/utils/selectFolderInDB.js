export const SelectFolderImage = (params) => {
  const itemInFolder = params?.filter((item) => item.folder === "galeria");

  return itemInFolder;
};
export const SelectFolderSlide = (params) => {
  const itemInFolder = params?.filter((item) => item.folder === "slide");

  return itemInFolder;
};
