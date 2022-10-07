import create from "zustand";

const signupModalStore = create((set) => ({
    signupModal: false,
    setSignupModal: () => set((state) => ({ signupModal: !state.signupModal })),
}));

export default signupModalStore;