'use strict';

import { create } from "zustand";

const useMenuStore = create(set => ({
    menuState: false,
    toggleMenuState: () => set(state => ({menuState: !state.menuState}))
}))

export default useMenuStore;