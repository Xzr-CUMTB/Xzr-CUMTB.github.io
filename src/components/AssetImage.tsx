import { useState, type ImgHTMLAttributes } from "react";
const reported = new Set<string>();
export function AssetImage({
  src,
  alt = "",
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      loading="lazy"
      {...props}
      onError={() => {
        if (!reported.has(src)) {
          console.error(
            `[Digital Livehouse] 素材加载失败：${src}，请检查 public${src}`,
          );
          reported.add(src);
        }
        setFailed(true);
      }}
    />
  );
}
