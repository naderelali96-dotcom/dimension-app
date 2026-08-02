import { SQUIRE_SHOP_ROUTE } from "@/lib/site-config";

export default function BookingButton({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`book_button${className ? ` ${className}` : ""}`}
      data-shop-route={SQUIRE_SHOP_ROUTE}
      style={style}
    >
      {children}
    </button>
  );
}
