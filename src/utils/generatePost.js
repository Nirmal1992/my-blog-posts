export const generatePost = doc => {
  return {
    id: doc.id,
    ...doc.data(),
  };
};
