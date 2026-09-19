import { Button } from "../components/common/Button";

export function NotFound() {
  return (
    <div className="container section" style={{ textAlign: "center" }}>
      <h1 className="section-heading">404 — Page Not Found</h1>
      <p style={{ color: "var(--color-mute)", marginBottom: "24px" }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button href="/" variant="primary">
        Back to Home
      </Button>
    </div>
  );
}
