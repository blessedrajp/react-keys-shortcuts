import { useEffect, useCallback } from 'react';

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
 * useListenEvent — wraps a given event handler and also listens for a keyboard shortcut.
 */
export const useListenEvent = <T extends any[] = any[]>(
  formula: string,
  handler: (...args: T) => void,
  options: ShortcutOptions = {}
) => {
  const shortcutHandler = useCallback(
    (e: KeyboardEvent) => {
      const parsed = parseFormula(formula);
      const { ctrlKey, altKey, shiftKey, metaKey, key } = e;

      if (
        ctrlKey === parsed.ctrl &&
        altKey === parsed.alt &&
        shiftKey === parsed.shift &&
        metaKey === parsed.meta &&
        key.toLowerCase() === parsed.key
      ) {
        if (options.preventDefault) e.preventDefault();
        handler(...([] as unknown as T)); // no args
      }
    },
    [formula, handler, options]
  );

  useEffect(() => {
    window.addEventListener('keydown', shortcutHandler);
    return () => {
      window.removeEventListener('keydown', shortcutHandler);
    };
  }, [shortcutHandler]);

  return (...args: T) => {
    handler(...args);
  };
};
