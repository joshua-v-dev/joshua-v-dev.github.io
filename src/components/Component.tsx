interface ComponentProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export const Component = ({
  className,
  children,
  ...props
}: ComponentProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
