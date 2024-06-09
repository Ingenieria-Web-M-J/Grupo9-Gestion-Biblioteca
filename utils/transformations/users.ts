export const usersCreateTrasnformations = ({
  name,
  balance,
  creator
}: {
  name: any;
  balance: any;
  creator: any;
}) => {
  const dataCreate = {
    title: name,
    balance: balance,
    creator: {
      connect: {
        email: creator,
      }
    },

  };
  
  return {
    dataCreate
  };
};
