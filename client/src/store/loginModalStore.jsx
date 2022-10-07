import create from "zustand";

const loginModalStore = create((set) => ({
    loginModal: false,
    setLoginModal: () => set((state) => ({ loginModal: !state.loginModal })),
}));

export default loginModalStore;