export interface IAppState {
  isVisibleMenu: boolean
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  isScrolled: boolean
}

export interface IAppActions {
  setIsVisibleMenu: (isVisibleMenu: boolean) => void
  setIsLoading: (isLoading: boolean) => void
  setIsSuccess: (isSuccess: boolean) => void
  setIsError: (isError: boolean) => void
  setIsScrolled: (isScrolled: boolean) => void
  toggleIsVisibleMenu: () => void
}

export interface IAppStore extends IAppState, IAppActions {}
