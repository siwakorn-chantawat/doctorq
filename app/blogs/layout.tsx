import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
