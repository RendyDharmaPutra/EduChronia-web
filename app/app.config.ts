export default defineAppConfig({
  ui: {
    colors: {
      primary: "amber",
      neutral: "obsidian",
    },
    button: {
      slots: {
        base: "cursor-pointer font-bold rounded",
      },
    },
    card: {
      slots: {
        root: "rounded-[16px] bg-[var(--color-paper-surface)] dark:bg-obsidian-800 ring-1 ring-[var(--color-paper-outline)] dark:ring-obsidian-700/50 hover:ring-amber-500/50 transition-colors duration-200",
      },
    },
    input: {
      slots: {
        root: "rounded bg-[var(--color-paper-surface)] dark:bg-obsidian-800 ring-1 ring-[var(--color-paper-outline)] dark:ring-obsidian-700/50 focus-within:ring-2 focus-within:ring-amber-500 transition-colors",
      },
    },
    badge: {
      slots: {
        base: "tracking-widest uppercase font-bold",
      },
      defaultVariants: {
        variant: "subtle",
      },
    },
  },
});
