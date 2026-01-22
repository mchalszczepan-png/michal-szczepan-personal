import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
        className="sr-only"
        aria-label="Toggle dark mode"
      />
      <div 
        className={`
          w-8 h-4 border border-border bg-secondary
          relative transition-colors duration-200
          ${isDark ? 'bg-primary' : 'bg-secondary'}
        `}
      >
        <div 
          className={`
            absolute top-0.5 w-3 h-3 bg-foreground
            transition-[left] duration-200 ease-in-out
            ${isDark ? 'left-[calc(100%-14px)]' : 'left-0.5'}
          `}
        />
      </div>
      <span className="ml-2 text-sm text-foreground">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </label>
  );
}
