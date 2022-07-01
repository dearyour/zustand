import React from "react";
import create from "zustand"
const useStore = create( set => ({
    fontSize:14,
    increaseFontSize: () => set((state)=> ({fontSize : state.fontSize +1 })),
}))



export default function Text() {
}