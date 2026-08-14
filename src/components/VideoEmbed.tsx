import PlaceholderMedia from "@/components/PlaceholderMedia";

type VideoEmbedProps = {
  /** Embed-URL, bijv. https://www.youtube.com/embed/XXXX of https://player.vimeo.com/video/XXXX */
  url?: string;
  title: string;
  className?: string;
};

export default function VideoEmbed({ url, title, className = "" }: VideoEmbedProps) {
  if (!url) {
    return <PlaceholderMedia label={`video — ${title}`} className={className} />;
  }

  return (
    <div className={`relative aspect-video overflow-hidden bg-ink ${className}`}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
