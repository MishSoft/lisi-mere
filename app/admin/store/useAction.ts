import {create} from 'zustand';

interface ActionState {
  isOpenNotificationBar: boolean
  toggleNotificationBar: () => void
}

export const useActionStore = create<ActionState>((set) => ({
  isOpenNotificationBar: false,
  toggleNotificationBar: () => set((state) => ({
    isOpenNotificationBar: !state.isOpenNotificationBar
  }))
}));


