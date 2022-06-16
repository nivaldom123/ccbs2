const LoadingComponent = () => {
  return (
    <div
      style={{
        minHeight: "150px",
        background: "var(--secondry-background)",
        width: "100%",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: ".9rem",
        color: "var(--tertiary-color)",
      }}
    >
      Loading...
    </div>
  );
};

export default LoadingComponent;
