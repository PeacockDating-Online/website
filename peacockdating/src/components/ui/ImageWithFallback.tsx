import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export function ImageWithFallback({ fallback, onError, ...rest }: Props) {
  const [errored, setErrored] = useState(false);
  return (
    <img
      {...rest}
      onError={(e) => {
        if (!errored && fallback) {
          setErrored(true);
          (e.currentTarget as HTMLImageElement).src = fallback;
        }
        onError?.(e);
      }}
    />
  );
}
