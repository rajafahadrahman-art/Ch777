import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export default function SiteImage({
  src,
  alt,
  title,
  width,
  height,
  priority = false,
  className = "feature-media",
}: SiteImageProps) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        sizes="(max-width: 1120px) 100vw, 1120px"
        priority={priority}
        loading={priority ? undefined : "lazy"}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}
