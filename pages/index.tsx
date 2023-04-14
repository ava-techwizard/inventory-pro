import React from "react";
import { getAllUsers } from "../prisma/user";

const Homepage: React.FC<{ users: any }> = ({ users }) => {
  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export const getServerSideProps = async ({ req }: { req: any }) => {
  const users = await getAllUsers();

  // Convert the updatedAt and createdAt in each user to string
  // Otherwise, Next.js will throw an error
  // Not required if you are not using the date fields

  const updatedUsers = users.map((user: any) => ({
    ...user,
    updatedAt: user.updatedAt.toString(),
    createdAt: user.createdAt.toString(),
  }));

  return { props: { users: updatedUsers } };
};

export default Homepage;
