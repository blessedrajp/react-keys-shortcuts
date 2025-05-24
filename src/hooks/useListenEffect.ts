import { useEffect } from 'react';

type ShortcutOptions = {
  preventDefault?: boolean;
};

const parseFormula = (formula: string) => {
  const keys = formula.toLowerCase().split('+');
  return {
    ctrl: keys.includes('ctrl'),
    alt: keys.includes('alt'),
    shift: keys.includes('shift'),
    meta: keys.includes('meta'),
    key: keys.find(k => !['ctrl', 'alt', 'shift', 'meta'].includes(k)) || '',
  };
};

/**
 * useListenEffect — runs a callback when a keyboard shortcut is pressed.
 */
export const useListenEffect = (
  formula: string,
  callback: (e: KeyboardEvent) => void,
  options: ShortcutOptions = {}
) => {
  useEffect(() => {
    const parsed = parseFormula(formula);

    const handler = (e: KeyboardEvent) => {
      const { ctrlKey, altKey, shiftKey, metaKey, key } = e;

      if (
        ctrlKey === parsed.ctrl &&
        altKey === parsed.alt &&
        shiftKey === parsed.shift &&
        metaKey === parsed.meta &&
        key.toLowerCase() === parsed.key
      ) {
        if (options.preventDefault) e.preventDefault();
        callback(e);
      }
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [formula, callback, options]);
};
