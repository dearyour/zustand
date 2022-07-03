import React, { useEffect } from "react";
import axios from "axios";
import create from "zustand";

const useStore = create((set, get) => ({
  //   id: 2,
  //   setId: (id) => set({ id: id }),
  userName: "jimmy",
  fetchUserName: async (id) => {
    const response = await axios.get(`/api/user-name?id=${id}`);
    set({ userName: response.data.name });
  },
}));

const CurrentUser = () => {
  const userName = useStore((state) => state.userName);
  return (
    <>
      <div>{userName}</div>
    </>
  );
};

export default function CurrentUserInfo() {
  //   const [id, setId] = useStore((state) => [state.id, state.setId]);
  const fetchUserName = useStore((state) => state.fetchUserName);

  //   useEffect(() => {
  //     fetchUserName();
  //   }, [id]);

  return (
    <>
      <CurrentUser />
      {/* <input value={id} onChange={(e) => setId(e.target.value)} /> */}
      <input onChange={(e) => fetchUserName(e.target.value)} />
    </>
  );
}
