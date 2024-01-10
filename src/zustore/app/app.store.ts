import { createZustand } from '../../libs'
import { INITIAL_STATE } from './app.initial'
import { IAppStore } from './app.interface'

export const useApp = createZustand<IAppStore>()((set, get) => ({
  isVisibleMenu: INITIAL_STATE.isVisibleMenu,
  isLoading: INITIAL_STATE.isLoading,
  isSuccess: INITIAL_STATE.isSuccess,
  isError: INITIAL_STATE.isError,
  isScrolled: INITIAL_STATE.isScrolled,

  setIsVisibleMenu: (isVisibleMenu) => set({ isVisibleMenu }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsSuccess: (isSuccess) => set({ isSuccess }),
  setIsError: (isError) => set({ isError }),
  setIsScrolled: (isScrolled) => set({ isScrolled }),
  toggleIsVisibleMenu: () => {
    const isVisibleMenu = get().isVisibleMenu
    set({ isVisibleMenu: !isVisibleMenu })
  },
}))
