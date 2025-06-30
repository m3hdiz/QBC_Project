import { create } from "zustand";
import type { User } from "../types/user";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: (user, token) =>
    set(() => ({
      user,
      token,
      isAuthenticated: true,
    })),

  logout: () =>
    set(() => ({
      user: null,
      token: null,
      isAuthenticated: false,
    })),
}));
