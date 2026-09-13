/** Cross-module focus bus: a toast click or a heatmap cell click asks the
 *  dashboard panel to reveal one host card (scroll to + flash) and optionally
 *  expand one of its GPU rows. Kept in its own module so index.tsx and
 *  DashboardPanel.tsx can both subscribe without a circular import. */
export interface FocusTarget {
  hostId: string;
  /** expand this GPU row after revealing the card */
  gpuIndex?: number;
}

export const focusBus = {
  value: null as FocusTarget | null,
  listeners: new Set<() => void>(),
  subscribe(listener: () => void) {
    focusBus.listeners.add(listener);
    return () => {
      focusBus.listeners.delete(listener);
    };
  },
  getSnapshot(): FocusTarget | null {
    return focusBus.value;
  },
  set(next: FocusTarget | null) {
    const cur = focusBus.value;
    const same = (cur === null && next === null)
      || (cur !== null && next !== null && cur.hostId === next.hostId && cur.gpuIndex === next.gpuIndex);
    if (same) return;
    focusBus.value = next;
    for (const listener of focusBus.listeners) listener();
  },
};
