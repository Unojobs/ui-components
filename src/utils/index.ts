export const getArgs = (storybookArgs: any) => {
  const props = Object.keys(storybookArgs);
  const finalObj: any = {};
  const states = [];
  for (let i = 0; i < props.length; i++) {
    if (
      storybookArgs[props[i]].control &&
      (storybookArgs[props[i]].control?.type === 'boolean' ||
        storybookArgs[props[i]].control === 'boolean')
    ) {
      states.push(storybookArgs[props[i]]);
    } else {
      finalObj[props[i]] = storybookArgs[props[i]];
    }
    finalObj.states = states;
  }
  return finalObj;
};

export function mergeRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
